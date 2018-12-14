
var newButton = document.getElementById('new');
var memoBox = document.getElementById('memo');
var saveButton = document.getElementById('save');
var downloadButton = document.getElementById('download');
var aboutButton = document.getElementById('about');
var aboutWindow=document.getElementById('aboutWindow');
var githubButton=document.getElementById('github');
var window=document.getElementById('window');
var fullScreenButton=document.getElementById('fullscreen');

var index=0;

var storageContent=localStorage.getItem('memo', memoBox.value);
memoBox.value=storageContent;

function New(event){
    memoBox.value='';
}

function Save(event){
    localStorage.setItem('memo', memoBox.value);
}

function Download(event){
    var titleInput = prompt('입력할 제목을 넣으시오.', '');
    var title=titleInput;

    var blob = new Blob([memoBox.value], {type: "text/plain;charset=utf-8"});
    saveAs(blob, title+".txt");
}

var flag=true;

function About(event){
    if(flag == true) {
        aboutWindow.style.visibility = 'visible';
        flag = false;
    }
    else if(flag == false) {
        aboutWindow.style.visibility = 'hidden';
        flag = true;
    }
}

function Github(event){
    window.open('https://github.com/dkrlto0819/front-end-start', 'newWindow');
}

var requestFullscreen = function (ele) {
	if (ele.requestFullscreen) {
		ele.requestFullscreen();
	} else if (ele.webkitRequestFullscreen) {
		ele.webkitRequestFullscreen();
	} else if (ele.mozRequestFullScreen) {
		ele.mozRequestFullScreen();
	} else if (ele.msRequestFullscreen) {
		ele.msRequestFullscreen();
	} else {
		console.log('Fullscreen API is not supported.');
	}
};


function FullScreen(event){
    event.preventDefault();
    requestFullscreen(document.documentElement);
}

// fsDocButton.addEventListener('click', function(e) {
// 	e.preventDefault();
// 	requestFullscreen(document.documentElement);
// });

newButton.addEventListener('click', New);
saveButton.addEventListener('click', Save);
downloadButton.addEventListener('click', Download);
aboutButton.addEventListener('click', About);
githubButton.addEventListener('click', Github);
fullScreenButton.addEventListener('click', FullScreen);


console.log('my-note app.js');