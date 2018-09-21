

var wrap = document.querySelector('.wrap');
var str = '';

for(let i = 1; i <= 4; i++) {
  for(let j = 1; j <= 4; j++) {
      str += `<div class='${(i + j) % 2 == 1 ? 'b' : 'w'}'></div>`
      
  }
}
wrap.innerHTML = str;

var blocks = document.querySelectorAll('.wrap > div');

// blocks.forEach(function(block){

//   block.addEventListener('click', function(event) { 
//     console.log(block);

//     block.style.backgroundColor = 'yellow';
//     block.className += ' y';
//   })

// });

function select(event){
    var block=event.currentTarget;
    //console.log(block);
    if(block.style.backgroundColor!='yellow'){
        block.style.backgroundColor='yellow';
    }else{
        if(block.className=='b'){
            block.style.backgroundColor='#000';
        }else{
            block.style.backgroundColor='#eee';
        }
        //block.style.backgroundColor=block.wrap;
        
    }
}
for(var i=0;i<16;i++){
    blocks[i].addEventListener('click', select);
}
