/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let result = '', word='';
    for(let i = 0, l=s.length; i < l; i++) {
        if(s[i] !== ' ') word += s[i];
        else if(word) {
            result = !result ? word : (word + ' ' + result);
            word = '';
        }
    }
    if(word) {
        result = !result ? word : (word + ' ' + result);
        word = '';
    }
    return result;
};