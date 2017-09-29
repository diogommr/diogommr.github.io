
/* ========== CENTER H3 ========== */
$('h3').parent().css('width', '100vw');
$('h3').css( {'left': $(this).scrollLeft()} );

$(window).scroll(function(){
    $('h3').css({
        'left': $(this).scrollLeft()
    });
});

/* ========== SCROLL ========== */
/*
$(document).scrollLeft( 100 );
$(document).scrollTop( 100 );
*/

//$('body').append('<div class="heads-up"></div>');

var clicked;
var pos = {x: 0, y: 0};
var temp = {x: 0, y: 0};
var scroll = {x: 0, y: 0};

$(window).mousemove(function(e){
    $('.heads-up').css('left', (e.pageX + 10)+'px');
    $('.heads-up').css('top', (e.pageY + 10)+'px');
    $('.heads-up').html(e.pageX + ", " + e.pageY);

    if(!clicked){
        return false;
    }
    /*
    temp.y = scroll.y + (pos.y - e.pageY);
    $(document).scrollTop( temp.y );

    temp.x = scroll.x + (pos.x - e.pageX);
    $(document).scrollLeft( temp.x );
    */

    temp.x = scroll.x + (pos.x - e.pageX);
    temp.y = scroll.y + (pos.y - e.pageY);

    $(document).scrollTop( temp.y ).scrollLeft( temp.x * 3 );

});

$(window).mousedown(function(e){
    clicked = true;
    pos.x = e.pageX;
    pos.y = e.pageY;
    $('.content-cont').css('cursor', 'grabbing');
});

$(window).mouseup(function(){
    clicked = false;
    scroll.x = temp.x;
    scroll.y = temp.y;
    $('.content-cont').css('cursor', 'grab');
});
