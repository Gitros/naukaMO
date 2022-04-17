const numberInput1 = document.getElementById('number-input-1');
const numberInput2 = document.getElementById('number-input-2');
const writeNTimesBtn = document.getElementById('write-n-times-btn');
const resultOut = document.getElementById('result-out');

const writeNTimes = () => {
    let n = parseInt(numberInput1.value);
    let j = 1;
    let m = parseInt(numberInput2.value);
    for(var i = 0; i < n; i++) {
        const p = document.createElement('p');
        let number = i + 1;
        p.textContent = number;
        if (j === m) {
            p.style.fontWeight = 800;
            j = 0;
        }
        
        resultOut.appendChild(p);
        j++;
    }
}
writeNTimesBtn.addEventListener('click', writeNTimes);