longWord =["hello", "animal", "dog", "extraordinary"]

let largestString = longWord[0].length;
let answer = longWord[0];

function longestWord(longWord){
    for (let i = 1; i < longWord.length; i++) {
        let string = longWord[i].length;
        if (string > largestString) {
            answer = longWord[i];
            largestString = string;
        }
    }
    return answer;
};

console.log(longestWord(longWord));
//I belive the runtime complexity of the code is o(n) because it will increase in time with an increase in array size, making it linear.

const perf = require('execution-time')();

perf.start();                   
longestWord(longWord);
let results = perf.stop();  

console.log(results.preciseWords);
