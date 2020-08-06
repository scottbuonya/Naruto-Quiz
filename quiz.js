(function(){
function buildQuiz() {
    const output = [];

    myQuestions.forEach(
        (currentQuestion, questionNumber) => {
            const answers = [];
            for(letter in currentQuestion.answers){
                answers.push(
                    `<label>
                    <input type="radio" name="question${questionNumber}" value="${letter}">
                    ${letter} :
                    ${currentQuestion.answers[letter]}
                    </label>`
                );
            }
            output.push(
                <div class="slide">
                    <div class="question"> ${currentQuestion.question} </div>
                    <div class="answers"> ${answers.join("")} </div>
                </div>   
            );
        }
    );
    quizContainer.innerHTML = output.join("");
}

function showResults() {
    const answersContainers = quizContainer.querySelectorAll(".answers");

    let numCorrect = 0;

    myQuestions.forEach( (currentQuestion, questionNumber) => {

        const answersContainer = answersContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answersContainer.querySelector(selector) || {}).value;


        if(userAnswer === currentQuestion.correctAnswer){
            numCorrect++;

            answersContainers[questionNumber].getElementsByClassName.color = "lightgreen";
        }
        else{
            answersContainers[questionNumber].getElementsByClassName.color = "red";
        }
    });
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
}

function showSlide(n) {
    slides[currentSlide].classList.remove("active-slide");
    slides[n].classList.add("active-slide");
    currentSlide = n;
    if(currentSlide === 0){
        previousButton.style.display = "none";
    }
    else{
        previousButton.style.display = "inline-block";
    }
    if(currentSlide === slides.length-1){
        nextButton.style.display = "none";
        submitButton.style.display = "inline-block";
    }
    else{
        nextButton.style.display = "inline-block";
        submitButton.style.display = "none";
    }
}

function showNextSlide() {
    showSlide(currentSlide + 1);
}

function showPreviousSlide() {
    showSlide(currentSlide -1);
}



const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
const myQuestions = [
    {
        Question: "Who is the main character of Naruto?",
        answers: {
            a: "Sakura",
            b: "Sasuke",
            c: "Naruto"
        },
        correctAnswer: "c"
    },

    {
        Question = "Which of these is another word for ninja?",
        answers: {
            a: "Shadow Warrior",
            b: "Stealth Person",
            c: "Shinobi"
        },
        correctAnswer: "c"
    },

    {
        Question = "Which of these is a female ninja?",
        answers: {
            a: "Sasuke",
            b: "Sakura",
            c: "Sai"
        },
        correctAnswer: "b"
    },

    {
        Question = "What is Naruto's favorite food?",
        answers: {
            a: "Ramen",
            b: "Sushi",
            c: "Tuna"
        },
        correctAnswer: "a"
    },

    {
        Question = "What is inside Naruto?",
        answers: {
            a: "Nothing",
            b: "The nine tail fox (Kurama)",
            c: "A stomach ache"
        },
        correctAnswer: "b"
    },
];

buildQuiz();

const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");
const slides = document.querySelectorAll(".slide");

showSlide(currentSlide);

submitButton.addEventListener("click", showResults);
previousButton.addEventListener("click", showPreviousSlide);
nextButton.addEventListener("click", showNextSlide);
})();











