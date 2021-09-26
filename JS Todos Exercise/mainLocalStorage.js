/* Part 2
Now that you have a functioning todo app, save your todos in localStorage! Make sure that when the page refreshes, the todos on the page remain there.

*/

// JS TODOs APP

// --------- I'm stuck.. I just don't know how to solve part B of this problem. ---------- I'll come back to it in the future...
// Access the form
// const form = document.querySelector('#add-todo');
// const input = document.querySelector('#submit-todo');
// const todoList = document.querySelector('#todo-list');

// // Load saved local storage
// const savedTodos = JSON.parse(localStorage.getItem('savedData')) || [];

// form.addEventListener('submit', function (e) {
//   e.preventDefault();
//   //   console.log(input.value);
//   const newTodo = document.createElement('li');
//   newTodo.innerText = input.value; // setting the submitted input as a text.
//   newTodo.dataset.isStriked = 'false';
//   todoList.appendChild(newTodo); // Appending the new todo to the list.

//   // Save to local storage (( may need to make an array or a key value set. In this case it will have to be a key value since we need to hold information on whether the todo has a strike through text or not.))
//   savedTodos.push({ task: newTodo.innerText, isStriked: 'false' });
//   localStorage.setItem('savedData', JSON.stringify(savedTodos));
// });

// // Mark a todo as completed (cross out the text of the todo)
// todoList.addEventListener('click', function (e) {
//   //   console.log(e.target.tagName);
//   if (e.target.tagName === 'LI') {
//     // console.log(e.target.innerText);
//     e.target.style.textDecoration = 'line-through';
//     // toggle boolean value to know if the text is striked for local storage.
//     e.target.dataset.isStriked = 'true';
//     // console.log(e.target.dataset);
//   }
// });

// // ********************
// // **** CODE ALONG ****
// // added remove button to code along.

const todoForm = document.querySelector('#add-todo');
const todoList = document.querySelector('#todo-list');

// retrieve from localStorage
const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
for (let i = 0; i < savedTodos.length; i++) {
  let newTodo = document.createElement('li');
  newTodo.innerText = savedTodos[i].task;
  newTodo.isCompleted = savedTodos[i].isCompleted ? true : false;
  if (newTodo.isCompleted) {
    newTodo.style.textDecoration = 'line-through';
  }
  todoList.appendChild(newTodo);
}

todoForm.addEventListener('submit', function (event) {
  event.preventDefault();
  let newTodo = document.createElement('li');
  let taskValue = document.querySelector('#submit-todo').value;
  const removeBtn = document.createElement('button');
  removeBtn.innerText = 'Remove Todo'; // Putting a text into the remove button.
  newTodo.innerText = taskValue;
  newTodo.isCompleted = false;
  todoForm.reset();
  newTodo.appendChild(removeBtn);
  todoList.appendChild(newTodo);

  // save to localStorage
  savedTodos.push({ task: newTodo.innerText, isCompleted: false });
  localStorage.setItem('todos', JSON.stringify(savedTodos));
});

todoList.addEventListener('click', function (event) {
  let clickedListItem = event.target;

  if (!clickedListItem.isCompleted) {
    clickedListItem.style.textDecoration = 'line-through';
    clickedListItem.isCompleted = true;
  } else {
    clickedListItem.style.textDecoration = 'none';
    clickedListItem.isCompleted = false;
  }

  // breaks for duplicates - another option is to have dynamic IDs
  for (let i = 0; i < savedTodos.length; i++) {
    if (savedTodos[i].task === clickedListItem.innerText) {
      savedTodos[i].isCompleted = !savedTodos[i].isCompleted;
      localStorage.setItem('todos', JSON.stringify(savedTodos));
    }
  }
});

todoList.addEventListener('click', function (e) {
  //   console.log(e.target.tagName);
  if (e.target.tagName === 'BUTTON') {
    e.target.parentElement.remove();
  } else if (e.target.tagName === 'LI') {
    // console.log(e.target.innerText);
    e.target.style.textDecoration = 'line-through';
  }
});
