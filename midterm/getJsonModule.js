function getUrlData(url, callback){
    fetch(url)
    .then(function(response){
        response.json().then(function(data){
            callback(data);
        });
    })
    .catch(function(err){
        console.log("Fetc Error :-S", err);
    });
}