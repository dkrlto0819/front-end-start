var box=document.querySelector('.box');
var moveBox=document.getElementById('box');

function move(){
    box.style.backgroundColor = 'yellow';
    var left= Math.floor(Math.random() * 330) + 10;
    var top= Math.floor(Math.random()*330)+10;
    box.style.left=left+'px';
    box.style.top=top+'px';
}

function remove(){
    box.style.backgroundColor = 'white';
}

setInterval(move, 1500);
moveBox.addEventListener('click', remove);