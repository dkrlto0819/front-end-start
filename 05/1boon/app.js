console.log('1boon')

var url='http://1boon.kakao.com/ch/enter.json';

getUrlData(url, print);

function print(json){
    console.log(json);

    var str='';

    for(var i=0; i< json.data.length; i++){
        var title=json.data[i].title;
        var path=json.data[i].path;
        str+='<a href="https://1boon.kakao.com/">'+path+'"target="_blank">'+title+'</a><br>';
    }

    document.getElementById('wrap').innerHTML=str;
}

function getUrlData(url, callback){
    fetch(url)
    .then(function(response){
        response.json().then(function(data){
            console.log('json data:', data);
            callback(data);
        });
    })
    .catch(function(err){
        console.log("Fetc Error :-S", err);
    });
}