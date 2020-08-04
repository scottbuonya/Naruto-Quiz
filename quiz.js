const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

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
        }
    )
}

function showResults() {}

buildQuiz();

submitButton.addEventListener("click" , showResults);

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












