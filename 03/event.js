// var btn=document.getElementById('btn');
var btn=document.querySelector('#btn');
console.log(btn);

// btn.addEventListener('click', function() {
//     console.log('click');
//     window.open('http://daum.net', '', 'width=500, hight=500');
// })

function click(){
    console.log('click');
    window.open('http://daum.net', '', 'width=500, hight=500');
}
btn.addEventListener('click', click);