const numberInput = document.getElementById('number-input');
const yearBtn = document.getElementById('year-btn');
const resultOut = document.getElementById('result-out');

const year = () => {
    let birthDate = parseInt(numberInput.value);
    let currentYear = new Date().getFullYear();
    for(var i = birthDate; i <= currentYear; i++) {
        const p = document.createElement('p');
        p.textContent = i;
        resultOut.appendChild(p);
        
    }
}
yearBtn.addEventListener('click', year);