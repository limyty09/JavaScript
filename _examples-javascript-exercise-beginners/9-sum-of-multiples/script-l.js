
function sumOfMultiple(num) {
    let sum = 0;

    for (let i = 0; i <= num; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
          sum += i;
        }
    } console.log(`sum of multiples of 3 and 5 till ${num} is: `, sum)
}

sumOfMultiple(10);