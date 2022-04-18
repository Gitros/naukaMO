const numberInput = document.getElementById('number-input');
const fibonaciBtn = document.getElementById('fibonaci-btn');
const resultOut = document.getElementById('result-out');

const Fibonaci = () => {
    resultOut.textContent = null;
    let a = 0;
    let b = 1;
    let next = 0;
    let n = parseInt(numberInput.value);
    

    if(n === 0){
        const p = document.createElement('p');
        p.textContent = a;
        resultOut.appendChild(p);
    }
    if(n === 1){
        const p1 = document.createElement('p');
        const p2 = document.createElement('p')
        p1.textContent = a;
        p2.textContent = b;
        resultOut.appendChild(p1);
        resultOut.appendChild(p2);
    }
    if(n > 1) {
        const p1 = document.createElement('p');
        const p2 = document.createElement('p')
        p1.textContent = a;
        p2.textContent = b;
        resultOut.appendChild(p1);
        resultOut.appendChild(p2);

        let max = n-1;

        for(let i = 0; i < max; i++) {
            next = a + b;
            a = b;
            b = next;
            const p = document.createElement('p');
            p.textContent = next;
            resultOut.appendChild(p);
        }
    }
}
fibonaciBtn.addEventListener('click', Fibonaci);