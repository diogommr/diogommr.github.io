$(document).ready(function(){

	/* ========== WATCH REEL MODAL ========== */

    $('#reel-btn').click(function(){
        $('body, html').css('overflow', 'hidden');

        $('.modal-wrapper').show();
        $('.modal-wrapper').css('display', 'flex');
        $('.modal-title').html("Diogo Ribeiro 2017 Demo Reel"); /* Top Bar Resource Name */
        $('.modal-body').append('');
    });

    /* ========== RESOURCES MODAL ========== */

    $('.resource').click(function(){
        $('body, html').css('overflow', 'hidden');

        var resource_url = $(this).attr('data-url');
        var resource_name = $(this).attr('data-title');

        $('.modal-wrapper').show();
        $('.modal-wrapper').css('display', 'flex');
        $('.modal-title').html(resource_name); /* Top Bar Resource Name */
        $('.modal-body').append('<iframe class="resource-embed-iframe" src="'+ resource_url +'" style="border: 0; width: 100%; height: 100%;" allowfullscreen></iframe>');
    });

    /* ========== PRODUCTS MODAL ========== */

    $('.shop-item').click(function(){

		var product_url = $(this).attr('data-url');
		var product_name = $(this).attr('data-title');

		if (!$(this).hasClass("external")){
			$('body, html').css('overflow', 'hidden');

	        $('.modal-wrapper').show();
	        $('.modal-wrapper').css('display', 'flex');
	        $('.modal-title').html(product_name); /* Top Bar Product Name */
			$('.modal-body').append('<iframe class="resource-embed-iframe" src="'+ product_url +'" style="border: 0; width: 100%; height: 100%;" allowfullscreen></iframe>');
		}else{
			window.open(product_url);
		}
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
