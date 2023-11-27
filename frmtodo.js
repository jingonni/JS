const frmTodo = document.getElementById("frmToDo");
const lstTodo = document.getElementById("lstToDo");
const inputTodo = document.querySelector("#frmToDo input");
const todoList = [];
const KEY_TODOS = 'todos';


function deleteTodo(event){
    console.log('delete함수 시작')
    //console.log(event.target.parentElement);
    const li = event.target.parentElement;

     // todoList 배열에서 삭제
     const deleteTodoList = todoList.filter(todo => todo.id.toString() !== li.id);
     console.log(deleteTodoList);
     todoList.length = 0;
     Array.prototype.push.apply(todoList, deleteTodoList);
 
     // 로컬 스토리지에서도 삭제
     saveTodos();

     li.remove();
}

function displayTodo(arg){
    //리스트(ul)에 추가하기
    //ul>li>span

    //li
    //span
    var li = document.createElement('li');
    li.id = arg.id;
    var span = document.createElement('span');

    //span에 할일 추가
    span.innerText = arg.text;
    
    //X 버튼 추가
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click",deleteTodo);

    //자식추가
    lstTodo.appendChild(li);
    li.appendChild(span);
    li.appendChild(button);


}

//로컬 스토리지에 저장하는 함수
function saveTodos() {
    // 로컬 스토리지에 저장합니다.
    localStorage.setItem(KEY_TODOS,JSON.stringify(todoList))
    
    
}

//ToDo 입력값 받아오기
function handleSubmitTodo(event){
    event.preventDefault();
    const valueTodo = (inputTodo.value);

    inputTodo.value = '';
    
    const newToDoObj = {
        text : valueTodo,
        id : Date.now(),
    }
    todoList.push(newToDoObj);
    

    displayTodo(newToDoObj);
    saveTodos();
    
    //console.log(todoList);
    
}

frmTodo.addEventListener("submit", handleSubmitTodo);

//KEY_TODOS에 값이 있으면 순회하면서 값 하나씩 가져오기
const saveTodoList = localStorage.getItem(KEY_TODOS);
if(saveTodoList !== null){
    
    const parseSaveTodoList = JSON.parse(saveTodoList)
        parseSaveTodoList.forEach(displayTodo)
}