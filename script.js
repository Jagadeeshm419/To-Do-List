const toDoList = [];

renderToDoList();

// 2:
function renderToDoList(){
  let toDoListHtml = '';

  for(i = 0; i < toDoList.length; i++){
    const todoObject = toDoList[i];
    const {name, dueDate} = todoObject;

    const html = `
      <div>* ${name} </div> 
      <div>  ${dueDate} </div> 
      <button class="delete-button"onClick="toDoList.splice(${i}, 1); renderToDoList();">
        Delete
      </button>`;

    toDoListHtml += html;
  }
  document.querySelector('.js-todo-list').innerHTML = toDoListHtml;
}

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
