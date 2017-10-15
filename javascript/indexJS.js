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

// THE CATEGORY TAB STARTS

var catBox=document.getElementById('catHolder');
var catIcon=document.getElementById('catIcon');
var catTrigger=0;

function catBoxShow(){
    catBox.style.width="200px";
    catTrigger=1;
}
function catBoxHide(){
    catBox.style.width="0";
    catTrigger=0;
}
function catShowHide(){
    if(catTrigger==0){
        catBoxShow();
    }else{
        catBoxHide();
    }
}

catIcon.onclick=catShowHide;
// THE CATEGORY TAB ENDS


// THE ON SCROLL TOP BAR STARTS

var logo=document.getElementById('logo');
var logoHolder=document.getElementsByClassName('logoHolder')[0];
var catExpandIconBox=document.getElementsByClassName('catExpandIcon')[0];
var logoBar=document.getElementById('logoBar');
var topSearchBox=document.getElementById('topSearch');
var navBar=document.getElementsByClassName('navBar')[0];
var loginIconHolder=document.getElementById('loginBox');

function scrollOn(){
    logo.style.width="150px";
    logoBar.style.height="60px";
    logoBar.style.backgroundImage="linear-gradient(rgba(138, 0, 255,.6),rgba(88, 0, 163,.7))";
    logoHolder.style.margin="10px 5px 0 0";
    catIcon.style.fontSize="24px";
    catExpandIconBox.style.margin="20px 20px 0 0";
    topSearchBox.style.padding="18px 10px 10px";
    navBar.style.margin="14px 0 0 5px";
    loginIconHolder.style.margin="20px 0 0 20px";
    userBtn.style.fontSize="24px";
    catBox.style.marginTop="60px";
    catBox.style.height="calc(100% - 60px)";
    loginBox.style.marginLeft="-63px";
}
function scrollOff(){
    logo.style.width="250px";
    logoBar.style.height="100px";
    logoBar.style.backgroundImage="linear-gradient(rgba(138, 0, 255,.8),rgba(88, 0, 163,.9))";
    logoHolder.style.margin="25px 0 0 0";
    catIcon.style.fontSize="30px";
    catExpandIconBox.style.margin="53px 20px 0 0";
    topSearchBox.style.padding="53px 10px 15px";
    navBar.style.margin="50px 0 0 5px";
    loginIconHolder.style.margin="53px 0 0 20px";
    userBtn.style.fontSize="30px";
    catBox.style.marginTop="100px";
    catBox.style.height="calc(100% - 100px)";
    loginBox.style.marginLeft="-60px";
}
function scrollToggle(){
    if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
        scrollOn();
    }else{
        scrollOff();
    }
}
window.onscroll=scrollToggle;
// THE ON SCROLL TOP BAR ENDS