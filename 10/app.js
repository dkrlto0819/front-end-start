var warpWidth=330;
var bugWidth=10;

var score=0;
var level=1;
var missing=0;

var box=document.querySelector('.box');
var moveBox=document.getElementById('box');
var write=document.getElementById('write');
var backgroundBox=document.getElementById('backgroundBox');

write.innerHTML=`Score :${score}<br>Level:${level}<br>Missing:${missing}`;

function move(){
    box.style.backgroundColor = 'yellow';
    var left= Math.floor(Math.random() * warpWidth) + bugWidth;
    var top= Math.floor(Math.random()*warpWidth)+bugWidth;
    box.style.left=left+'px';
    box.style.top=top+'px';
}

function remove(){
    box.style.backgroundColor = 'white';
    score++;
    write.innerHTML=`Score :${score}<br>Level:${level}<br>Missing:${missing}`;
    event.stopPropagation();
}

function wrongClick(){
    missing++;
    write.innerHTML=`Score :${score}<br>Level:${level}<br>Missing:${missing}`;
}

setInterval(move, 1500);
moveBox.addEventListener('click', remove);
backgroundBox.addEventListener('click', wrongClick);