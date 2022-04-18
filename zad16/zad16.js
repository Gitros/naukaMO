const numberInput = document.getElementById('number-input');
const buzzFizzBtn = document.getElementById('buzz-fizz-btn');
const resultOut = document.getElementById('result-out');

const buzzFizz = () => {
    let n = parseInt(numberInput.value);
    for(var i = 0; i < n; i++) {
        const p = document.createElement('p')
        let number = i + 1;

        if(number % 3 === 0){
            p.textContent = 'buzz';
        }
        else if(number % 5 === 0) {
            p.textContent = 'fizz';
        }
        else {
            p.textContent = number;
        }

        resultOut.appendChild(p);
    }
}
buzzFizzBtn.addEventListener('click', buzzFizz)