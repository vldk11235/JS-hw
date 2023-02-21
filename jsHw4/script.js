// let userNumber = +prompt("Enter your number");


function getSum(number) {
    let sum = 0;
    for (let i = 1; i < number; i++) {

        if (!(number % i)) {
            sum = sum + i;
        }
    }

    return sum;
}

function isPerfect(value, number) {
    if (value === number) {
        // alert('Your number is perfect!');
        return number;
    }

    // else {
    //     alert('Your number is not perfect!');
    // }
}

// isPerfect(getSum(userNumber), userNumber);


let minRange;
let maxRange;


function getRange(minNumber, maxNumber) {
    minRange = +prompt('Enter the start of the range');
    maxRange = +prompt('Enter the end of the range');
}


function getPerfectRange(min, max) {
    if (max < min) {
        alert("start should be smaller than the end");
        getRange();
    }

    for (let i = min; i <= max; i++) {
        if (isPerfect(getSum(i), i)) {
            console.log(i);
        }
    }
}

getRange();
getPerfectRange(minRange, maxRange);




