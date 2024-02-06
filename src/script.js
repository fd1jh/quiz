/* DOM */
let body=document.querySelector('body');
let startButton = document.querySelector(".start-button");
let startWrapper = document.querySelector(".start-wrapper");
let quizWrapper = document.querySelector(".quiz-wrapper");
let questionHeading = document.querySelector(".question-heading");
let answerButtons = document.querySelectorAll(".answer-row > button");

/* project stuff */
let count_of_right=0
let count_of_fall=0
const signs = ["-", "+"];

function startGame() {
  startWrapper.classList.add("hide");
  quizWrapper.classList.remove("hide");
  genarateQuestion();
};

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
};

function calc(num1, num2, sing) {
  if (sing === "+") {
    return num1 + num2;
  } else {
    return num1 - num2;
  }
}



function genarateQuestion() {
    for (let i=0; i<answerButtons.length; i+=1){
        answerButtons[i].style.animation='none'
    }
  let num1 = getRandomInt(50);
  let num2 = getRandomInt(50);
  let sing = signs[getRandomInt(2)];
  let randomAnswerNumber = getRandomInt(5);
  questionHeading.innerHTML = `${num1} ${sing} ${num2}`;
  for (let i = 0; i < answerButtons.length; i += 1) {
    if (i === randomAnswerNumber) {
      answerButtons[i].innerHTML = calc(num1, num2, sing);
      answerButtons[i].addEventListener('click', function(){answerButtons[i].style.animation='anim_btn_true 0.5s linear';})
    } else {
      answerButtons[i].innerHTML = getRandomInt(100);
      answerButtons[i].addEventListener('click', function(){answerButtons[i].style.animation='anim_btn_fall 0.5s linear';})
    }
  }
    answerButtons[randomAnswerNumber].addEventListener('click', function(){count_of_right+=1})
    for (let i=0; answerButtons.length; i+=1){
        answerButtons.addEventListener('click', check(i))
    }

    function check(item){
    return function(){
        if (item===randomAnswerNumber){
            count_of_right+=1
        }
        else{
            count_of_fall+=1
        }
    }
    
}
}


startButton.addEventListener("click", startGame);
for (let i=0; i<answerButtons.length; i+=1){
    answerButtons[i].addEventListener('click', genarateQuestion)
}
setTimeout(function(){console.log(count_of_right, count_of_fall)}, 2000)