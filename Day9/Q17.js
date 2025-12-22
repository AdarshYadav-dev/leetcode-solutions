// 599. Minimum Index Sum of Two Lists

// Given two arrays of strings list1 and list2, find the common strings with the least index sum.

// A common string is a string that appeared in both list1 and list2.

// A common string with the least index sum is a common string such that if it appeared at list1[i] and list2[j] then i + j should be the minimum value among all the other common strings.

// Return all the common strings with the least index sum. Return the answer in any order.

 

// Example 1:

// Input: list1 = ["Shogun","Tapioca Express","Burger King","KFC"], list2 = ["Piatti","The Grill at Torrey Pines","Hungry Hunter Steakhouse","Shogun"]
// Output: ["Shogun"]


let findRestaurant = function(list1, list2) {
    let map = new Map();
    for (let i = 0; i < list1.length; i++) {
        map.set(list1[i], i);
    }

    let minSum = Infinity;
    let result = [];

    for (let j = 0; j < list2.length; j++) {
        if (map.has(list2[j])) {
            let sum = j + map.get(list2[j]);

            if (sum < minSum) {
                minSum = sum;
                result = [list2[j]];
            } else if (sum === minSum) {
                result.push(list2[j]);
            }
        }
    }
    return result;
};

let list1 = ["Shogun","Tapioca Express","Burger King","KFC"];
let list2 = ["Piatti","The Grill at Torrey Pines","Hungry Hunter Steakhouse","Shogun"];

console.log(findRestaurant(list1, list2));
