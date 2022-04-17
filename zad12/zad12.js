const textInput = document.getElementById('text-input');
const numberInput = document.getElementById('number-input');
const wordBtn = document.getElementById('word-btn');
const resultOut = document.getElementById('result-out');

function reverseString(str) {
    // Step 1. Use the split() method to return a new array
    var splitString = str.split(""); // var splitString = "hello".split("");
    // ["h", "e", "l", "l", "o"]
 
    // Step 2. Use the reverse() method to reverse the new created array
    var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
    // ["o", "l", "l", "e", "h"]
 
    // Step 3. Use the join() method to join all elements of the array into a string
    var reversedString = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
    // "olleh"
    
    //Step 4. Return the reversed string
    return reversedString; // "olleh"
}

const word = () => {
    n = parseInt(numberInput.value);
    let word = textInput.value;
    for(var i = 0; i < n; i++) {
        const p = document.createElement('p');
        if(i % 2 === 0) {
            p.textContent = reverseString(word);
        }
        else {
            p.textContent = word;
        }
        resultOut.appendChild(p);
    }
}
wordBtn.addEventListener('click', word);