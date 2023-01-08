function findIndexes(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (i !== j) {
                if (nums[i] + nums[j] === target) {
                    return [i, j];
                }
            }
        }
    }
}

console.log(findIndexes([2, 7, 11, 15], 9)); // [0, 1]
console.log(findIndexes([3,8,-5,7,4,-2],2)); // [2, 3]