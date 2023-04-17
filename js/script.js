$('.col1').hover(function() {
    $('.col1').css('background-color', '#0001');
}, function() {
    $('.col1').css('background-color', '#0004');
});

$('.col2').hover(function() {
    $('.col2').css('background-color', '#0001');
}, function() {
    $('.col2').css('background-color', '#0004');
});

$('.col3').hover(function() {
    $('.col3').css('background-color', '#0001');
}, function() {
    $('.col3').css('background-color', '#0004');
});

$('.col4').hover(function() {
    $('.col4').css('background-color', '#0001');
}, function() {
    $('.col4').css('background-color', '#0004');
});

$('.col5').hover(function() {
    $('.col5').css('background-color', '#0001');
}, function() {
    $('.col5').css('background-color', '#0004');
});

// TROCAR IMAGENS DAS CLASSES
$(document).ready(function() {
    $('#bk').hover(function() {
        $('#imgclasse').attr('src', 'images/bladeknight.png');
    });
    $('#sm').hover(function() {
        $('#imgclasse').attr('src', 'images/soulmaster.png');
    });
    $('#ef').hover(function() {
        $('#imgclasse').attr('src', 'images/elfa.png');
    });
    $('#mg').hover(function() {
        $('#imgclasse').attr('src', 'images/magicgladiator.png');
    });
    $('#dl').hover(function() {
        $('#imgclasse').attr('src', 'images/darklord.png');
    });
    $('#sum').hover(function() {
        $('#imgclasse').attr('src', 'images/summoner.png');
    });
    $('#rf').hover(function() {
        $('#imgclasse').attr('src', 'images/ragefighter.png');
    });
    
});