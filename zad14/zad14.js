const numberInput = document.getElementById('number-input');
const writeNTimesBtn = document.getElementById('write-n-times-btn');
const resultOut = document.getElementById('result-out');

const writeNTimes = () => {
    let n = parseInt(numberInput.value);
    resultOut.textContent = null;
    for(var i = 0; i < n; i++) {
        const p = document.createElement('p')
        let number = i + 1;
        p.textContent = number;
        resultOut.appendChild(p);
    }
}
writeNTimesBtn.addEventListener('click',writeNTimes);