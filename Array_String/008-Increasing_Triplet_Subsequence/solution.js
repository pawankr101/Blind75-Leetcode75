/**
 * ### increasingTriplet
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    let len = nums.length, smallest=Infinity, middle=Infinity, i;
    if(len<3) return false;
    for(i=0; i<len; i++) {
        if(nums[i]<=smallest) smallest = nums[i];
        else if(nums[i]>smallest && nums[i]<=middle) middle = nums[i];
        else return true;
    }
    return false;
};
console.log(increasingTriplet([20,100,10,12,5,13])); // => true
// console.log(increasingTriplet([0,4,2,1,0,-1,-3])); // => false
// console.log(increasingTriplet([5,1,6])); // => false
// console.log(increasingTriplet([1,2,2,1])); // => false

// /**
//  * ### brute for increasingTriplet
//  * @param {number[]} nums
//  * @return {boolean}
//  */
// var increasingTripletBrute = function(nums) {
//     const twoOutOfTriplet = new Array(2);
//     for(let i=0,j,k,l=nums.length; i<(l-2); i++) {
//         twoOutOfTriplet[0] = nums[i];
//         for(j=i+1; j<(l-1); j++) {
//             if(twoOutOfTriplet[0] < nums[j]) {
//                 twoOutOfTriplet[1] = nums[j];
//                 for(k=j+1; k<l; k++) {
//                     if(twoOutOfTriplet[1] < nums[k]) {
//                         return true;
//                     }
//                 }
//             }
//         }
//     }
//     return false;
// }
// console.log(increasingTripletBrute([20,100,10,12,5,13])); // => true

// /**
//  * ### Sequential Increasing Triplet
//  * @param {number[]} nums
//  * @return {boolean}
//  */
// var sequentialIncreasingTriplet = function(nums) {
//     let sequentialCounter = 1, num = nums[0];
//     for(let i = 1, l=nums.length; i<l; i++) {
//         sequentialCounter = (nums[i] > num) ? (sequentialCounter + 1) : 1
//         num = nums[i];
//         if(sequentialCounter>2) return true;
//     }
//     return false;
// };
// console.log(sequentialIncreasingTriplet([2,1,5,0,4,6])); // => true
