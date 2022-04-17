/* każda podzielna przez 3 ma być bold każda podzielna przez 5 ma być zielona 
każda podzielna przez 7 ma być font size 3 rem */
const inputNumber = document.getElementById('input-number');
const writeNTimesBtn = document.getElementById('write-n-times-btn');
const resultOut = document.getElementById('result-out');

const writeNTimes = () => {
    n = parseInt(inputNumber.value)
    resultOut.textContent = null;
    for(var i = 0; i < n; i++) {
        const p = document.createElement('p');
        let number = i + 1;
        p.textContent = number;

        if(number % 3 === 0) {
            p.style.fontWeight = 800;
        }
        if(number % 5 === 0) {
            p.style.color = 'green';
        }
        if(number % 7 === 0) {
            p.style.fontSize = '3rem';
        }

        resultOut.appendChild(p);
    }
}
writeNTimesBtn.addEventListener('click',writeNTimes);