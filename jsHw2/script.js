let moneyAvailable = prompt('How much money do you have?');
let chocolatePrice = prompt('How much does the chocolate cost?');

let chocolateToBuy = moneyAvailable / chocolatePrice;
let moneyLeft = moneyAvailable - (chocolatePrice * chocolateToBuy);


// console.log(chocolateToBuy);
// console.log(moneyLeft);
alert('You can buy' + ' ' + chocolateToBuy + ' ' + 'chocolates');
alert('You will have' + ' ' + moneyLeft + ' ' + 'money left');

