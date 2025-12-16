// 500. Keyboard Row


// Given an array of strings words, return the words that can be typed using letters of the alphabet on only one row of American keyboard like the image below.

// Note that the strings are case-insensitive, both lowercased and uppercased of the same letter are treated as if they are at the same row.

// In the American keyboard:

// the first row consists of the characters "qwertyuiop",
// the second row consists of the characters "asdfghjkl", and
// the third row consists of the characters "zxcvbnm".


// Example 1:

// Input: words = ["Hello","Alaska","Dad","Peace"]

// Output: ["Alaska","Dad"]



let findWords = function(words) {
    let row1 = "qwertyuiop";
    let row2 = "asdfghjkl";
    let row3 = "zxcvbnm";

    let result = [];

    for (let i = 0; i < words.length; i++) {
        let word = words[i].toLowerCase();
        let row = "";

        if (row1.includes(word[0])) row = row1;
        else if (row2.includes(word[0])) row = row2;
        else row = row3;

        let isValid = true;

        for (let j = 0; j < word.length; j++) {
            if (!row.includes(word[j])) {
                isValid = false;
                break;
            }
        }

        if (isValid) result.push(words[i]);
    }

    return result;
};
console.log(findWords(["Hello","Alaska","Dad","Peace"]))