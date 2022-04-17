const inputNumber = document.getElementById('input-number');
const writeNTimesBtn = document.getElementById('write-n-times-btn');
const resultOut = document.getElementById('result-out');

const writeNTimes = () => {
    resultOut.textContent = null;
    let maxIteration = parseInt(inputNumber.value)
    for (var i = 0; i < maxIteration; i++) {
        const p = document.createElement('p');
        let n = i + 1;
        p.textContent = n;
        resultOut.appendChild(p);
        if (n % 2 === 0) {
            p.style.color = 'green';
        }
        else {
            p.style.color = 'red';
        }
    }
}
writeNTimesBtn.addEventListener('click', writeNTimes);