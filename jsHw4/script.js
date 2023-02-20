let userNumber = +prompt("Enter your number");


function numberIsPerfect(number) {
    let summ = 0;
    for (let i = 1; i < number; i++) {

        if (!(number % i)) {
            summ = summ + i;
        }
    }

    return summ;
}

function isPerfect(summ, number) {
    if (summ === number) {
        alert('Your number is perfect!');
    } else {
        alert('Your number is not perfect!');
    }
}

isPerfect(numberIsPerfect(userNumber), userNumber);






// let minRange;
// let maxRange;
//
// function getRange() {
//     minRange = +prompt('Enter the start of the range');
//     maxRange = +prompt('Enter the end of the range');
//     if (maxRange < minRange) {
//         alert('start should be smaller than the end!!!');
//         getRange();
//     }
// }
//
// function getPerfectRange(min, max) {
//     getRange();
//     min = minRange;
//     max = maxRange;
//     for (let i = min; i <= max; i++) {
//
//     }
// }


