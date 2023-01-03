<?php
include 'includes/connect.php';

class question extends DB {
  // Methods
    public function show() {
      try {
          $sql = "SELECT questions.* , answers.correct_option , answers.demonstration FROM questions INNER JOIN answers ON questions.id = answers.questions_id";
          $stm = $this->pdo->prepare($sql);
          $stm->execute();
          $result = $stm->fetchAll();
          return $result;
      } catch (PDOException $e) {
          "Erreur" . $e->getMessage();
      }
    }
}

$action = $_REQUEST['action'];

$objQuestion = new question();
if($action=="show"){
	$questions = $objQuestion->show();
	echo json_encode($questions);
}

?>