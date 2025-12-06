// 67. Add Binary


// Given two binary strings a and b, return their sum as a binary string.

// Example 1:

// Input: a = "11", b = "1"
// Output: "100"


var addBinary = function(a, b) {
    let i = a.length - 1;
    let j = b.length - 1;
    let carry = 0;
    let result = "";

    while (i >= 0 || j >= 0 || carry > 0) {
        let sum = carry;

        if (i >= 0) sum += a[i] - '0';
        if (j >= 0) sum += b[j] - '0';

        result = (sum % 2) + result;  
        carry = Math.floor(sum / 2); 

        i--;
        j--;
    }

    return result;
};


console.log(addBinary("11", "1"));

