let divText = document.getElementById('div-text');

document.addEventListener('keydown', function (event) {

    if (event.code === 'KeyE' && event.ctrlKey) {
        event.preventDefault();
        let textarea = document.createElement('textarea');
        textarea.innerHTML = divText.innerHTML;
        textarea.setAttribute('id', 'txt');
        // textarea.onclick = (e) => {saveData(e)}
        divText.parentNode.replaceChild(textarea, divText);
    }
    if (event.code === 'KeyS' && event.ctrlKey) {
        event.preventDefault();
        let textArea = document.getElementById('txt');
        divText.innerHTML = textArea.value;
        textArea.parentNode.replaceChild(divText, textArea);
    }
})


//second part of the task is not ready yet. I'll ask about it on Saturday


//i'll make tasks 2 and 3 here


// let tableContent = document.getElementById('tbl');
// console.log(tableContent);
//
// tableContent.addEventListener('click', function () {tableContent.sort((a) => a.value ? 1 : -1);});


let tableData = document.getElementById('tbl');



let tableContent = [
    {
        name: 'Zasha',
        age: 3,
        country: 'Ukraine',
    },
    {
        name: 'Kasha',
        age: 34,
        country: 'Spain',
    },
    {
        name: 'Arisha',
        age: 12,
        country: 'Canada',
    },

]


setTable();
// filterTable('age', 'asc');
// filterTable('age', 'desc');
// filterTable('name', 'desc');
// filterTable('name', 'asc');


function setTable() {
    let existingRows = Array.from(document.getElementsByClassName('tableItem'));
    console.log('existingRows', existingRows);

    if (existingRows.length) {
        existingRows.forEach((item) => {
            item.remove();
        })
    }
    tableContent.forEach((item) => {
        let tableRow = document.createElement('tr');
        tableRow.classList.add('tableItem');
        tableRow.innerHTML = `<td>${item.name}</td> <td>${item.age}</td> <td>${item.country}</td>`;
        tableData.appendChild(tableRow);
    })

}


function filterTable(key, dir) {
    console.log(key, dir);


    tableContent.sort((l, r) => {
        if (dir === 'asc') {
            if (l[key] > r[key]) {
                return 1;
            } else if (l[key] < r[key]) {
                return -1;
            } else {
                return 0;
            }
        } else {
            if (l[key] > r[key]) {
                return -1;
            } else if (l[key] < r[key]) {
                return 1;
            } else {
                return 0;
            }
        }
    })

    setTable();
}

// setEventListeners();

function  setEventListeners(){

   let titles = Array.from(document.getElementsByClassName('tableTitle'));
   titles.forEach((item)=> {
       item.addEventListener('click', filterTable);
   })

}

