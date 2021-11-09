// Write a function which checks number till given input/parameter is odd or even

// function checkNum(num) {
//     (num % 2 === 0) ? 'even' : 'odd';
// }

// const checkNum = num => num % 2 === 0 ? 'Even' : 'Odd';

// console.log(num, checkNum(10));
// console.log(num, checkNum(15));

function isOddEvenNumber(num) {
    for (let i = 0; i < num; i++) {
        const check = (i % 2 === 0) ? 'Even' : 'Odd';
        console.log(i, check);
    }
}
isOddEvenNumber(7);