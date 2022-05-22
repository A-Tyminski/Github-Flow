const btn = document.querySelector('.btn');
const list = document.querySelector('.list');

let counter = 0;

function addListItem() {
    const listItem = document.createElement('li');
    if(counter % 3 === 0) {
    listItem.style.fontSize = '3rem';
    }
    listItem.textContent = counter;
    list.appendChild(listItem)
    counter++;
}

btn.addEventListener('click', addListItem);

