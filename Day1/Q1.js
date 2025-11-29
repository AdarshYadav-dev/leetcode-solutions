// 2723. Add Two Promises

// Given two promises promise1 and promise2, return a new promise. promise1 and promise2 will both resolve with a number. The returned promise should resolve with the sum of the two numbers.

// Example 1:

// Input: 

// promise1 = new Promise(resolve => setTimeout(() => resolve(2), 20)), 
// promise2 = new Promise(resolve => setTimeout(() => resolve(5), 60))
// Output: 7

// Explanation: The two input promises resolve with the values of 2 and 5 respectively. The returned promise should resolve with a value of 2 + 5 = 7. The time the returned promise resolves is not judged for this problem.

const addpromises = async (promise1, promise2)  =>{
    const a = await promise1;
    const b = await promise2;
    return a + b;
}


console.log(await addpromises(Promise.resolve(2), Promise.resolve(4)))

