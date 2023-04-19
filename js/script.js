var purecookieTitle="Cookies.",purecookieDesc="By using this website, you automatically accept that we use cookies.",purecookieLink='<a href="https://www.cssscript.com/privacy-policy/" target="_blank">What for?</a>',purecookieButton="Understood";function pureFadeIn(e,o){var i=document.getElementById(e);i.style.opacity=0,i.style.display=o||"block",function e(){var o=parseFloat(i.style.opacity);(o+=.02)>1||(i.style.opacity=o,requestAnimationFrame(e))}()}function pureFadeOut(e){var o=document.getElementById(e);o.style.opacity=1,function e(){(o.style.opacity-=.02)<0?o.style.display="none":requestAnimationFrame(e)}()}function setCookie(e,o,i){var t="";if(i){var n=new Date;n.setTime(n.getTime()+24*i*60*60*1e3),t="; expires="+n.toUTCString()}document.cookie=e+"="+(o||"")+t+"; path=/"}function getCookie(e){for(var o=e+"=",i=document.cookie.split(";"),t=0;t<i.length;t++){for(var n=i[t];" "==n.charAt(0);)n=n.substring(1,n.length);if(0==n.indexOf(o))return n.substring(o.length,n.length)}return null}function eraseCookie(e){document.cookie=e+"=; Max-Age=-99999999;"}function cookieConsent(){getCookie("purecookieDismiss")||(document.body.innerHTML+='<div class="cookieConsentContainer" id="cookieConsentContainer"><div class="cookieTitle"><a>'+purecookieTitle+'</a></div><div class="cookieDesc"><p>'+purecookieDesc+" "+purecookieLink+'</p></div><div class="cookieButton"><a onClick="purecookieDismiss();">'+purecookieButton+"</a></div></div>",pureFadeIn("cookieConsentContainer"))}function purecookieDismiss(){setCookie("purecookieDismiss","1",7),pureFadeOut("cookieConsentContainer")}window.onload=function(){cookieConsent()};

var col = document.getElementsByClassName('item')
col[0].style.backgroundColor = '#0005'
var colS = 0;

var interval = setInterval(function() {
    col[colS].style.backgroundColor = '#0005';
    colS = colS + 1;
    if(colS == 5) {colS = 0;}
    unsetCol(colS)
}, 1500)

function autoCol(colS) {
    setTimeout(interval, 1000)
}

/*function setCol(colS) {
    if (colS==0) {
        for(let i = 0; i < 2; i++) {
            col[0].style.backgroundColor = '#000';
        }
        unsetCol(colS);
        clearInterval(interval)
    }
    if (colS==1) {
        for(let i = 0; i < 2; i++) {
            col[1].style.backgroundColor = '#000';
        }
        unsetCol(colS);
    }
    if (colS==2) {
        for(let i = 0; i < 2; i++) {
            col[2].style.backgroundColor = '#000';
        }
        unsetCol(colS);
    }
    if (colS==3) {
        for(let i = 0; i < 2; i++) {
            col[3].style.backgroundColor = '#000';
        }
        unsetCol(colS);
    }
    if (colS==4) {
        for(let i = 0; i < 2; i++) {
            col[4].style.backgroundColor = '#000';
        }
        unsetCol(colS);
    }
}*/
var xy = window.matchMedia('(max-width: 800px)')
function unsetCol(colS) {
        for(let i = 0; i < col.length; i++) {
            col[i].style.backgroundColor = '#fff5';
            col[i].style.filter = 'opacity(50%)';
            if(xy.matches) {
                col[i].style.display = 'none';
            }
            col[colS].style.display = 'flex';
            col[colS].style.filter = 'opacity(100%)'
            col[colS].style.backgroundColor = '#0005';
        
    }
}

// TROCAR IMAGENS DAS CLASSES
$(document).ready(function() {
    $('#bk').hover(function() {
        $('#imgclasse').css('background-image', "url('images/bladeknight.png')");
    });
    $('#sm').hover(function() {
        $('#imgclasse').css('background-image', "url('images/soulmaster.png')");
    });
    $('#ef').hover(function() {
        $('#imgclasse').css('background-image', "url('images/elfa.png')");
    });
    $('#mg').hover(function() {
        $('#imgclasse').css('background-image', "url('images/magicgladiator.png')");
    });
    $('#dl').hover(function() {
        $('#imgclasse').css('background-image', "url('images/darklord.png')");
    });
    $('#sum').hover(function() {
        $('#imgclasse').css('background-image', "url('images/summoner.png')");
    });
    $('#rf').hover(function() {
        $('#imgclasse').css('background-image', "url('images/ragefighter.png')");
    });
    
});