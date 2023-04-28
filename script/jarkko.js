//variables
//question
const questionEl = document.getElementById("question");
//choices
const choice1El = document.getElementById("choice1");
const choice2El = document.getElementById("choice2");
const choice3El = document.getElementById("choice3");
const choice4El = document.getElementById("choice4");
const choice5El = document.getElementById("choice5");
//feedback
const feedbackEl = document.getElementById("feedback");
//buttons
const checkEl = document.getElementById("check");
const nextEl = document.getElementById("next");
//radio buttons
const radioButtonEls = document.querySelectorAll('input[type="radio"]');
//which question
let q = 0;
//questions
const questions = [
    "Paljonko on 100+100?",
    "Laske 1000 / 10",
    "Paljonko on 5 * 5?",
    "Paljonko on 300-100?",
    "Paljonko 8 * 7?"
];
//choices
const choices = [
    ["20", "100", "200", "1000", "2000"],
    ["100", "10", "1", "1000", "0"],
    ["45", "26", "20", "55", "25"],
    ["100", "200", "300", "20", "400"],
    ["56", "47", "64", "45", "36"],
];
const answers = []; //answers
const correctAnswers = [2, 0, 4, 1, 0]; //correct answers
//feedbacks
const feedbacks = [
    "Ota huomioon laskussa nämä",
    "Tässä laskussa pitää laskea näin ja näin",
    "Mietippä uudelleen",
    "Muistele miten jakolaskut lasketaan",
    "Etkö osaa?"
];
//update questions & choices
function updateElements(){
    //show question
    questionEl.innerHTML = "Kysymys " + (q+1) + "/5<br>" + questions[q];
    //show choices
    choice1El.innerHTML = choices[q][0];
    choice2El.innerHTML = choices[q][1];
    choice3El.innerHTML = choices[q][2];
    choice4El.innerHTML = choices[q][3];
    choice5El.innerHTML = choices[q][4];
    //show feedbacks
    if(answers[q] === undefined){
    feedbackEl.innerHTML = " "; //not answered
    } else if (answers[q] === correctAnswers[q]) { 
        feedbackEl.innerHTML = "Oikein!"; //right answer
    } else {
        feedbackEl.innerHTML = feedbacks[q]; //wrong answer
    }
}
//check button
checkEl.addEventListener("click", checkAnswer);
//check answer
function checkAnswer() {
    const choiceEl = document.querySelector("input[name=choice]:checked");
    if(choiceEl) { //choice is made
        answers[q] = Number(choiceEl.value);
        radioButtonEls.forEach(radioButtonEl => radioButtonEl.disabled = true);
        updateElements();
    } else { //no choice selected
    }

}
//next button
nextEl.addEventListener("click", nextQuestion);
//next question
function nextQuestion() {
    q++;
    Array.from(document.querySelectorAll("input[name=choice]:checked"), input => input.checked = false);
    radioButtonEls.forEach(radioButtonEl => radioButtonEl.disabled = false);
    if(q > answers[4]) {
        document.getElementById("matikka").innerHTML = "LOPPU!";
    }
    updateElements();
}
updateElements();
