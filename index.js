
$('#button').hover(function(){
    $('#bg').addClass('change');
    $('.triangle').addClass('anim');
    $(this).text("CLICK ME");
});

$('#button').mouseout(function(){
    $('#bg').removeClass('change');
    $('.triangle').removeClass('anim');
});

$('#button').click(function(){
    $('.triangle').addClass('test');
    $('#over').addClass('activate');
    $(this).addClass('leave');
});