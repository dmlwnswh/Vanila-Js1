const toDoForm = document.getElementById('todo-form');
const toDoInput = toDoForm.querySelector('input');
const toDoList = document.getElementById('todo-list');

let toDos = [];

const TODOS_KEY = 'todos';

function deleteToDo(e) {
    const li =e.target.parentElement; //target: clicked element 
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); // num ==str 이라 안됨. 
    saveToDos();
}   

function saveToDos() {
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos)); //save value str
//JSON.parse('str') -> list
}
function paintToDo(newToDo) {
    //create li like background
    const newLi = document.createElement('li');
    newLi.id = newToDo.id;
    // li inside span
    const newLiSpan = document.createElement('span');
    newLiSpan.innerText = newToDo.text;
    const button = document.createElement('button');
    button.innerText = '✔';
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
    const newToDoObj = {
        text:newToDo,
        id: Date.now(),
    };
    toDos.push(newToDoObj);
    paintToDo(newToDoObj); 
    saveToDos();
}


toDoForm.addEventListener('submit',handleToDoSubmit);

//save -> load from localStorage 
//local storage can save only str not list
//then we use JSON.stringify



const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !==null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}

function sexyFilter() {

}
//we want to make [{id:121212, text='a'}] like this
//Date.now() -> random num 
//지울때는 item을 제외하고 새 list 생성 -> filter
// sexyFilter ->True: 포함, False:미포함

