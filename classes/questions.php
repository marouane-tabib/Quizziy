<?php
include 'includes/connect.php';

class question extends DB {
  // Methods
    public function show() {
      try {
          $sql = "SELECT * FROM `questions` WHERE id = 3";
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