const toDoList = [];

renderToDoList();

// 2:
function renderToDoList(){
  let toDoListHtml = '';

  toDoList.forEach((todoObject) => {
      const {name, dueDate} = todoObject;
  
      const html = `
        <div>* ${name} </div> 
        <div>  ${dueDate} </div> 
        <button class="delete-button">
          Delete
        </button>`;
  
      toDoListHtml += html;
  });
  document.querySelector('.js-todo-list').innerHTML = toDoListHtml;

//Delete Button:
  document.querySelectorAll('.delete-button').forEach((deleteButton, index) => {
    deleteButton.addEventListener('click', () => {
    toDoList.splice(index, 1); renderToDoList()})
  });
}

//Add Button:
document.querySelector('.add-button').addEventListener('click', () => {
  addTodo();
})

// 1:
function addTodo(){
  const inputElement = document.querySelector('.js-input');
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-duedate-input')
  const dueDate = dateInputElement.value;

  toDoList.push({name,dueDate})

  inputElement.value = '';

  renderToDoList();
}

function keyDown(event){
  if(event.key === 'Enter')
    addTodo();
}
