let counter = document.getElementById('counter');
let button = document.getElementById('button');

button.addEventListener('click',likeCounter);



function likeCounter()  {

    counter.innerHTML++;
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    button.style.backgroundColor = "#" + randomColor;

}