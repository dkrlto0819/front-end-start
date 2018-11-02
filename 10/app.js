var warpWidth=330;
var bugWidth=10;

var score=0;
var level=1;
var missing=0;
var life=[10, 9, 8, 7, 6];
var passScore=[10, 12, 14, 16, 18];

var box=document.querySelector('.box');
var moveBox=document.getElementById('box');
var write=document.getElementById('write');
var backgroundBox=document.getElementById('backgroundBox');

write.innerHTML=`Score :${score}<br>Level:${level}<br>Missing:${missing}/${life[level-1]}`;

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
    if(score==passScore[level-1]){
        level++;
        score=0;
        missing=0;
    }
    write.innerHTML=`Score :${score}<br>Level:${level}<br>Missing:${missing}/${life[level-1]}`;
    event.stopPropagation();
}

function wrongClick(){
    missing++;
    if(missing==life[level-1]){
        box.style.backgroundColor='white';
        backgroundBox.innerHTML=`<h1>Game Over</h1>`;
    }
    write.innerHTML=`Score :${score}<br>Level:${level}<br>Missing:${missing}/${life[level-1]}`;
}

setInterval(move, 1500);
moveBox.addEventListener('click', remove);
backgroundBox.addEventListener('click', wrongClick);