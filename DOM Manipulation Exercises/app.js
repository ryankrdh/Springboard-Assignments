'use strict';

// Select the section with an id of container without using querySelector.
const section = document.getElementById('container');

// Select the section with an id of container using querySelector.
const section = document.querySelector('#container');

// Select all of the list items with a class of “second”.
const lists = document.querySelectorAll('.second');

// Select a list item with a class of third, but only the list item inside of the ol tag.
const lists = document.querySelectorAll('ol .third');

// Give the section with an id of container the text “Hello!”.
let section = document.querySelector('#container');
section.innterText = 'Hello!';
// console.log(section);

// Add the class main to the div with a class of footer.
let div = document.querySelector('.footer');
div.classList.add('main');
// console.log(div);

// Remove the class main on the div with a class of footer.
let div = document.querySelector('.footer');
div.classList.remove('main');
// console.log(div);

// Create a new li element.
let newLi = document.createElement('li');

// Give the li the text “four”.
let newLi = document.createElement('li');
newLi.innerText = 'four';
// console.log(newLi);

// Append the li to the ul element.
let newLi = document.createElement('li');
const ul = document.querySelector('ul');
ul.append(newLi);
// console.log(ul);

// Loop over all of the lis inside the ol tag and give them a background color of “green”.
let lisInsideOl = document.querySelectorAll('ol li');
console.log(lisInsideOl);

for (let i = 0; i < lisInsideOl.length; i++) {
  lisInsideOl[i].style.backgroundColor = 'green';
}

// Remove the div with a class of footer
let footer = document.querySelector('.footer');
footer.remove();
// console.log(footer);
