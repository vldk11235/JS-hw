let moneyAvailable = +prompt('How much money do you have?');
let chocolatePrice = +prompt('How much does the chocolate cost?');

let chocolateToBuy = Math.floor(moneyAvailable / chocolatePrice);

let moneyLeft = moneyAvailable - (chocolatePrice * chocolateToBuy);

alert(`You can buy ${chocolateToBuy} chocolates`);
alert(`You will have ${moneyLeft} money left`);

let userNumber = +prompt('Type a 3 digit number');

let firstDigit = userNumber % 10;
let secondDigit = (userNumber % 100 - firstDigit) / 10;
let thirdDigit = Math.floor((userNumber % 1000 - (firstDigit + secondDigit)) / 100);


alert(`Your number backwards is ${firstDigit}${secondDigit}${thirdDigit}`);





