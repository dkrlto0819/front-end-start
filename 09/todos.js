// //start...


// var todo=input.value;
// var input = document.getElementById('memo');
// var list = document.getElementById('list');
// var form = document.guerySelector('.new-task');

// function addTodo(event){
//     // if(event.keyCode == 13){
//     //     var todo = input.value;
//     //     console.log('todo');
//     // }\\

//     console.log(todo);
//     insertTodo(todo);
//     event.preventDefault();
// }

// form.addEventListener('submit', addTodo);

// function insertTodo(todo){
//     var html = `<li>
//     <button class="delete">×</button>
//     <input type="checkbox" class="toggle-checked">
//     <span class="text">${todo}</span>
//   </li>`;

//   list.innerHTML+=html;
// }
// // input.addEventListener('keydown', addTodo);

var input = document.getElementById('memo');
var list = document.getElementById('list');
var form = document.querySelector('.new-task');
var btn_delete=document.getElementById('btn_delete');
var checkbox = document.getElementById('check');


function addTodo(event){
  // if(event.keyCode === 13) {
  //   var todo = input.value;
  //   console.log(todo);
  // }
  // console.log(event);


  var todo = input.value;
  console.log(todo); 
  insertTodo(todo);

  input.value = '';
  event.preventDefault(); //form 이 안 넘어가도록
}

// input.addEventListener('keydown', addTodo);
form.addEventListener('submit', addTodo);
var count=1;
function insertTodo(todo){

  var html = `<li id="a">
        <button class="delete" id="btn_delete">×</button>
        <input type="checkbox" id="check" class="toggle-checked">
        <span class="text">${todo}</span>
      </li>`;
    
//   list.appendChild(count);
//   count++;
  list.innerHTML += html;    
}

// function btn_delete(event) {
//     // console.log("delete");
//     // var parent = document.getElementById("list");
//     // var child = document.getElementById("a");
//     // parent.removeChild(child);
//     // list.removeChild(event.target.button);

//     if(event.target.)
// }

// btn_delete.addEventListener('click', btn_delete);

function deleteTodo(event){
    if(event.target.classList.value==='delete'){
        event.target.parentNode.remove();
    }
    
}

// input.addEventListener('click', addTodo);
form.addEventListener('submit', addTodo);
addEventListener('click',deleteTodo)