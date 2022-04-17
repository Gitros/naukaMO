const numberInput1 = document.getElementById('input-number-1');
const numberInput2 = document.getElementById('input-number-2');
const addBtn = document.getElementById('add-btn');
const resultOut = document.getElementById('result-out');

const addTwoNumber = () => {
    let a = parseInt(numberInput1.value);
    let b = parseInt(numberInput2.value);
    let wynik = a + b;
    resultOut.textContent = wynik;
}

addBtn.addEventListener('click', addTwoNumber);