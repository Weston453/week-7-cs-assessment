//Longest Word--------------------------------------
// longWord =["hello", "animal", "dog", "extraordinary"]

// let largestString = longWord[0].length;
// let answer = longWord[0];

// function longestWord(longWord){
//     for (let i = 1; i < longWord.length; i++) {
//         let string = longWord[i].length;
//         if (string > largestString) {
//             answer = longWord[i];
//             largestString = string;
//         }
//     }
//     return answer;
// };

// console.log(longestWord(longWord));
//I belive the runtime complexity of the code is o(n) because it will increase in time with an increase in array size, making it linear.

// const perf = require('execution-time')();

// perf.start();                   
// longestWord(longWord);
// let results = perf.stop();  

// console.log(results.preciseWords);

//stuarts answers from review are bellow-----------------------------------------------------------------------------------------------------
// const words = ["hello", "animal", "dog", "extraordinary"]

// const findLongestWord = (strArr) => {
//     let longest = strArr[0]
//     for(let i = 0; i < strArr.length; i++){
//         if(strArr[i].length > longest.length){
//             longest = strArr[i]
//         }
//     }
//     return longest.length
// }

// console,log(findLongestWord(words))
//Sum Zero---------------------------------------------------------------------------------------------------------------------------
//slow way o(n^2)
const arrOfNums = [1, 55, 3, 2, 5, -55]

// const addToZero = (arr) => {
//     for(let i = 0; i < arr.length; i++){
//         console.log('My number to compare: ')
//         console.log(arr[i] + '=========================')
//         for(let j = 0; j < arr.length; j++){
//             if(arr[i] + arr[j] === 0){
//                 console.log('Numbers add to zero!')
//                 return true
//             }
//         }
//     }
//     return false
// }
// addToZero(arrOfNums)

//faster way O(n log n)-------------------------------------
// const addToZero = (arr) => {
//     for(let i = 0; i < arr.length; i++){
//         console.log('My number to compare: ')
//         console.log(arr[i] + '=========================')
//         for(let j = i + 1; j < arr.length; j++){
//             if(arr[i] + arr[j] === 0){
//                 console.log('Numbers add to zero!')
//                 return true
//             }
//         }
//     }
//     return false
// }
// addToZero(arrOfNums)

//fastest way    --------------------------------------------
// const addToZero = (arr) => {
//     const seen = {}
//     for(let i = 0; i < arr.length; i++){
//        if(seen[-(arr[i])]) {
//            console.log(true)
//        }
//        seen[arr[i]] = true
//     }
//     console.log(seen)
//     return false
// }
// addToZero(arrOfNums)


//Unique Charaters-----------------------------------------------------------------------------------------------------------
// const hasUniqueChar =(str) => {
//     for(let i = 0; i < str.length; i++){
//         console.log(str[i] + '===============')
//         for(let j = i + 1; j < str.length; j++){
//             if(str[i].toLowerCase() === str[j].toLowerCase()){
//                 return false
//             }
//         }
//     }
//     return true
// }

// const hasUniqueChar =(str) => {
//     const seenLetters = {}
//     for(let i = 0; i < str.length; i++){
//         console.log(str[i] + '===============')
//         const letter = str[i].toLowerCase()
//         if(seenLetters[letter]){
//             return false
//         }
//         seenLetters[letter] = true
//     }
//     console.log(seenLetters)
//     return true
// }

// console.log(hasUniqueChar('Monday'))
// console.log(hasUniqueChar('Moonday'))

//Pangram Sentence --------------------------------------------------------------------------------------------------------------
// const isPan = (str) => {
//     const alpha = 'abcdefghijklmnopqrstuvwxyz'.split('')
//     console.log(alpha)
//     for(let i = 0; i < str.length; i++){
//         for(let j = 0; j < alpha.length; j++){
//             if(str[i].toLowerCase === alpha[j]){
//                 alpha.splice(j, 1)
//                 j = alpha.length
//             }
//         }
//     }
//     console.log(alpha)
//     if(alpha.length === 0){
//         return true
//     }
//     return false
// }

// const isPan = (str) => {
//     const alpha = new Set()
//     str = str.toLowerCase().replace(/([^a-z])+/g, '').split('')
//     console.log(alpha)
//     str.forEach((letter) => {
//         alpha.add(letter)
//     })
//     console.log(alpha)
//     if(alpha.size === 26){
//         return true
//     }
//     return false
// }

// console.log(isPan('The quick brown fox jumps over the lazy do!'))