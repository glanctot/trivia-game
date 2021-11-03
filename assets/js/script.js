var questions = [
    {
        question: "What is 1 + 1?",
        answer1: "1",
        answer2: "3",
        answer3: "2",
        answer4: "4", 
        answer: 2
    },
    {
        question: "What is 2 + 1?",
        answer1: "1",
        answer2: "3",
        answer3: "2",
        answer4: "4", 
        answer: 3
    },
    {
        question: "What is 3 + 1?",
        answer1: "1",
        answer2: "3",
        answer3: "2",
        answer4: "4", 
        answer: 4
    },
    {
        question: "What is 2 + 2?",
        answer1: "1",
        answer2: "3",
        answer3: "2",
        answer4: "4", 
        answer: 4
    },
    {
        question: "What is 15 + 1?",
        answer1: "1",
        answer2: "16",
        answer3: "2",
        answer4: "4", 
        answer: 16
    },
]

var time = 60;
var timeEl = document.getElementById('timer');
var startEl = document.getElementById('container');
var timerId = setInterval(countdown, 1000);
var score = 0;
var penalty = -5;
var rightAnswer = true;
var questionCounter = 0;

function howToPlay() {
    var rules = document.getElementById('rules');
    rules.style.display = "block";
}

function countdown() {
    if (time >= 1) {
        timeEl.innerHTML = time + " seconds remaining";
        time--;
    } else {
        clearInterval();
        endGame();
    }
}

function startGame() {
    container.innerHTML = "";

    for (var i = 0; i < questions.length; i++) {
        
    }
}

function endGame() {

}



// have start button to start game
// once start button is clicked timer will countdown
// questions will prompt with multiple choice answers
// right answers will generate points
// wrong answers will subtract time
// once time runs out or questions are finished game will end
// score will be logged to localstorage
