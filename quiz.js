var startButton = document.getElementById("start");
var questionDisplay = document.getElementById("qDisplay");
var secondsLeft = 15;
var answersEl = document.getElementById("answers");
var timer 
var currentQuestion = 0
function time(){
  timer = setInterval(function(){
    secondsLeft--;
    document.getElementById("timer").textContent = "Time:" + secondsLeft + "sec"
    if(secondsLeft === 0){
      clearInterval(timer)
      console.log("End")
    }
  },1000)
}

function showQuestion () {
  var questionEl = document.getElementById("question")
  answersEl.innerHTML =""
  questionEl.textContent = questions[currentQuestion].question
  for (let i = 0; i < questions[currentQuestion].answers.length; i++){
    var button = document.createElement("button")
    button.textContent = questions[currentQuestion].answers[i]
    button.setAttribute("value", i)
    button.classList.add("answer","btn", "btn-primary")
    answersEl.appendChild(button)
  }
}

function init(){
  time()
  var startScreen = document.getElementById("startScreen")
  startScreen.setAttribute("class", "d-none")
  questionDisplay.classList.remove("d-none")
  showQuestion()
}

function checkAnswer(){
  if(!event.target.classList.contains("answer")) return;
  var userGuess = parseInt(event.target.value)
  if(userGuess !== questions[currentQuestion].correct){
    secondsLeft = secondsLeft 
    console.log("wrong")
    if( secondsLeft === 0){
      alert("Quiz over!")
    }
  } 
  currentQuestion++
  showQuestion()
}



answersEl.addEventListener("click", checkAnswer)
startButton.addEventListener("click", init)
