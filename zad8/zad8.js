const numberInput = document.getElementById('number-input');
const writeNTimesBtn = document.getElementById('write-n-times-btn');
const resultOut = document.getElementById('result-out');

const writeNTimes = () => {
    resultOut.textContent = null;
    let n = parseInt(numberInput.value);
    let j = 1;

    for(var i = 0; i < n; i++) {
        const p = document.createElement('p');
        let number = i + 1; 
        p.textContent = number;

        if(j === 3) {
            p.style.fontWeight = 800;
            j = 0;
        }

        resultOut.appendChild(p);
        j++;
    }
}

writeNTimesBtn.addEventListener('click',writeNTimes);