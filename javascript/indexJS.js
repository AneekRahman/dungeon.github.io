// THE TOP SEARCH BOX STARTS

var searchInput=document.getElementsByName('topSearch')[0];
var searchBox=document.getElementById('topSearch');

function topSearchFocused(){
    searchBox.style.backgroundColor="rgba(255,255,255,0.4)"
}
function topSearchBlurred(){
    searchBox.style.backgroundColor="transparent"
}

searchInput.onfocus=topSearchFocused;
searchInput.onblur=topSearchBlurred;

// THE TOP SEARCH BOX ENDS


// THE TOP LOGIN STARTS

var userBtn=document.getElementById('userBtn');
var loginBox=document.getElementById('loginExpand');
var loginShowHideTrigger=0;

function loginBoxShow(){
    loginBox.style.display='Block';
    loginShowHideTrigger=1;
}
function loginBoxHide(){
    loginBox.style.display='none';
    loginShowHideTrigger=0;
}
function loginShowHide(){
    if(loginShowHideTrigger==0){
        loginBoxShow();
    }else{
        loginBoxHide();
    }
}

userBtn.onclick=loginShowHide;

// THE TOP LOGIN ENDS