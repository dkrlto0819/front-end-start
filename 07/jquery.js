
//document.querySelector('h1').innerHTML= 'HI';
//$('h1').fadeOut().delay(100).fadeIn(); << 사라졌다가 나옴!!!
// $('div')
// .css("background-color", 'yellow');
// .css('border-color', 'red');

// var $div = $('div');
// $div
//     .css('background-color', 'yellow');
//     .css('border');
    

var $btn=$('#btn');
var $txt=$('#txt');
var $debug=$('#debug');
var $window=$('#scrollImage');

$btn.on('click', function(event){
    console.log('click')
    if($txt.val()==''){
        alert('검색어를 입력해주세요')
        return;
    }
    $debug.html($txt.val());
});

$window.scroll(function(){
    
})