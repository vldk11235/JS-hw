let user = {
    userName: null,
    userLastName: null,
    1: {
        userName: null,
    }
}

getUserData();
console.log('user', user);

function getUserData() {
    user.userName = prompt("What is your name?");
    user.userLastName = prompt("What is your last name?");
    let isHaveKids = confirm("Do you have kids?")
    if (isHaveKids) {
        let kidsQuantity = +prompt("How many kids do you have?");
        for (let i = 0; i < kidsQuantity; i++) {
            user[i + 1] = {};
            user[i + 1].userName = prompt(`Your ${i + 1} kid name`);
        }

        return
    } else {
        alert("Find a woman!");
    }

}


// function setKidData (kidKey) {
//     user[kidKey].userName = prompt("Your kid name");
// }