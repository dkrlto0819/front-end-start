
    // var board = document.getElementById("board");
    
    // var str, sw=0;
    // for(var i=0; i<4; i++){
    //     for(var j=0; j<4; j++){
    //         if(sw==0){
    //             str+='<div class="b"></div>'
    //             sw=1;
    //         }else if(sw==1){
    //             str+='<div class="w"></div>'
    //             sw=0; 
    //         }
    //     }
    //     wrap.innerHTML = str;
    //     str='';
    //     sw=(sw+1)%2;
    // }

var wrap=document.querySelector('.wrap');

var str='', sw=0;;
for(j=1;j<=4;j++){
    for(i=1;i<=4;i++){
        if(i%2==sw){
            str+='<div class="b"></div>';
        }else{
            str+='<div class="w"></div>';
        }
    }
    sw=(sw+1)%2;
}
wrap.innerHTML=str;