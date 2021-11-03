var questions = [
    {
        question: "What is 1 + 1?",
        answer1: ["1", "2", "3", "4"],
        answer: 2
    },
    {
        question: "What is 2 + 1?",
        answer1: ["1", "2", "3", "4"], 
        answer: 3
    },
    {
        question: "What is 3 + 1?",
        answer1: ["1", "2", "3", "4"],
        answer: 4
    },
    {
        question: "What is 2 + 2?",
        answer1: ["1", "2", "3", "4"],
        answer: 4
    },
    {
        question: "What is 15 + 1?",
        answer1: ["1", "16", "2", "4"],
        answer: 16
    },
]

var currentQuestion = {};
var time = 60;
var timeEl = document.getElementById('timer');
var startEl = document.getElementById('start-page');
var container = document.getElementById('container');
var timerId;
var score = 0;
var penalty = 5;
var questionCounter = 0;
var correctScore = 5;
var questionList = document.createElement("ul");


function countdown() {
    if (time >= 1) {
        timeEl.innerHTML = time + " seconds remaining";
        time--;
    } else {
        endGame();
    }
}

function startGame() {

    timerId = setInterval(countdown, 1000);
    
    getQuestion();
}

function getQuestion() {
    startEl.innerHTML = "";
    
    for (var i = 0; i < questions.length; i++) {
        var questionAsked = questions[questionCounter].question;
        var answers = questions[questionCounter].answer1;
        startEl.innerHTML = questionAsked + answers;
    }
}

function endGame() {
    clearInterval(timerId);
}



// have start button to start game
// once start button is clicked timer will countdown
// questions will prompt with multiple choice answers
// right answers will generate points
// wrong answers will subtract time
// once time runs out or questions are finished game will end
// score will be logged to localstorage

// function to call questions
