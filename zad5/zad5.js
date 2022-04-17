const writeDownBtn = document.getElementById('write-down-btn');
const resultOut = document.getElementById('result-out');

const writeDown = () => {
    for (var i = 0; i < 10; i++) {
        const p = document.createElement('p');
        p.textContent = i+1; 
        resultOut.appendChild(p);
        
    } 
}
writeDownBtn.addEventListener('click',writeDown);