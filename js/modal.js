$(document).ready(function(){

    /* ========== RESOURCES MODAL ========== */

    $('.resource').click(function(){
        $('body, html').css('overflow', 'hidden');

        var resource_url = $(this).attr('data-url');
        var resource_name = $(this).children('p').text();

        $('.modal-wrapper').show();
        $('.modal-wrapper').css('display', 'flex');
        $('.modal-title').html(resource_name); /* Top Bar Resource Name */
        $('.modal-body').append('<iframe class="codepen-embed-iframe" src="'+ resource_url +'" style="border: 0; width: 100%; height: 100%;" allowfullscreen scrolling="no"></iframe>');
    });

    /* ========== PRODUCTS MODAL ========== */

    $('.shop-item-img').click(function(){
        $('body, html').css('overflow', 'hidden');

        var product_url = $(this).parent('.shop-item').attr('data-url');
        var product_name = $(this).next('p').text();

        $('.modal-wrapper').show();
        $('.modal-wrapper').css('display', 'flex');
        $('.modal-title').html(product_name); /* Top Bar Product Name */
        $('.modal-body').append('<iframe style="border: 0; width: 100%; height: 100%;" src="'+ product_url +'" frameborder="0" allowfullscreen></iframe>');
    });

    $('.shop-item-img-info').hover(function(){
        $('.shop-item-img img').css('filter', 'blur(2px)');
    }, function(){
        $('.shop-item-img img').css('filter', 'blur(0)');
    });

    /* ========== CLOSE BUTTON ========== */

    $('.close-button').click(function(){
        $('.modal-wrapper').hide();
        $('.modal-body').html('');
        $('body, html').css('overflow', 'auto');
    });


});
