var appkey='de5a3df8bfa9fc0912865380a0a0602d'
var myHeaders = new Headers();
myHeaders.append('Authorization', 'KakaoAK de5a3df8bfa9fc0912865380a0a0602d');
var options={headers:myHeaders};

var page; 
var getText='', url='', str=''; 
var searchResult=document.getElementById('searchResult');

function search(){ 
    document.getElementById('nextBtn').style.display="block"; 
<<<<<<< HEAD

    page=1;
    getText=document.getElementById('searchText').value; 

=======
    page=1;
    getText=document.getElementById('searchText').value; 
>>>>>>> 98760257df968047e4e6d0f484fdf6e17ed6abb9
    if(getText=='') alert("검색어를 입력하세요.");

    url=`https://dapi.kakao.com/v2/search/web?query=${getText}&page=${page}`;

    fetch(url,options)
        .then(function(response){
            response.json().then(function(data){
                str=''; 
                for(var i = 0; i < data.documents.length; i++) { 
                    str += '<div id=searchResult>'+'<a href='+data.documents[i].url+'>'+ data.documents[i].title +'</a></div>';
                    searchResult.innerHTML=str;
                }
            })
        })
    }

function nextBtn(){
<<<<<<< HEAD

    page+=1;
    url=`https://dapi.kakao.com/v2/search/web?query=${getText}&page=${page}`; 
    
=======
    page+=1;
    url=`https://dapi.kakao.com/v2/search/web?query=${getText}&page=${page}`; 
>>>>>>> 98760257df968047e4e6d0f484fdf6e17ed6abb9
    fetch(url,options)
        .then(function (response){
            response.json().then(function(data){
                for(var i=0; i<data.documents.length; i++){
                    str += '<div id=searchResult>'+'<a href='+data.documents[i].url+'>'+ data.documents[i].title +'</a></div>';
                    searchResult.innerHTML=str;
                }
            })
        })
}

document.getElementById('search').addEventListener('click',search);
document.getElementById('nextBtn').addEventListener('click',nextBtn);



