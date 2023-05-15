let whatAnswer = 1;
/**
 * What answer is selected
 * @param {number} i    0 = 1 , 1 = 2 , 2 = 3 , 
 */
function answer(i) {
    whatAnswer = i;
}




document.getElementById("tarkista1").addEventListener("click", tarkista);
document.getElementById("tarkista2").addEventListener("click", tarkista);
document.getElementById("tarkista3").addEventListener("click", tarkista);
document.getElementById("tarkista4").addEventListener("click", tarkista);

function tarkista(){
    
    if (whatAnswer == 0){
        document.getElementById("palaute").innerHTML = "Oikein!"
        this.style.background = "green";
    } else {
        document.getElementById("palaute").innerHTML = "Väärin!"
        this.style.background = "red";
    }

}



