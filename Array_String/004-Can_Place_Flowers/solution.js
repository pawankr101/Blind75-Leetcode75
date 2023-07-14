/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    let consecutiveVacancy = 1;
    for(let i=0, l=flowerbed.length; i<l; i++) {
        if(!flowerbed[i]) consecutiveVacancy++;
        else {
            n = n - Math.floor((consecutiveVacancy - 1)/2);
            if(n<1) return true;
            consecutiveVacancy = 0;
        }
    }
    consecutiveVacancy++;
    n = n - Math.floor((consecutiveVacancy - 1)/2);
    return (n<1);
};