
$('.tab-content').hide();
$('.tab-content:nth-child(2)').show();

function openTab(event, cls){
	var clickedBtn = event.target;
	// hide content
	$('.tab-btn').removeClass('active');
	$('.tab-content').hide();
	// show content
	if( $(clickedBtn).hasClass('tab-btn-code') ){
		$('.tab-btn-code').addClass('active');
	}else{
		$('.tab-btn-show').addClass('active');
	}
	// console.log(String(cls));
	$('.' + String(cls)).show();
}

$('.tab-btn:nth-child(1)').click(); // Tab por defeito
