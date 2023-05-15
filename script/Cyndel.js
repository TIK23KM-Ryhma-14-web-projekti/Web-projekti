
    const quizForm = document.getElementId("quiz");
    const resultDiv = document.getElementById("result");
    const correctAnswers = ['1b','2d','3b','4b','5c'];

    quizForm.addEventListener('submit', e=>{
        e.preventDefault();

        let score = 0;
        const userAnswers = [quizForm.kys1.value, quizForm.kys2.value,quizForm.kys3.value,quizForm.kys4.value,quizForm.kys5.value];
        userAnswers.forEach((answer, index) => {
            if(answer === correctAnswers [index]){
                score +=1;
            }}
            );

            resultDiv.innerHTML = 'Your score is ${score}/${correctAnswers.lenght}';
        }
    );

