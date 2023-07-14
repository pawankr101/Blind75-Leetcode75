const vowels = {
    'a': true, 'e': true, 'i': true, 'o': true, 'u': true
}

/**
 * @param {string} ch
 * @return {boolean}
 */
function isVowel(ch) {
    if(vowels[ch.toLowerCase()]) return true;
    return false;
}

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    const chars = new Array(s.length);
    let i = 0, j = s.length-1;
    while(i<j) {
        if(!isVowel(s[i])) chars[i] = s[i++];
        if(!isVowel(s[j])) chars[j] = s[j--];
        if(isVowel(s[i]) && isVowel(s[j])) {
            chars[j] = s[i];
            chars[i++] = s[j--];
        }
    }
    if(i==j) chars[i] = s[i];
    return chars.join('');
};