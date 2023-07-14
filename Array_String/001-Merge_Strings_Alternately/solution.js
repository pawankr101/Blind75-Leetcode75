/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    const w1l=word1.length, w2l=word2.length;
    let i=0, j=0, result = '';
    while(i<w1l && j<w2l) {
        if(i<=j) result += word1[i++];
        else result += word2[j++];
    }
    while(i<w1l) {
        result += word1[i++];
    }
    while(j<w2l) {
        result += word2[j++];
    }
    return result;
};