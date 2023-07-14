/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    const [ss, ls] = (str1.length<str2.length) ? [str1, str2] : [str2, str1];
    for(i=ss.length; i>0; i--) {
        let substr = ss.substring(0, i);
        if(isLargeStrDividedBySmallStr(ss, substr) && isLargeStrDividedBySmallStr(ls, substr)) return substr;
    }
    return '';
};

/**
 * @param {string} largeStr
 * @param {string} smallStr
 * @return {boolean}
 */
function isLargeStrDividedBySmallStr(largeStr, smallStr) {
    if(largeStr.length % smallStr.length) return false;
    for(let i=0, j=0, sml=smallStr.length; i<sml; i++, j++) {
        if(largeStr[j] !== smallStr[i]) return false;
        if(i==sml-1 && j<(largeStr.length-1)) i=-1;
    }
    return true;
}