let numbersCount = +prompt('hom much fibonacci numbers do you want?');

let previousValue = 0;
let currentValue = 1;

for (let i = 0; i <= numbersCount; i++) {

    let newCurrentValue = currentValue

    currentValue += previousValue;

    previousValue = newCurrentValue

    console.log(currentValue);
}
