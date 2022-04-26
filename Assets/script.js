const startbutton = document.querySelector("#startBtn");
const quiz = document.querySelector("#quiz");
const questionEl = document.querySelector("#question");
const choices = document.querySelector("#choices");
const Ca = document.querySelector("#choiceA");
const Cb = document.querySelector("#choiceB");
const Cc = document.querySelector("#choiceC");
const Cd = document.querySelector("#choiceD");
const timerD = document.querySelector("#time");
const endQuizD = document.querySelector("#quizOverD");
const initials = document.querySelector("#initials");
var scoreHere = document.querySelector("#scoreD");
var highS = document.querySelector("#highScore");
var hsInit = document.querySelector("#hsInit")
const btn = document.querySelector("#btn");
var score = 100

// question stuff
let questionArray = [
    {
        question: "what color is the sky?",
        Ca : "A. blue",
        Cb : "B. green",
        Cc : "C. yellow",
        Cd : "D. red",
        correct : "A. blue"
    },

    {
        question: "why does css suck?",
        Ca : "A. it doesn't",
        Cb : "B. it's stupid",
        Cc : "C. it's great",
        Cd : "D. it's really easy and fun",
        correct : "B. it's stupid"
    },

    {
        question: "was this hw overdue?",
        Ca : "A. no",
        Cb : "B. yes",
        Cc : "D. turned in early",
        Cd : "C. has always been submitted",
        correct : "B. yes"
    }
];

let lastQuestionIndex = questionArray.length-1;
let runningQuestionIndex = 0;



function renderQuestion(){
    
    let q = questionArray[runningQuestionIndex];

    questionEl.innerHTML = q.question;

    Ca.innerHTML = q.Ca;
    Ca.setAttribute('value', q.Ca)
    Cb.innerHTML = q.Cb;
    Cb.setAttribute('value', q.Cb)
    Cc.innerHTML = q.Cc;
    Cc.setAttribute('value', q.Cc)
    Cd.innerHTML = q.Cd;
    Cd.setAttribute('value', q.Cd)
}
// time stuff
var quizTime = 90;

function startTimer() {
    var timeInterval = setInterval(function () {
      if (quizTime >= 1) {
        timerD.textContent = quizTime + ' seconds remaining';
        quizTime--;
      } else {
        timerD.textContent = '';
        clearInterval(timeInterval);
        endQuiz()
      }
    }, 1000);

}

function checkAnswer(){

    
    if(this.innerText === questionArray[runningQuestionIndex].correct){
        console.log('correct')
        runningQuestionIndex++;
    }
    else{
        console.log('wrong')
        quizTime -= 10
        score -= 25
        if(quizTime < 0){
            quizTime = 0
        }
        timerD.textContent = quizTime + ' seconds remaining';
    }

    

    if(runningQuestionIndex === questionArray.length){
        localStorage.setItem('score', score);
        console.log(localStorage);
        endQuiz();
    }
    else{
        renderQuestion();
    }
}

function endQuiz(){
    console.log("quiz over");
    scoreHere.innerHTML = "Your score was:" + score
}




function start(){
    startTimer();
    renderQuestion();
    $("#header").hide();
    
}



startbutton.addEventListener('click', start)
Ca.addEventListener('click', checkAnswer)
Cb.addEventListener('click', checkAnswer)
Cc.addEventListener('click', checkAnswer)
Cd.addEventListener('click', checkAnswer)

btn.addEventListener('click', function(event){
    localStorage.setItem('initials',initials.value);
    localStorage.setItem('score', score);
    console.log(localStorage);
    highscore()
})

var highscore = function(localStorage){
    if(highS.value < score){
        localStorage.getItem('initials');
        localStorage.getItem('score');
        hsInit.innerHTML = initials
        highS.innerHTML = score
    }
}
//click listener for submit button to kick off localStorage

    // create an array for all scores

    // put new scores into an object 

    // push the new score object to the array

    //local storage the array