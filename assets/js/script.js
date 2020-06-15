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
var submitHighScore = document.getElementById("submitHighScore")

//main page - quiz desctiption and button to start quiz
var startPage = function () {
    highScoreDiv.style.display = "none";
    scoreForm.style.display = "none";
    startButton.addEventListener("click", questionGame)
    askQuestion.textContent = "Coding Quiz Challenge"
    choice1.textContent = "When you start the quiz, the timer will start counting down from 120 seconds."
    choice2.textContent = "Answer each question as quickly as you can."
    choice3.textContent = "Wrong answers will remove 10 seconds from your remaining time."
    choice4.textContent = "However much time is left when you complete will be your final score. Good luck!"
}

var questionCollection = [
    {
        q: "Question 1",
        choice1: '1',
        choice2: '2',
        choice3: '3',
        choice4: '4',
        a: 'choice1'
    },
    {
        q: "Question 2",
        choice1: '1',
        choice2: '2',
        choice3: '3',
        choice4: '4',
        a: 'choice2'
    },
    {
        q: "Question 3",
        choice1: '1',
        choice2: '2',
        choice3: '3',
        choice4: '4',
        a: 'choice3'
    },
    {
        q: "Question 4",
        choice1: '1',
        choice2: '2',
        choice3: '3',
        choice4: '4',
        a: 'choice4'
    },
    {
        q: "Question 5",
        choice1: '1',
        choice2: '2',
        choice3: '3',
        choice4: '4',
        a: 'choice1'
    },
    {
        q: "Question 6",
        choice1: '1',
        choice2: '2',
        choice3: '3',
        choice4: '4',
        a: 'choice2'
    },
    {
        q: "Question 7",
        choice1: '1',
        choice2: '2',
        choice3: '3',
        choice4: '4',
        a: 'choice3'
    },
    {
        q: "Question 8",
        choice1: '1',
        choice2: '2',
        choice3: '3',
        choice4: '4',
        a: 'choice4'
    },
    {
        q: "Question 9",
        choice1: '1',
        choice2: '2',
        choice3: '3',
        choice4: '4',
        a: 'choice1'
    },
    {
        q: "Question 10",
        choice1: '1',
        choice2: '2',
        choice3: '3',
        choice4: '4',
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
    var timeLeft = 120;
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
        window.alert("Yay, you got it!")
        questionIndex++;
        nextQuestion();
    } else if (targetEl.id !== questionCollection[questionIndex].a) {
        //subtract time
        var timeLeft = document.getElementById("timer").innerHTML;
        timeLeft = timeLeft - 10;
        document.getElementById("timer").innerHTML = timeLeft;
        console.log(timeLeft)
        //next question
        window.alert("Aww Shux ya missed it kid")
        questionIndex++;
        nextQuestion();
    };
}

var endGamePage = function () {
    //hide timer
    timer.style.display = "none";
    //set timer to high score and retrieve saved high score
    var currentScore = document.getElementById("timer").innerHTML;
    var storedScore = localStorage.getItem("highScore");
    var storedName = localStorage.getItem("highScoreInitials");
    window.alert(storedName)


    //build page
    askQuestion.textContent = "All Done!";
    choiceList.style.display = "none";
    scoreForm.style.display = "block";
    finalScoreP.textContent = "Your final score is " + currentScore;

    //save to local storage
    submitHighScore.addEventListener("click" , saveHighScore);
    var saveHighScore = function (event) {
        var currentScore = document.getElementById("timer").innerHTML;
        var storedScore = localStorage.getItem("highScore");

        if (currentScore > storedScore) {
            localStorage.setItem('highScore' , currentScore); 
            var input = document.getElementById("initials").value;
            localStorage.setItem("highScoreInitials", input);
        }
    }  
}

//Add high score to page
highScoreLister.textContent = "The High Score is " + localStorage.getItem("highScore");
highScoreInitialsLister.textContent = "The High Scorer is " + localStorage.getItem("highScoreInitials");

//display high score when button clicked
highScoreButton.addEventListener("click" , showHighScores);
var showHighScores = function (event) {
    highScoreDiv.style.display = "block";
}

startPage();

//event listener to submit button to save score initals