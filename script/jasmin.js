
document.addEventListener('DOMContentLoaded', function() {
    // Get the form and questions
    let form = document.getElementById('quiz-form');
    let questions = Array.from(document.querySelectorAll('.question'));

    // Shuffle the questions
    questions.sort(function() {
        return 0.5 - Math.random();
    });

    // Add the shuffled questions back to the form
    for (let i = 0; i < questions.length; i++) {
        form.appendChild(questions[i]);
    }

    // Attach submit event listener to form
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // prevent form submission

        // Get selected answers
        let q1 = document.querySelector('input[name="q1"]:checked');
        let q2 = document.querySelector('input[name="q2"]:checked');
        let q3 = document.querySelector('input[name="q3"]:checked');
        let q4 = document.querySelector('input[name="q4"]:checked');

        // Calculate score and record incorrect and correct answers
        let score = 0;
        let incorrectAnswers = [];
        let correctAnswers = [];

        feedback.textContent = "";

        if (q1) {
            if (q1.value === 'a') {
                score++;
                correctAnswers.push(1);
            } else {
                incorrectAnswers.push(1);
            }
        }
        if (q2) {
            if (q2.value === 'd') {
                score++;
                correctAnswers.push(2);
            } else {
                incorrectAnswers.push(2);
            }
        }
        if (q3) {
            if (q3.value === 'b') {
                score++;
                correctAnswers.push(3);
            } else {
                incorrectAnswers.push(3);
            }
        }
        if (q4) {
            if (q4.value === 'c') {
                score++;
                correctAnswers.push(4);
            } else {
                incorrectAnswers.push(4);
            }
        }

        // Display score and correct/incorrect answers
        let resultDiv = document.getElementById('result');
        resultDiv.innerHTML = 'Sinä sait ' + score + ' oikein 4:stä!<br>';
        if (correctAnswers.length > 0) {
            resultDiv.innerHTML += 'Oikeat vastaukset: ' + correctAnswers.join(', ') + '<br>';
        }
        else (incorrectAnswers.length > 0) ;{
            resultDiv.innerHTML += 'Väärät vastaukset: ' + incorrectAnswers.join(', ');
        }
    
    });
});