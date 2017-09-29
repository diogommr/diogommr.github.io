$(document).ready(function(){

    $('#dom_reference').click(function(){
        $('.resource-project-modal-wrapper').show();
        $('.resource-project-modal-wrapper').css('display', 'flex');
        $('.resource-project-modal-body').append('<iframe class="codepen-embed-iframe" src="https://codepen.io/diogommr/embed/pReQaY?height=300&amp;theme-id=dark&amp;default-tab=result&amp;embed-version=2" style="border: 0; width: 100%; height: 100%;" allowfullscreen scrolling="no"></iframe>');
		//$('.resource-project-modal-body').append('<iframe class="" src="http://192.168.1.93:8000/resources/DOM/dom.html">no iframe</iframe>');
		//$('.resource-project-modal-body').append(' <h2 style="color:white;">Hello World</h2>');
        $('.close-button-codepen-bg').show(); // codepen logo below close button fix
    });

    $('.resource-project-modal-wrapper i').click(function(){
        $('.resource-project-modal-wrapper').hide();
        $('.resource-project-modal-body').html('');
    });


});
