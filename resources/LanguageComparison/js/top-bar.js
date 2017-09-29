
var tags = $('.language-tag');

checkActive();

function checkActive(){
    for (var i = 0; i < tags.length; i++){
		//alert($(tags[i]).attr('data-language'));
        if ($(tags[i]).hasClass('active-tag')){

            $('.' + $(tags[i]).attr('data-language') + '-col').show();

            if ($('.active-tag').length === 1){
                $('.' + $(tags[i]).attr('data-language') + '-col').css('border', 'none');
            }else{
                $('.' + $(tags[i]).attr('data-language') + '-col:not(:first-child)').css('border-left', '1px dotted var(--grey-3)');
            }
        }else{
            $('.' + $(tags[i]).attr('data-language') + '-col').hide();
        }
    }
}

$('.language-tag').click(function(){
    $(this).toggleClass('active-tag');
    checkActive();
});

// NAV BAR

var navbarShowing = false;

$('.nav-show-hide').click(function(){
    if(navbarShowing){
        $('.nav-bar').css('display', 'none');
        navbarShowing = false;
        $(this).html('<i class="fa fa-bars" aria-hidden="true"></i>');
    }else{
        $('.nav-bar').css('display', 'flex');
        navbarShowing = true;
        $(this).html('<i class="fa fa-times" aria-hidden="true"></i>');
    }
});

// ACTIVE AT START
/*
$('.language-tag').click();*/
