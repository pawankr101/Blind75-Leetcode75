/**
 * @param {number[]} heights
 * @return {number}
 */
var maxArea = function(heights) {
    let maxArea=0, i=0, j=heights.length-1, area, smallSideHeight;
    while(i<j) {
        smallSideHeight = heights[i]<heights[j] ? heights[i]: heights[j]
        area=(j-i)*smallSideHeight;
        if(area>maxArea) {
            maxArea=area;
        }
        i++;
        j--;
    }
    return maxArea;
};