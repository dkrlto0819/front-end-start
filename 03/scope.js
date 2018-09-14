var num, total = 0;

for(var isEnd = false; isEnd === false;){
  num=null;
  num = prompt("더 할 숫자를 입력하세요");

  if(num === null){
    alert("입력한 숫자들의 합은 "+ total +" 입니다");
    isEnd = true;
  }
  else {
    total += parseInt(num, 10);
  }
}