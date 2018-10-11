var appkey='de5a3df8bfa9fc0912865380a0a0602d'
var myHeaders = new Headers();
myHeaders.append('Authorization', 'KakaoAK de5a3df8bfa9fc0912865380a0a0602d');
var options={headers:myHeaders};

var page; 
var getText='', url='', str=''; 
var contain10= document.getElementById('btnsearch');

function search(){ 
    document.getElementById('nextBtn').style.display="block"; 
    page=1;
    getText=document.getElementById('searchText').value; 
    if(getText=='') alert("검색어를 입력하세요.");
    url=`https://dapi.kakao.com/v2/search/web?query=${getText}&page=${page}`;
    fetch(url,options)
        .then(function(response){
            response.json().then(function(data){
                str=''; 
                for(var i = 0; i < data.documents.length; i++) { 
                    str += '<div id=contain>'+'<a href='+data.documents[i].url+'>'+ data.documents[i].title +'</a></div>';
                    contain10.innerHTML=str;
                }
            })
        })
    }

function nextBtn(){
    page+=1;
    url=`https://dapi.kakao.com/v2/search/web?query=${getText}&page=${page}`; 
    fetch(url,options)
        .then(function (response){
            response.json().then(function(data){
                for(var j=0; j<data.documents.length; j++){
                    str += '<div id=btnnext>'+'<a href='+data.documents[j].url+'>'+ data.documents[j].title +'</a></div>';
                    contain10.innerHTML=str;
                }
            })
        })
}

document.getElementById('search').addEventListener('click',search);
document.getElementById('nextBtn').addEventListener('click',nextBtn);


