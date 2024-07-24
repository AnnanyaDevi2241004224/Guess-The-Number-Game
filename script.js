console.log('hiiii');
const rn = Math.floor(Math.random() * 100) + 1;
let tryy = 0;

function checkNumber() {
    const user = document.getElementById('in').value;
    const result = document.getElementById('result');
    console.log(user);
    
    tryy++;

    if (user== rn) {
        result.innerHTML = `Congratulations! You guessed the number (${rn}) in ${tryy} attempts. <br> Your Score: ${100 - tryy}`;
    } else if (user < rn) {
        result.textContent = 'Too low! Try again.';
    } else {
        result.textContent = 'Too high! Try again.';
    }
}