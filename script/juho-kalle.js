const form = document.querySelector("form");
const input = document.getElementById("answer");
const question = document.getElementById("question");
const feedback = document.getElementById("feedback");
const newQuestionButton = document.getElementById("new-question");

let num1, num2, answer;

function generateQuestion() {
  num1 = Math.floor(Math.random() * 20) + 1;
  num2 = Math.floor(Math.random() * 20) + 1;
  answer = num1 + num2;
  question.textContent = `${num1} + ${num2} = ?`;
  input.value = "";
  feedback.textContent = "";
  input.focus();
}

generateQuestion();

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const userAnswer = parseInt(input.value);
  if (userAnswer === answer) {
    feedback.textContent = "Oikein!";
    feedback.className = "correct";
    setTimeout(() => {
      generateQuestion();
    }, 1000);
  } else {
    feedback.textContent = "Väärin, yritä uudelleen.";
    feedback.className = "incorrect";
    input.value = "";
    input.focus();
  }
});

newQuestionButton.addEventListener("click", () => {
  generateQuestion();
});
