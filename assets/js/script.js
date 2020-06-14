var main = document.getElementById('main');
var timer = document.getElementById('timer');
var quizWrapper = document.getElementById('quiz-wrapper');
var askQuestion = document.getElementById('askQuestion');
var choice1 = document.getElementById('choice1');
var choice2 = document.getElementById('choice2');
var choice3 = document.getElementById('choice3');
var choice4 = document.getElementById('choice4');
var li = document.getElementById('choice-list');
var startButton = document.getElementById('start-game-button');

//main page - quiz desctiption and button to start quiz
var startPage = function () {
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
    }
]
//set initial question index
var questionIndex = 0;

var questionGame = function () {
    //hide start button
    document.getElementById("start-game-button").style.display = "none";

    //start timer
    var timeLeft = 120;
    var downloadTimer = setInterval(function () {
        if (timeLeft <= 0) {
            clearInterval(downloadTimer);
            document.getElementById("timer").innerHTML = "Finished";
        } else {
            document.getElementById("timer").innerHTML = timeLeft + " seconds remaining";
        }
        timeLeft -= 1;
    }, 1000);

    //main game functionality
    nextQuestion(timeLeft);

    //set timer to high score
    //bring up page for high score
    //enter initials
    //save to local storage
    //go back to main page
}

//display questions and choices on the page with right/wrong function index listener
var nextQuestion = function () {
    if (questionCollection[questionIndex] < 9) {
        askQuestion.textContent = questionCollection[questionIndex].q;
        choice1.addEventListener("click", rightOrWrong); choice1.textContent = questionCollection[questionIndex].choice1;
        choice2.addEventListener("click", rightOrWrong); choice2.textContent = questionCollection[questionIndex].choice2;
        choice3.addEventListener("click", rightOrWrong); choice3.textContent = questionCollection[questionIndex].choice3;
        choice4.addEventListener("click", rightOrWrong); choice4.textContent = questionCollection[questionIndex].choice4;
    } else {
        console.log(timeLeft)
    }
};

// Right or Wrong Function
var rightOrWrong = function (event) {
    var targetEl = event.target;
    if (targetEl.id === questionCollection[questionIndex].a) {
        window.alert("Yay, you got it!")
        questionIndex++;
        nextQuestion();
    } else if (targetEl.id !== questionCollection[questionIndex].a) {
        window.alert("Aww Shux ya missed it kid")
        questionIndex++;
        nextQuestion();
    }
    console.log("started");
}
//top left button to view highscore at anytime

startPage();

// main.addEventListener("click", rightOrWrong);


//for each 