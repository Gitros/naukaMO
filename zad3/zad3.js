const text1 = document.getElementById('text-1');
const text2 = document.getElementById('text-2');
const text3 = document.getElementById('text-3');
const fullTextBtn = document.getElementById('full-text');
const resultOut = document.getElementById('result-out');

const sentenceBuilder = () => {
    let word1 = text1.value
    let word2 = text2.value
    let word3 = text3.value
    let result = word1 + ' ' + word2 + ' ' + word3;
    resultOut.textContent = result 
}

fullTextBtn.addEventListener('click', sentenceBuilder)