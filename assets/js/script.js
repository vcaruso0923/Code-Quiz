//get those elements
var main = document.getElementById('main');
var timer = document.getElementById('timer');
var quizWrapper = document.getElementById('quiz-wrapper');
var askQuestion = document.getElementById('askQuestion');
var choice1 = document.getElementById('choice1');
var choice2 = document.getElementById('choice2');
var choice3 = document.getElementById('choice3');
var choice4 = document.getElementById('choice4');
var choiceList = document.getElementById('choice-list');
var startButton = document.getElementById('start-game-button');
var scoreForm = document.getElementById('scoreForm');
var finalScoreP = document.getElementById('finalScoreP');
var highScoreButton = document.getElementById('highscore-button');
var highScoreLister = document.getElementById('highScoreLister');
var highScoreInitialsLister = document.getElementById('highScoreInitialsLister');
var highScoreDiv = document.getElementById("highScoreDiv")
var saveScore = document.getElementById("saveScore")
var backToMain = document.getElementById("backToMain")

//main page - quiz desctiption and button to start quiz
var startPage = function () {
    scoreForm.style.display = "none";
    startButton.addEventListener("click", questionGame)
    askQuestion.textContent = "Coding Quiz Challenge"
    choice1.textContent = "When you start the quiz, the timer will start counting down from 99 seconds."
    choice2.textContent = "Answer each question as quickly as you can."
    choice3.textContent = "Wrong answers will remove 10 seconds from your remaining time."
    choice4.textContent = "However much time is left when you complete will be your final score. Good luck!"
}

var timeLeft = 99;

var questionCollection = [
    {
        q: "How would you listen for an event i.e. a click?",
        choice1: '.addEventListener',
        choice2: 'style.display = "none"',
        choice3: 'document.getElementById',
        choice4: '.innerHTML',
        a: 'choice1'
    },
    {
        q: "How would you change the CSS display styling of a selected element?",
        choice1: '.addEventListener',
        choice2: 'style.display = "none"',
        choice3: 'document.getElementById',
        choice4: '.innerHTML',
        a: 'choice2'
    },
    {
        q: "How would you get and element by it's ID?",
        choice1: '.addEventListener',
        choice2: 'style.display = "none"',
        choice3: 'document.getElementById',
        choice4: '.innerHTML',
        a: 'choice3'
    },
    {
        q: "How would you set a selected element's HTML?",
        choice1: '.addEventListener',
        choice2: 'style.display = "none"',
        choice3: 'document.getElementById',
        choice4: '.innerHTML',
        a: 'choice4'
    },
    {
        q: "How would you define something to be logged in the console?",
        choice1: 'console.log()',
        choice2: 'window.alert()',
        choice3: 'window.prompt',
        choice4: 'window.confirm',
        a: 'choice1'
    },
    {
        q: "How would you make a window pop up that will contain alert text only?",
        choice1: 'console.log()',
        choice2: 'window.alert()',
        choice3: 'window.prompt',
        choice4: 'window.confirm',
        a: 'choice2'
    },
    {
        q: "How would you make a window pop up that will ask a user for text input?",
        choice1: 'console.log()',
        choice2: 'window.alert()',
        choice3: 'window.prompt',
        choice4: 'window.confirm',
        a: 'choice3'
    },
    {
        q: "How would you make a window pop up that will ask a OK or Cancel input?",
        choice1: 'console.log()',
        choice2: 'window.alert()',
        choice3: 'window.prompt',
        choice4: 'window.confirm',
        a: 'choice4'
    },
    {
        q: "How would you prevent the default action from occuring on an event?",
        choice1: 'event.preventDefault();',
        choice2: 'localStorage.getItem',
        choice3: 'localStorage.setItem',
        choice4: 'function()',
        a: 'choice1'
    },
    {
        q: "How would you retrieve something from local storage?",
        choice1: 'event.preventDefault();',
        choice2: 'localStorage.getItem()',
        choice3: 'localStorage.setItem()',
        choice4: 'function()',
        a: 'choice2'
    },
]
//set initial question index
var questionIndex = 0;

var questionGame = function () {
    //hide start button and score form
    document.getElementById("start-game-button").style.display = "none";
    scoreForm.style.display = "none";

    //start timer
    var countdownTimer = setInterval(function () {
        if (timeLeft <= 0) {
            clearInterval(countdownTimer);
            document.getElementById("timer").innerHTML = "No time left!";
        } else {
            document.getElementById("timer").innerHTML = timeLeft;
        }
        timeLeft -= 1;
        console.log(timeLeft);
    }, 1000);


    //main game functionality and high score page
    nextQuestion();
}

//display questions and choices on the page with right/wrong function index listener if questions are left score page if not
var nextQuestion = function () {
    if (questionCollection[questionIndex] === undefined) {
        endGamePage();
    } else {
        askQuestion.textContent = questionCollection[questionIndex].q;
        choice1.addEventListener("click", rightOrWrong); choice1.textContent = questionCollection[questionIndex].choice1;
        choice2.addEventListener("click", rightOrWrong); choice2.textContent = questionCollection[questionIndex].choice2;
        choice3.addEventListener("click", rightOrWrong); choice3.textContent = questionCollection[questionIndex].choice3;
        choice4.addEventListener("click", rightOrWrong); choice4.textContent = questionCollection[questionIndex].choice4;
    };
};
// Right or Wrong Function
var rightOrWrong = function (event) {
    var targetEl = event.target;
    if (targetEl.id === questionCollection[questionIndex].a) {
        questionIndex++;
        nextQuestion();
    } else if (targetEl.id !== questionCollection[questionIndex].a) {
        //subtract time
        timeLeft = timeLeft - 10;
        document.getElementById("timer").innerHTML = timeLeft;
        console.log(timeLeft);
        //next question
        questionIndex++;
        nextQuestion();
    };
}

//End of game 
var endGamePage = function () {
    //hide timer
    timer.style.display = "none";
    //set timer to high score and retrieve saved high score
    var currentScore = document.getElementById("timer").innerHTML;
    localStorage.setItem("currentScore", currentScore);

    //build page
    askQuestion.textContent = "All Done!";
    choiceList.style.display = "none";
    scoreForm.style.display = "block";
    finalScoreP.textContent = "Your final score is " + currentScore;
}

//save high score to local storage
saveScore.addEventListener("click", function (event) {
    event.preventDefault();
    var currentScore = localStorage.getItem("currentScore");
    var storedScore = localStorage.getItem("highScore");

    if (currentScore >= storedScore) {
    localStorage.setItem('highScore', currentScore);
    var input = document.getElementById("initials").value;
    localStorage.setItem("highScoreInitials", input);
    }
});

backToMain.addEventListener("click", startPage);


startPage();