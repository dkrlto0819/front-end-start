var pageNum = 1;
var pageSize = 10;

var trendingUrl = 'http://1boon.kakao.com/ch/trending.json?pageSize='+pageSize+'&page=';
var issueUrl = 'http://1boon.kakao.com/ch/issue.json?pageSize='+pageSize+'&page=';
var enterUrl = 'http://1boon.kakao.com/ch/enter.json?pageSize='+pageSize+'&page=';

var activeUrl = trendingUrl;

var loading=document.getElementById('loading');
var btn_seeMore=document.getElementById('seeMore');

var trending = document.getElementById('trending');
var issue = document.getElementById('issue');
var enter = document.getElementById('enter');

var liList = document.querySelectorAll('li');
var startActive = document.querySelector('.active');
var className = '';
var currentDom = null;

var str='';

getUrlData(activeUrl, print);

function print(json){
    for(var i=0; i< json.data.length; i++){
        var coverImage=json.data[i].coverImage;
        var title=json.data[i].title;
        var path=json.data[i].path;
        var totalView=json.data[i].totalView;

        str+='<br><a href="https://1boon.kakao.com/' + path + '" "target="_blank">'+'<img src = '+ coverImage + ' width=200 height=200 border=0> <br>' + title + '<br> 조회수 : '+ totalView +'</a><br>';
    }

    document.getElementById('list').innerHTML=str;
}

function seeMore(event) {
    pageNum++;
    //console.log(pageNum);
    getUrlData(activeUrl+pageNum, print);
    lodingActive();
    
}
  
function lodingActive(event){
   list.appendChild(loading);
 }

function clickTrending(event){
   changeUrl(trendingUrl);
}

function clickIssue(event){
   changeUrl(issueUrl);
}

function clickEnter(event){
   changeUrl(enterUrl);
}

function changeUrl(url){
    str='';
    activeUrl=url;
    getUrlData(activeUrl, print);
}

function changeActive(event) {
    var target = event.currentTarget;
    pageNum=1;

    if(currentDom){
      currentDom.className =  currentDom.className.replace('active', '');
    }

    startActive.className = '';
    target.className = 'active';
    currentDom = target;
    lodingActive();
}

for(var i=0; i<liList.length; i++){
    liList[i].addEventListener('click', changeActive);
}

btn_seeMore.addEventListener('click', seeMore);
trending.addEventListener('click', clickTrending);
issue.addEventListener('click', clickIssue);
enter.addEventListener('click', clickEnter);