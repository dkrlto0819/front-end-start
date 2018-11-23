//start...
var inputbox = document.getElementById('text');
var form=document.querySelector('.new-task');

var list=document.getElementById('list');
function addTodo(event){
    var todo=inputbox.value;
    console.log(todo);
    insertToinputbox(todo);
    inputbox.value = '';

    event.preventDefault(); // 기본적으로 form 에서 onSubmit()을 통해 submit을 하면 이베트 완료 후 refresh되어버림
}

var count=1;
function insertToinputbox(str){
    var htmlContent = `<li id=${count}><button class="delete" id="delete">×</button>
    <input type="checkbox" id="checkbox" class="toggle-checked">
    <span class="text">${str}</span></li> `;

    list.innerHTML+=htmlContent;
}

function deleteTodo(event){
    if(event.target.classList.value === 'delete'){    //event.target.ClassList.value => 이벤트가 일어난 클래스의 값
        event.target.parentNode.remove();
    }
}

//inputbox.addEventListener('submit', addTodo);
form.addEventListener('submit', addTodo);   //submit button is pressed
addEventListener('click', deleteTodo);