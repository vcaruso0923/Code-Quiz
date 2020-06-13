var main = document.getElementById('main');
var timer = document.getElementById('timer');
var quizWrapper = document.getElementById('quiz-wrapper');
var askQuestion = document.getElementById('askQuestion');
var choice1 = document.getElementById('choice1');
var choice2 = document.getElementById('choice2');
var choice3 = document.getElementById('choice3');
var choice4 = document.getElementById('choice4');
var li = document.getElementById('choice-list');

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

//main page - button to start quiz

var questionGame = function() {
    //delete main pages content
    //start timer

        //display questions and choices on the page
        askQuestion.textContent = questionCollection[0].q;
        choice1.textContent = questionCollection[0].choice1;
        choice2.textContent = questionCollection[0].choice2;
        choice3.textContent = questionCollection[0].choice3;
        choice4.textContent = questionCollection[0].choice4;
        rightOrWrong();
        //add event listener on to each 
        //right or wrong answer?

    //set timer to high score
    //bring up page for high score
    //enter initials
    //save to local storage
    //go back to main page
}



// Right or Wrong Function
var rightOrWrong = function (event) {
    var targetEl = event.target;
    if (targetEl.id === questionCollection.a) {
        window.alert("Yay, you got it!")
    } else if (targetEl.id !== questionCollection.a){
        window.alert("Aww Shux ya missed it kid")
    }
    console.log("started");
}
//top left button to view highscore at anytime

questionGame();

main.addEventListener("click", rightOrWrong);


//for each 