var col = document.getElementsByClassName('item')
col[0].style.backgroundColor = '#0005'
var colS = 0;

var interval = setInterval(function() {
    col[colS].style.backgroundColor = '#0005';
    colS = colS + 1;
    if(colS == 5) {colS = 0;}
    unsetCol(colS)
}, 1000)

function autoCol(colS) {
    setTimeout(interval, 500)
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
function unsetCol(colS) {
        for(let i = 0; i < col.length; i++) {
            col[i].style.backgroundColor = '#fff5';
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