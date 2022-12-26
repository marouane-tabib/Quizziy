
      questionElement = document.querySelector('.card-questions #question');
      optionsContainer = document.querySelector('.card-questions #options');
      let defaultIndex = 0;
      answers = [];

      function steperMove(){
        $('.steper-card .step-box.active').removeClass('active').next().addClass('active');
      }
      function questionsTraffic(){
        var arr = [];
        while(arr.length < questions.length){
            r = Math.floor(Math.random() * (questions.length - 0) + 0);
            if(arr.indexOf(r) === -1) arr.push(r);
        }
        return arr;
      }
      function getQuestions(index){
        options = questions[index].options;
        question = questions[index].question;
        questionElement.innerText = question;
        optionsContainer.innerHTML = "";
        for (const option in options) {
          optionsContainer.innerHTML += `<div class="form-check">
                  <input class="form-check-input" type="radio" name="flexRadioDefault" id="${option}">
                  <label class="form-check-label" for="${option}">
                    ${options[option]}
                  </label>
                </div>`;
        }
      }
      function getStart(){
        steperMove();
        $('.card-intro').hide(1000);
        $('.card-questions').show(1000);
        index = questionsTraffic();
        getQuestions(index[defaultIndex]);
      }
      function next(){
        answer = $('input:checked').attr('id');
        if(answer){
          if (defaultIndex < questions.length) {
            selectAnswers(index[defaultIndex]);
            getQuestions(index[defaultIndex++]);
          }else { getResult(); }
        }else{ alert('please chose option ... ')}
      }