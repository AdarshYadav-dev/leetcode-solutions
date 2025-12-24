// 628. Maximum Product of Three Numbers

// Given an integer array nums, find three numbers whose product is maximum and return the maximum product.

 

// Example 1:

// Input: nums = [1,2,3]
// Output: 6


let maximumProduct = function(nums) {
  let max1 = -1000, max2 = -1000, max3 = -1000;
  let min1 = 1000, min2 = 1000;

  for (let i = 0; i < nums.length; i++) {
    let n = nums[i];

    if (n > max1) {
      max3 = max2;
      max2 = max1;
      max1 = n;
    } else if (n > max2) {
      max3 = max2;
      max2 = n;
    } else if (n > max3) {
      max3 = n;
    }

    if (n < min1) {
      min2 = min1;
      min1 = n;
    } else if (n < min2) {
      min2 = n;
    }
  }

  let product1 = max1 * max2 * max3;
  let product2 = min1 * min2 * max1;

  return product1 > product2 ? product1 : product2;
};

console.log(maximumProduct([1, 2, 3]));       
console.log(maximumProduct([-10, -10, 5, 2])); 
