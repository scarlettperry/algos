// Given a non-empty array of integers, every element appears twice except for one. Find that single one.

// Example
// Input: [4,1,2,1,2]
// Output: 4

let singleNumber = function(nums) {
    let intCounter = {}

    for(let int of nums){
        intCounter[int] = intCounter[int] + 1 || 1
    }

    return Object.keys(intCounter).find(key => intCounter[key] === 1)
};
