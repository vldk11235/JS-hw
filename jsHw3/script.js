alert('Think of a number from 0 to 100');




let startNumber = 0;
let endNumber = 100;
let numberIsRight = false;

while (!numberIsRight) {
    let currentValue = Math.floor((startNumber + endNumber) / 2);

    if (confirm(`Is your number ${currentValue}?`)) {
        alert(`Your number is ${currentValue}!`);
        break;
    } else {
        confirm(`Is your number less than ${currentValue}?`) ? endNumber = currentValue - 1 : startNumber = currentValue + 1;
    }
}

//i redesigned the code to be more simple and sophisticated
//below you can see the previous version of it


//asking user to think a number

// let startNumber = 0;
// let endNumber = 100;

//establishing start and end point of our range

// let numberIsRight = false;

//this is for our counter. we need this value to be false unless we will guess the number

// while (Boolean(numberIsRight === false)) {
//     let currentValue = Math.floor((startNumber + endNumber) / 2); //every cycle will begin with calculating the middle number of the range
//     numberIsRight = confirm(`Is your number ${currentValue}?`);
//
//     if (Boolean(numberIsRight === true)) {
//         alert(`Your number is ${currentValue}!`);
//         break; // if we guessed the number the cycle will stop working and show the message
//     } else if (Boolean(numberIsRight === false)) {
//         let numberIsLess = confirm(`Is your number less than ${currentValue}?`);
//         if (Boolean(numberIsLess === true)) {
//             endNumber = currentValue - 1; //if the number is less than current value we will make one iteration but the end number of a range will be equal of current value + 1
//         } else if (Boolean(numberIsLess === false)) {
//             let numberIsMore = confirm(`Is your number over ${currentValue}?`);
//             if (Boolean(numberIsMore === true)) {
//                 startNumber = currentValue + 1;// if the number is over then current value we will calculate the new range with start number equals current value plus one
//             }
//         }
//     }
// }

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
//
//
// let numberIsMore = confirm(`Is your number over ${currentValue}?`);
//

let a = 2;
for (a = 2; a <= 9; a++) {
    for (let i = 1; i <= 10; i++) {
        console.log(a * i);
    }
}

//it's easy whe we make cyncle inside the other cycle: we mace a counter for incrementing numbers,
//and then make another one for multiplying each number 10 times in a row


//
// //asked the user for data
//
//
// if (userDay <= 28 && userDay > 0) {
//
//     alert(`The next day is ${++userDay}.${userMonth}.${userYear}`);
// }
//
// //the most common cases, when it's not the end of the month or a year
//
// if (userDay === 31 && userMonth === 12) {
//     alert(`The next day is 01.01.${++userYear}`);
// }
// //the new year case Jingle Bells!!!
//
// if (userDay === 28 && userMonth === 2 && userYear % 4) {
//     alert(`The next day is 29.02.${userYear}`);
// }
// // leap year case
//
// if (userDay === 29 && userMonth === 2 && userYear %4) {
//     alert(`The next day is 01.03.${userYear}`)
// }
//
// // leap year case 2
//
// if (userDay === 30 && (userMonth === 2 || 4 || 6 || 9 || 11 )) {
//     alert(`The next day is 01.${++userMonth}.${userYear}`)
// }
//
// //the las day of the 30-days months
//
// if (userDay === 31 && (userMonth === 1 || 3 || 5 || 7 || 8 || 10 ) ) {
//     alert(`The next day is 01.${++userMonth}.${userYear}`)
// }
let userDay = +prompt('Enter the day');
let userMonth = +prompt('Enter the month');
let userYear = +prompt('Enter the Year');

let day = new Date(userYear, --userMonth, userDay);
console.log(day); // Apr 30 2000

let nextDay = new Date(day);
nextDay.setDate(day.getDate() + 1);
console.log(nextDay); // May 01 2000

// //the last day of the 31-days months
//
// //to tell the truth i suppose that the last task need more sophisticated solution using cycles or something
// //I just hardcoded that and it's not right i guess. I'll think tomorrow about that


// let userDay = +prompt('Enter the day');
// let userMonth = +prompt('Enter the month');
// let userYear = +prompt('Enter the Year');
//
// let data = new Date(userYear, userMonth, userDay);
// let tomorrow = new Date();
// tomorrow.setDate(data.getDate()+1);
// console.log(tomorrow);
// let userRadius;
//
// getData();
// alert(circleLength());
// alert(circleSquare());
//
//
// function getData() {
//     userRadius = +prompt('enter radius');
// }
//
// function circleLength() {
//
//     if (userRadius > 0) {
//         return (2 * (Math.PI * userRadius)).toFixed(2);
//     } else {
//         alert('enter valid value');
//         getData();
//         return circleLength();
//     }
// }
//
// function circleSquare() {
//
//     if (userRadius > 0) {
//         return (Math.PI * userRadius ** 2).toFixed(2);
//     } else {
//         alert('enter valid value');
//         getData();
//         return circleSquare();
//     }
// }


