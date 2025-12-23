// 605. Can Place Flowers

// You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

// Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.

 

// Example 1:

// Input: flowerbed = [1,0,0,0,1], n = 1
// Output: true



let canPlaceFlowers = function(flowerbed, n) {
    if (n === 0) return true;

    let count = 0;
    let m = flowerbed.length;
    let i = 0;

    while (i < m) {
    
        if (flowerbed[i] === 1) {
            i++;
            continue;
        }

        let left = (i === 0) || flowerbed[i - 1] === 0;
        let right = (i === m - 1) || flowerbed[i + 1] === 0;

        if (left && right) {
            count++;
            if (count >= n) return true;
            i += 2; 
            continue;
        }

        i++;
    }

    return false;
};


console.log(canPlaceFlowers([1,0,0,0,1], 1)); 