console.log('4-fizzbuzz -algorithms');

function isChecking(num) {
    if (typeof (num) !== 'number') {
        return ('Nan - Not a Number! Please Input Number');
    } else if ((num % 3 === 0) && (num % 5 === 0)) {
        return 'BuzzFizz';
    } else if (num % 3 === 0) {
        return 'Fizz';
    } else if (num % 5 === 0) {
        return 'Buzz';

    } else {
        return 'Given Input / Number value';
    }
}

let checkFizzBuzz1 = isChecking('one');
console.log(checkFizzBuzz1);

let checkFizzBuzz2 = isChecking(true);
console.log(checkFizzBuzz2);

let checkFizzBuzz3 = isChecking(6);
console.log(checkFizzBuzz3);

let checkFizzBuzz4 = isChecking(10);
console.log(checkFizzBuzz4);

let checkFizzBuzz5 = isChecking(30);
console.log(checkFizzBuzz5);

