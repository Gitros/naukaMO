const inputNumber = document.getElementById('input-number');
const writeNTimesBtn = document.getElementById('write-n-times-btn');
const resultOut = document.getElementById('result-out');

const writeNTimes = () => {
    let n = parseInt(inputNumber.value);
    for(var i = 0; i < n; i++) {
        const p = document.createElement('p');
        let number = i + 1;
        p.textContent = number;
        if(number % 3 === 0) {
            p.style.fontSize = '3rem';
        }
        resultOut.appendChild(p);
    }
}
writeNTimesBtn.addEventListener('click',writeNTimes);