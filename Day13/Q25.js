// 697. Degree of an Array

// Given a non-empty array of non-negative integers nums, the degree of this array is defined as the maximum frequency of any one of its elements.

// Your task is to find the smallest possible length of a (contiguous) subarray of nums, that has the same degree as nums.

 

// Example 1:

// Input: nums = [1,2,2,3,1]
// Output: 2
// Explanation: 
// The input array has a degree of 2 because both elements 1 and 2 appear twice.
// Of the subarrays that have the same degree:
// [1, 2, 2, 3, 1], [1, 2, 2, 3], [2, 2, 3, 1], [1, 2, 2], [2, 2, 3], [2, 2]
// The shortest length is 2. So return 2.


let findShortestSubArray = function(nums) {
    let count = {}
    let first = {}
    let last = {}

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i]

        if (count[num] === undefined) {
            count[num] = 1
            first[num] = i
        } else {
            count[num]++
        }

        last[num] = i
    }
    let degree = 0
    for (let num in count) {
        degree = Math.max(degree, count[num])
    }

    let minLength = nums.length

    for (let num in count) {
        if (count[num] === degree) {
            let length = last[num] - first[num] + 1
            minLength = Math.min(minLength, length)
        }
    }

    return minLength
};

console.log(findShortestSubArray([1,2,2,3,1])) // 2
console.log(findShortestSubArray([1,2,2,3,1,4,2])) // 6
