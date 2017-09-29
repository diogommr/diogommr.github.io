
/*/ ========== Tabs ========== /*/

$('.tablink').click(function(){
	// Get all elements with class="tabcontent" and hide them
	$('.tabcontent').hide();

    // Get all elements with class="tablink" and remove the class "active"
	$(this).siblings().removeClass('active');

    // Show the current tab, and add an "active" class to the button that opened the tab
    $('#' + $(this).attr('data-tab-name')).show();
    $(this).addClass('active');
});

$('.tab button:first-child').click();


/*/ ========== Filters ========== /*/

$('[data-filter-price=products-all]').click(function(){
	$('.shop-item').show();

	$(this).siblings().removeClass('active');
	$(this).addClass('active');
});

$('[data-filter-price=products-free]').click(function(){
	$('.shop-item[data-price=free]').show();
	$('.shop-item:not([data-price=free])').hide();

	$(this).siblings().removeClass('active');
	$(this).addClass('active');
});

$('[data-filter-price=products-paid]').click(function(){
	$('.shop-item[data-price=paid]').show();
	$('.shop-item:not([data-price=paid])').hide();

	$(this).siblings().removeClass('active');
	$(this).addClass('active');
});

$('[data-filter-price=products-all]').click();
