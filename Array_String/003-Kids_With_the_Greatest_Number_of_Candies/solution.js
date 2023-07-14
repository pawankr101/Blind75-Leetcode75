/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    const result = new Array(candies.length);
    const gck = greatestNumberOfCandiesAKidHave(candies);
    for(let i=0, n=candies.length; i<n; i++) {
        result[i] = ((candies[i] + extraCandies) >= gck);
    }
    return result;
};

/**
 * @param {number[]} candies
 * @return {number}
 */
function greatestNumberOfCandiesAKidHave(candies) {
    let candyCount = candies[0];
    for(let i=1, n=candies.length; i<n; i++) {
        if(candies[i]>candyCount) candyCount = candies[i];
    }
    return candyCount;
}