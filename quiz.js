(function() {
    var questions = [{
      question: "Who is the main protaganist of Naruto?",
      choices: ["Naruto", "Sasuke", "Sakura", "Kakashi"],
      correctAnswer: "Naruto"
    }, {
      question: "What is inside Naruto?",
      choices: ["The nine tailed fox(Kurama)", "A stomach ache", "A demon Snake", "Nothing special"],
      correctAnswer: "The nine tailed fox(Kurama)"
    }, {
      question: "Who does Naruto Marry?",
      choices: ["Ino", "Sakura", "Hinata", "Ten-Ten"],
      correctAnswer: "Hinata"
    }, {
      question: "What is Naruto's special ability move(jutsu)?",
      choices: ["Chidori", "Fire-ball Jutsu", "Rasengan", "Sharingan"],
      correctAnswer: "Rasengan"
    }, {
      question: "What is another name for ninja?",
      choices: ["Konichiwa", "Hokage", "Boruto", "Shinobi"],
      correctAnswer: "Shinobi"
    }];
    console.log(questions);

    var questionCounter = 0; //Tracks question number
    var selections = []; //Array containing user choices
    var quiz = $('#quiz'); //Quiz div object
    
    // Display initial question
    displayNext();
    
    // Click handler for the 'next' button
    $('#next').on('click', function (e) {
      e.preventDefault();
      
      // Suspend click listener during fade animation
      if(quiz.is(':animated')) {        
        return false;
      }
      choose();
      
      // If no user selection, progress is stopped
      if (isNaN(selections[questionCounter])) {
        alert('Please make a selection!');
      } else {
        questionCounter++;
        displayNext();
      }
    });
    console.log(questionCounter)
    
    // Click handler for the 'prev' button
    $('#prev').on('click', function (e) {
      e.preventDefault();
      
      if(quiz.is(':animated')) {
        return false;
      }
      choose();
      questionCounter--;
      displayNext();
    });
    
    // Click handler for the 'Start Over' button
    $('#start').on('click', function (e) {
      e.preventDefault();
      
      if(quiz.is(':animated')) {
        return false;
      }
      questionCounter = 0;
      selections = [];
      displayNext();
      $('#start').hide();
    });
    
    
    // Creates and returns the div that contains the questions and 
    // the answer selections
    function createQuestionElement(index) {
      var qElement = $('<div>', {
        id: 'question'
      });
      
      var header = $('<h2>Question ' + (index + 1) + ':</h2>');
      qElement.append(header);
      
      var question = $('<p>').append(questions[index].question);
      qElement.append(question);
      
      var radioButtons = createRadios(index);
      qElement.append(radioButtons);
      
      return qElement;
    }
    
    // Creates a list of the answer choices as radio inputs
    function createRadios(index) {
      var radioList = $('<ul>');
      var item;
      var input = '';
      for (var i = 0; i < questions[index].choices.length; i++) {
        item = $('<li>');
        input = '<input type="radio" name="answer" value=' + i + ' />';
        input += questions[index].choices[i];
        item.append(input);
        radioList.append(item);
      }
      return radioList;
    }
    
    // Reads the user selection and pushes the value to an array
    function choose() {
      selections[questionCounter] = +$('input[name="answer"]:checked').val();
    }
    
    // Displays next requested element
    function displayNext() {
      quiz.fadeOut(function() {
        $('#question').remove();
        
        if(questionCounter < questions.length){
          var nextQuestion = createQuestionElement(questionCounter);
          quiz.append(nextQuestion).fadeIn();
          if (!(isNaN(selections[questionCounter]))) {
            $('input[value='+selections[questionCounter]+']').prop('checked', true);
          }
          
          // Controls display of 'prev' button
          if(questionCounter === 1){
            $('#prev').show();
          } else if(questionCounter === 0){
            
            $('#prev').hide();
            $('#next').show();
          }
        }else {
          var scoreElem = displayScore();
          quiz.append(scoreElem).fadeIn();
          $('#next').hide();
          $('#prev').hide();
          $('#start').show();
        }
      });
    }
    
    
  })();

function startTimer(duration, display) {
  var timer = duration, minutes, seconds;

var countdown = setInterval(function () {
    minutes = parseInt(timer / 60, 10)
    seconds = parseInt(timer % 60, 10);

    //minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + ":" + seconds;

  $(".startClock").click(function () {
      clearInterval(countdown);
    }); 
    if (--timer < 0) {
          alert("sorry out of time!")
          clearInterval(countdown);
  
          }
}, 1000);
} 

var display = document.querySelector('#time');

function startClock() {
        var seconds = 5;
        startTimer(seconds, display);
        
}



$(".startClock").on("click", function() {
startClock();

});