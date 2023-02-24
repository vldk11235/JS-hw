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
        price: 0.35,
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

shoppingList.sort((a, b) => a.isBought ? 1 : -1);
//we sort our array putting the items that are not bought yet at first place
shoppingList.forEach(item => console.log(item.name));
//showing our new order of items from not bought to is bought

let setBought = (name) => {
    shoppingList.forEach(item => {
       if(item.name === name) {
           item.isBought = true;
       }
    } )
}
//changing our isBought to true
let deleteItem = [];

let deleteTheItem = (name) => {
    deleteItem.push(shoppingList.filter(item => item.name !== name));
}
//creating new array without apples
console.log('deleteItem',deleteItem);

deleteTheItem('apple');




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

// addItem('apple', 3,);
//adding item that we already have
addItem('grenades',10,6.66);
//adding some grenades to our shopping list

console.log(shoppingList);








