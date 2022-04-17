const inputNumber1 = document.getElementById('input-number-1');
const inputNumber2 = document.getElementById('input-number-2');
const substractBtn = document.getElementById('substract-btn');
const resultOut = document.getElementById('result-out');

const substract = () => {
    let a = parseInt(inputNumber1.value);
    let b = parseInt(inputNumber2.value);
    let wynik = a - b;
    resultOut.textContent = wynik;
}

substractBtn.addEventListener('click', substract);