var prevBtn = document.getElementById("previous")
var nextBtn = document.getElementById("next")
var submitBtn = document.getElementById("submit")
var finalResults = document.getElementById("results")
console.log("Hello")



var questionArray = [
    {
        Question: "Who is the main character of Naruto?",
        answers : {
            a: 'Sasuke',
            b: 'Naruto',
            c: 'Sakura',
        },
        correctAnswer : 'b'
    },

    {
        Question: "What is inside of Naruto?",
        answers : {
            a: 'The nine tailed fox (kurama)',
            b: 'A stomach ache',
            c: 'A demon snake',
        },
        correctAnswer : 'a'
    },

    {
        Question: "Who does Naruto marry?",
        answers : {
            a: 'Ino',
            b: 'Ten-Ten',
            c: 'Hinata',
        },
        correctAnswer : 'b'
    }
]
console.log(questionArray)