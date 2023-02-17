alert('Think of a number from 0 to 100');

//asking user to think a number

let startNumber = 0;
let endNumber = 100;

//establishing start and end point of our range

let numberIsRight = false;

//this is for our counter. we need this value to be false unless we will guess the number

while (Boolean(numberIsRight === false)) {
    let currentValue = Math.floor((startNumber + endNumber) / 2); //every cycle will begin with calculating the middle number of the range
    numberIsRight = confirm(`Is your number ${currentValue}?`);

    if (Boolean(numberIsRight === true)) {
        alert(`Your number is ${currentValue}!`);
        break; // if we guessed the number the cycle will stop working and show the message
    } else if (Boolean(numberIsRight === false)) {
        let numberIsLess = confirm(`Is your number less than ${currentValue}?`);
        if (Boolean(numberIsLess === true)) {
            endNumber = currentValue - 1; //if the number is less than current value we will make one iteration but the end number of a range will be equal of current value + 1
        } else if (Boolean(numberIsLess === false)) {
            let numberIsMore = confirm(`Is your number over ${currentValue}?`);
            if (Boolean(numberIsMore === true)) {
                startNumber = currentValue + 1;// if the number is over then current value we will calculate the new range with start number equals current value plus one
            }
        }
    }
}

//below you can find my first try. i tried to make it with for cycle but that was very hard

// for (let i = 0; i <= 10; i++) {
//
//     let currentValue = (endNumber - startNumber) / 2;
//     let numberIsRight = confirm(`Is your number ${currentValue}?`);
//
//
//     if (Boolean(numberIsRight) === true) {
//         alert(`your number is ${currentValue}!`);
//         break;
//     } else if (Boolean(numberIsRight) === false) {
//         let numberIsLess = confirm(`Is your number less than ${currentValue}?`);
//
//         if (Boolean(numberIsLess) === true) {
//             currentValue /= 2;
//
//         }
//
//
//     }
//
//
// }


// let numberIsMore = confirm(`Is your number over ${currentValue}?`);


