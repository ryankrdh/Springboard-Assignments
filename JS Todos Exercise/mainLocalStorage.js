/* Part 2
Now that you have a functioning todo app, save your todos in localStorage! Make sure that when the page refreshes, the todos on the page remain there.

*/

// JS TODOs APP

// --------- I'm stuck.. I just don't know how to solve part B of this problem. ---------- I'll come back to it in the future...
// Access the form
const form = document.querySelector('#add-todo');
const input = document.querySelector('#submit-todo');
const todoList = document.querySelector('#todo-list');

// Load saved local storage
const savedTodos = JSON.parse(localStorage.getItem('savedData'));

form.addEventListener('submit', function (e) {
  e.preventDefault();
  //   console.log(input.value);
  const newTodo = document.createElement('li');
  newTodo.innerText = input.value; // setting the submitted input as a text.
  newTodo.dataset.isStriked = 'false';
  todoList.appendChild(newTodo); // Appending the new todo to the list.

  // Save to local storage (( may need to make an array or a key value set. In this case it will have to be a key value since we need to hold information on whether the todo has a strike through text or not.))
  savedTodos.push({ task: newTodo.innerText, isStriked: 'false' });
  localStorage.setItem('savedData', JSON.stringify(savedTodos));
});

// Mark a todo as completed (cross out the text of the todo)
todoList.addEventListener('click', function (e) {
  //   console.log(e.target.tagName);
  if (e.target.tagName === 'LI') {
    // console.log(e.target.innerText);
    e.target.style.textDecoration = 'line-through';
    // toggle boolean value to know if the text is striked for local storage.
    e.target.dataset.isStriked = 'true';
    // console.log(e.target.dataset);
  }
});

// // ********************
// // **** CODE ALONG ****

// // create variables to connect to the DOM.
// const todoForm = document.getElementById('newTodoForm');
// const todoList = document.getElementById('todoList');

// // retrieve from local Storage
// const savedTodos = JSON.parse(localStorage.getIte)
