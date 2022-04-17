const text1 = document.getElementById('text-1');
const text2 = document.getElementById('text-2');
const text3 = document.getElementById('text-3');
const reverseBtn = document.getElementById('reverse-btn');
const resultOut = document.getElementById('result-out');

function reverseString(str) {
    // Step 1. Use the split() method to return a new array
    var splitString = str.split(""); // var splitString = "hello".split("");
    // ["h", "e", "l", "l", "o"]
 
    // Step 2. Use the reverse() method to reverse the new created array
    var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
    // ["o", "l", "l", "e", "h"]
 
    // Step 3. Use the join() method to join all elements of the array into a string
    var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
    // "olleh"
    
    //Step 4. Return the reversed string
    return joinArray; // "olleh"
}
 

const reverseWordSentenceBuilder = () => {
    let word1 = reverseString(text1.value);
    let word2 = reverseString(text2.value);
    let word3 = reverseString(text3.value);

    let result = word1 + ' ' + word2 + ' ' + word3;
    resultOut.textContent = result;
}

reverseBtn.addEventListener('click',reverseWordSentenceBuilder);