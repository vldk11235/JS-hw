let playList = [

    {

        author: "LED ZEPPELIN",

        song:"STAIRWAY TO HEAVEN"

    },

    {

        author: "QUEEN",

        song:"BOHEMIAN RHAPSODY"

    },

    {

        author: "LYNYRD SKYNYRD",

        song:"FREE BIRD"

    },

    {

        author: "DEEP PURPLE",

        song:"SMOKE ON THE WATER"

    },

    {

        author: "JIMI HENDRIX",

        song:"ALL ALONG THE WATCHTOWER"

    },

    {

        author: "AC/DC",

        song:"BACK IN BLACK"

    },

    {

        author: "QUEEN",

        song:"WE WILL ROCK YOU"

    },

    {

        author: "METALLICA",

        song:"ENTER SANDMAN"

    }

];

setPlaylist()

function setPlaylist() {

for (let i = 0; i < playList.length; i++){
    let playListNode = document.createElement("li");
    playListNode.innerText = `${playList[i].song} by ${playList[i].author}`;
    list.appendChild(playListNode);
}

}

// Get the modal
let modal = document.getElementById("myModal");

// Get the button that opens the modal
let btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}



let redLight = document.getElementById('red');

let yellowLight = document.getElementById('yellow');

let greenLight = document.getElementById('green');

let trafficLight = document.getElementById('tf');

let lightChange = document.getElementById('lightsButton');

let currentLight = 'red';

lightChange.onclick = function () {

    if (currentLight === 'red') {
        redLight.classList.remove('red-light');
        redLight.classList.add('no-light');
        yellowLight.classList.add('yellow-light');
        return currentLight = 'yellow';
    }

    if (currentLight === 'yellow') {
        yellowLight.classList.remove('yellow-light');
        greenLight.classList.add('green-light');
        return currentLight = 'green';
    }

    if (currentLight === 'green') {
        greenLight.classList.remove('green-light');
        redLight.classList.add('red-light');
        return currentLight = 'red';
    }

}





