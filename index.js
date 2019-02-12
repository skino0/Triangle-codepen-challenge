
$('#button').hover(function(){
        $('#bg').addClass('change');
        $('.triangle').addClass('anim');

});

$('#button').mouseout(function(){
    $('#bg').removeClass('change');
    $('.triangle').removeClass('anim');

});