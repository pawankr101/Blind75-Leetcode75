/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    const len = chars.length;
    let compressedStrLength=0, start=0, end=1, ch=chars[0];
    while(end<len) {
        if(chars[end]===ch) chars[end++] = '';
        else {
            compressedStrLength += updateDigitCountInCharArray(start, end, chars);
            start = end++;
            ch = chars[start];
        }
    }
    compressedStrLength += updateDigitCountInCharArray(start, end, chars);
    arrayCompaction(chars);
    console.log(chars);
    return compressedStrLength;
};

/**
 * @param {string} char 
 * @param {number} start 
 * @param {number} end 
 * @param {string[]} chars 
 * @returns {number}
 */
function updateDigitCountInCharArray(start, end, chars) {
    let num = end-start, count=1;
    if(num > 1) {
        while(num>=1) {
            chars[--end] = '' + (num % 10);
            num = Math.floor(num/10);
            count++;
        }
    }
    return count;
}

/**
 * @param {string[]} chars
 */
function arrayCompaction(chars) {
    const len = chars.length;
    let start = 0, end = 1;
    while(end<len) {
        if(!chars[end]) end++;
        else if(chars[start]) {
            start++;
            if(start===end) end++;
        }
        else {
            chars[start++] = chars[end];
            chars[end++] = '';
        }
    }
}

console.log(compress(["a","b","b","b","b","b","b","b","b","b","b","b","b"]));