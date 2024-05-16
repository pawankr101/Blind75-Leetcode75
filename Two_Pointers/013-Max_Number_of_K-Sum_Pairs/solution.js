// /**
//  * brute force solution
//  * @param {number[]} nums
//  * @param {number} k
//  * @return {number}
//  */
// var maxOperations = function(nums, k) {
//     let oc = 0;
//     for(let i = 0, l = nums.length, j; i < l-1; i++) {
//         if(nums[i]!=-1) {
//             for (j = i+1; j < l; j++) {
//                 if(nums[j]!=-1 && (nums[i] + nums[j] === k)) {
//                     nums[i] = -1
//                     nums[j] = -1
//                     oc++;
//                     break;
//                 }
//             }
//         }
//     }
//     return oc;
// };

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {
    /** @type {Map<number, number>} */
    const map = new Map(), len = nums.length;
    let oc = 0, i = 0;
    while(i<len) {
        let n = nums[i++]
        if(n<k) {
            if(map.get(n)) {
                oc++;
                map.set(n, map.get(n) - 1);
            } else map.set(k-n, (map.get(k-n) || 0) + 1);
        }
    }
    return oc;
};