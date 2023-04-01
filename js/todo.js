const toDoForm = document.getElementById('todo-form');
const toDoInput = toDoForm.querySelector('input');
const toDoList = document.getElementById('todo-list');

const toDos = [];

function deleteToDo(e) {
    const li =e.target.parentElement; //target: clicked element 
    li.remove();
}   

function saveToDos() {
    localStorage.setItem('toDos',JSON.stringify(toDos));
}
function paintToDo(newToDo) {
    //create li like background
    const newLi = document.createElement('li');
    // li inside span
    const newLiSpan = document.createElement('span');
    newLiSpan.innerText = newToDo;
    const button = document.createElement('button');
    button.innerText = '❌';
    button.addEventListener('click',deleteToDo);
    newLi.appendChild(newLiSpan);
    newLi.appendChild(button);
    toDoList.appendChild(newLi);
}



function handleToDoSubmit(e) {
    e.preventDefault();
    const newToDo = toDoInput.value;
    //Todo input delete
    toDoInput.value = '';
    toDos.push(newToDo);
    paintToDo(newToDo); 
    saveToDos();
}


toDoForm.addEventListener('submit',handleToDoSubmit);

//save -> load from localStorage 
//local storage can save only str not list
//then we use JSON.stringify
