 
 const findLongestWord = function(string) {
    let strToArr = string.split(' ');
     let longestWord = strToArr[0];

for (let i = 0; i < strToArr.length; i += 1) {
 if (strToArr[i].length > longestWord.length) { 
  longestWord = strToArr[i];
 }
}
return longestWord
  }
  /*
   * Вызовы функции для проверки работоспособности твоей реализации.
   */
console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'
 
console.log(findLongestWord('Google do a roll')); // 'Google'
console.log(findLongestWord('May the force be with you')); // 'force'

