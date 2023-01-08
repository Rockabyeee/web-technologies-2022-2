function spinWords(text) {
    let words = text.split(' ')
    let result = '';

    for (let word of words) {
        if (word.length > 4) {
            result += word.split('').reverse().join("") + ' ';
        }
        else {
            result += word + ' ';
        }
    }

    return result;
}
const result1 = spinWords("Привет от Legacy");
console.log(result1); // тевирП от ycageL
const result2 = spinWords("This is a test");
console.log(result2); // This is a test