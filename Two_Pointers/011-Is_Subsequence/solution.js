/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    const sl = s.length, tl = t.length;
    if(sl>tl) return false;
    let i = 0, j = 0;
    while(i<sl && j<tl) {
        if(s[i] === t[j]) {
            i++;
            j++;
        } else j++;
    }
    return (i===sl);
};

console.log(isSubsequence('abc', 'ahbgdc'))