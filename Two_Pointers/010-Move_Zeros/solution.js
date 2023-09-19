/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    const len = nums.length;
    let start = 0, end = 1;
    while(end<len) {
        if(!nums[end]) end++;
        else if(nums[start]) {
            start++;
            if(start===end) end++;
        }
        else {
            nums[start++] = nums[end];
            nums[end++] = 0;
        }
    }
    return nums;
};

console.log(moveZeroes([0]));