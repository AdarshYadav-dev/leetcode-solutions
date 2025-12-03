// 2677. Chunk Array

// Given an array arr and a chunk size size, return a chunked array.

// A chunked array contains the original elements in arr, but consists of subarrays each of length size. The length of the last subarray may be less than size if arr.length is not evenly divisible by size.

// Please solve it without using lodash's _.chunk function.

// Example 1:

// Input: arr = [1,2,3,4,5], size = 1
// Output: [[1],[2],[3],[4],[5]]
// Explanation: The arr has been split into subarrays each with 1 element.

function chunk(arr, size){
    const result = [];
    let i = 0;

    while (i < arr.length){
        const chunk = arr.slice(i, i + size);
        result.push(chunk);
        i += size;
    }

    return result;
}

// console.log(chunk[1,2,3,2,4,1,3,2,4,5,6,4,6], 2)
console.log(chunk([1,2,3,4,5,6,7,8,8],2))