/* 

Part 1
For this assignment you will be combining your knowledge of DOM access and events to build a todo app!

As a user, you should be able to:

Add a new todo (by submitting a form)
Mark a todo as completed (cross out the text of the todo)
Remove a todo


Part 2
Now that you have a functioning todo app, save your todos in localStorage! Make sure that when the page refreshes, the todos on the page remain there.

*/

// JS TODOs APP

// Access the form
const form = document.querySelector('#add-todo'); //newTodoForm
const input = document.querySelector('#submit-todo');
const todoList = document.querySelector('#todo-list');

// Add a new todo (by submitting a form)
form.addEventListener('submit', function (e) {
  e.preventDefault();
  //   console.log(input.value);
  const newTodo = document.createElement('li');
  const removeBtn = document.createElement('button');
  removeBtn.innerText = 'Remove Todo'; // Putting a text into the remove button.
  newTodo.innerText = input.value; // setting the submitted input as a text.
  newTodo.appendChild(removeBtn); // Whenever we add a new todo list, we add a remove button to it.
  todoList.appendChild(newTodo); // Appending the new todo to the list.
  input.value = ''; // setting the text box to empty again.
});

// Mark a todo as completed (cross out the text of the todo)
todoList.addEventListener('click', function (e) {
  //   console.log(e.target.tagName);
  if (e.target.tagName === 'BUTTON') {
    e.target.parentElement.remove();
  } else if (e.target.tagName === 'LI') {
    // console.log(e.target.innerText);
    e.target.style.textDecoration = 'line-through';
  }
});
