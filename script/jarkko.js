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
const questions = [];
//choices
const choices = [
    [],
    [],
    [],
    [],
    [],
];
const answers = []; //answers
const correctAnswers = []; //correct answers

//feedbacks
const feedbacks = [];

//get random number from 1 to max
function getNumber(max) {
    return Math.floor((Math.random() * max) + 1)
}

//generate questions, choices and correct answers
function init() {
    //first question multiplication
    //generate question
    let n1 = getNumber(10);
    let n2 = getNumber(10);
    questions[0] = "Paljonko on " + n1 + " * " + n2 + "?";
    //generate random answers
    choices[0][0] = getNumber(100);
    choices[0][1] = getNumber(100);
    choices[0][2] = getNumber(100);
    choices[0][3] = getNumber(100);
    choices[0][4] = getNumber(100);
    //which is the correct answer from the 5 choices
    correctAnswers[0] = getNumber(5)-1;
    //replace one choice with correct answer
    choices[0][correctAnswers[0]] = n1 * n2;
    feedbacks[0] = "Muistele kertotaulua.";

    //second question sum
    //generate question
    let n3 = getNumber(999);
    let n4 = getNumber(999);
    questions[1] = "Paljonko on " + n3 + " + " + n4 + "?";
    //generate random answers
    choices[1][0] = getNumber(1999);
    choices[1][1] = getNumber(1999);
    choices[1][2] = getNumber(1999);
    choices[1][3] = getNumber(1999);
    choices[1][4] = getNumber(1999);
    //which is the correct answer from the 5 choices
    correctAnswers[1] = getNumber(5)-1;
    //replace one choice with correct answer
    choices[1][correctAnswers[1]] = n3 + n4;
    feedbacks[1] = "Hupsis, ensi kerralla tarkkana yhteenlaskuissa."

    //thrid question subtraction
    //generate question
    let n5 = 500 + getNumber(499);
    let n6 = getNumber(499);
    questions[2] = "Paljonko on " + n5 + " - " + n6 + "?";
    //generate random answers
    choices[2][0] = getNumber(999);
    choices[2][1] = getNumber(999);
    choices[2][2] = getNumber(999);
    choices[2][3] = getNumber(999);
    choices[2][4] = getNumber(999);
    //which is the correct answer from the 5 choices
    correctAnswers[2] = getNumber(5)-1;
    //replace one choice with correct answer
    choices[2][correctAnswers[2]] = n5 - n6;
    feedbacks[2] = "Vähennyslaskussa on hyvä olla huolellinen."

    //fourth question
    //generate question
    let n7 = getNumber(10);
    let n8 = getNumber(10);
    questions[3] = "Paljonko on " + n7 + " * " + n8 + "?";
    //generate random answers
    choices[3][0] = getNumber(100);
    choices[3][1] = getNumber(100);
    choices[3][2] = getNumber(100);
    choices[3][3] = getNumber(100);
    choices[3][4] = getNumber(100);
    //which is the correct answer from the 5 choices
    correctAnswers[3] = getNumber(5)-1;
    //replace one choice with correct answer
    choices[3][correctAnswers[3]] = n7 * n8;
    feedbacks[3] = "Väärä vastaus, harjoitus tekee mestarin";

    //fifth question sum
    //generate question
    let n9 = getNumber(999);
    let n10 = getNumber(999);
    questions[4] = "Paljonko on " + n9 + " + " + n10 + "?";
    //generate random answers
    choices[4][0] = getNumber(1999);
    choices[4][1] = getNumber(1999);
    choices[4][2] = getNumber(1999);
    choices[4][3] = getNumber(1999);
    choices[4][4] = getNumber(1999);
    //which is the correct answer from the 5 choices
    correctAnswers[4] = getNumber(5)-1;
    //replace one choice with correct answer
    choices[4][correctAnswers[4]] = n9 + n10;
    feedbacks[4] = "Hupsis, ensi kerralla tarkkana yhteenlaskuissa."
}
//update questions & choices
function updateElements(){
    if(q === 5) {
        let points = 0;
        for(let i = 0; i < answers.length; i++) {
            if(answers[i] === correctAnswers[i]){
                points++;
            }
        }
        document.getElementById("matikka").innerHTML = "LOPPU!<br> Sait " + points + "/5 oikein.";
        return;
    }
    //show question
    questionEl.innerHTML = "Kysymys " + (q+1) + "/5<br>" + "Tarkista vastaus ja siirry seuraavaan. <br>" + questions[q];
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
    if(answers[q] === undefined) {
        checkEl.disabled = false;
        nextEl.disabled = true;
    }else {
        checkEl.disabled = true;
        nextEl.disabled = false;
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
    
    updateElements();
}
init();
updateElements();