const numberInput = document.getElementById('number-input');
const writeNTimesBtn = document.getElementById('write-n-times-btn');
const resultOut = document.getElementById('result-out');

const writeNTimes = () => {
    resultOut.textContent= null;
    let maxIteration = parseInt(numberInput.value)
    for (var i = 0; i < maxIteration; i++) {
        let p = document.createElement('p');
        p.textContent = i + 1;
        resultOut.appendChild(p);
    }
}

writeNTimesBtn.addEventListener('click',writeNTimes);