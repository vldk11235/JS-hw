"use strict";

let shoppingList = [

    {
        name: 'apple',
        quantity: 5,
        isBought: true,
        price: 2.75,
        sum: null,
    },
    {
        name: 'nails',
        quantity: 117,
        isBought: false,
        price: 1,
        sum: null,
    },
    {
        name: 'slippers',
        quantity: 2,
        isBought: true,
        price: 5,
        sum: null,
    },
    {
        name: 'herring',
        quantity: 4,
        isBought: false,
        price: 8,
        sum: null,
    },


]

//created our shopping list

shoppingList.sort((a) => a.isBought ? 1 : -1);
//we sort our array putting the items that are not bought yet at first place
shoppingList.forEach(item => console.log(item.name));
//showing our new order of items from not bought to is bought

let setBought = (name) => {
    shoppingList.forEach(item => {
        if (item.name === name) {
            item.isBought = true;
        }
    })
}
//changing our isBought to true

let deleteTheItem = name => shoppingList.filter(item => item.name !== name);
//function deleting anything we want from our shopping list
let filteredArray = deleteTheItem('apple');
//creating new array without apples
console.log('apple', filteredArray);


let addItem = (name, quantity, price) => {
    let isItemPresent;
    shoppingList.forEach(item => {
        if (item.name === name) {
            item.quantity += quantity;
            item.sum = item.price * item.quantity;
            isItemPresent = true;
        }
    })
    if (!isItemPresent) {
        shoppingList.push({name, quantity, price, sum: quantity * price, isBought: false})
    }

}

addItem('apple', 3,);
//adding item that we already have
addItem('grenades', 10, 6.66);
//adding some grenades to our shopping list

console.log(shoppingList);


let itemsSum = 0;

//creating zero sum of all items to be changed with new function

let getSum = () => {
    shoppingList.forEach(item => {
        if (item.isBought) {
            item.sum = item.price * item.quantity;
            itemsSum += item.sum;
        }
    })
}

//looking through every item and if we buy this item we add a sum into our itemsSum variable

getSum();

console.log(itemsSum);


let notBoughtSum = 0;

// zero sum for items that had not been bought

let getNotBoughtSum = () => {
    shoppingList.forEach(item => {
        if (!item.isBought) {
            item.sum = item.price * item.quantity;
            notBoughtSum += item.sum;
            console.log ('check', notBoughtSum);
        }
    })

}

getNotBoughtSum();

console.log(notBoughtSum);






