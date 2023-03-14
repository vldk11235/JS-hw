"use strict";
const apiKey = '25c5db96';

let userName = '';
let userType = '';
let searchButton = document.getElementById('button');

searchButton.addEventListener('click', (e) => {
    e.preventDefault();
    userName = document.getElementById('movieTitle').value;
    console.log('username', userName);
    userType = document.getElementById('type').value;
    console.log('userType', userType);
// apiRequest();
    $.get(`https://www.omdbapi.com/?t=${userName}&type=${userType}&apikey=${apiKey}`, (data) => {
        console.log('data', data);
    });
})


// function apiRequest() {
//     $.get(`https://www.omdbapi.com/?t=${userName}&type=${userType}&apikey=${apiKey}`);
// }






