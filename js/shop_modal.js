$(document).ready(function(){

    $('.shop-item-img').click(function(){
        $('.shop-item-modal-wrapper').show();
        $('.shop-item-modal-wrapper').css('display', 'flex');
        $('.shop-item-modal-body').append('<iframe width="1280" height="720" src="https://www.youtube.com/embed/H0su1Kg6mrA?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>');
    });

    $('.shop-item-modal-wrapper i').click(function(){
        $('.shop-item-modal-wrapper').hide();
        $('.shop-item-modal-body').html('');
    });

    $('.shop-item-img-info').hover(function(){
        $('.shop-item-img img').css('filter', 'blur(2px)');
    }, function(){
        $('.shop-item-img img').css('filter', 'blur(0)');
    });

});
