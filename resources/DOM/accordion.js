var winHeight = window.innerHeight;
var accordionHeight = 60;
var numAccordions = 1;
var panelHeight = (winHeight - 160) - accordionHeight * numAccordions;

/* Initial State */
$('.active').next().css('max-height', $(window).height());

/* Accordion functionality */
$('.accordion:first-child').click(function(){
    $(this).siblings().removeClass("active");
    $('.accordion:first-child').next().show();
    $('.panel').css('max-height', 0);
    $(this).addClass("active");
    $(this).next().css('max-height', panelHeight);
});

$('.accordion:not(:first-child)').click(function(){
    $(this).siblings().removeClass("active");
    $('.accordion:first-child').next().hide();
    $('.panel').css('max-height', 0);
    $(this).addClass("active");
    $(this).next().css('max-height', panelHeight);
});

/* Tree Functionality */
$('.window-node').click(function(){
    $('.accordion:first-child').click();
    $('#doc-cont-window').siblings().addClass('hidden');
    $('#doc-cont-window').removeClass('hidden');
});
$('.screen-node').click(function(){
    $('.accordion:first-child').click();
    $('#doc-cont-screen').siblings().addClass('hidden');
    $('#doc-cont-screen').removeClass('hidden');
});
$('.navigator-node').click(function(){
    $('.accordion:first-child').click();
    $('#doc-cont-navigator').siblings().addClass('hidden');
    $('#doc-cont-navigator').removeClass('hidden');
});
$('.document-node').click(function(){
    $('.accordion:first-child').click();
    $('#doc-cont-document').siblings().addClass('hidden');
    $('#doc-cont-document').removeClass('hidden');
});
$('.history-node').click(function(){
    $('.accordion:first-child').click();
    $('#doc-cont-history').siblings().addClass('hidden');
    $('#doc-cont-history').removeClass('hidden');
});
$('.location-node').click(function(){
    $('.accordion:first-child').click();
    $('#doc-cont-location').siblings().addClass('hidden');
    $('#doc-cont-location').removeClass('hidden');
});
$('.element-node').click(function(){
    $('.accordion:first-child').click();
    $('#doc-cont-element').siblings().addClass('hidden');
    $('#doc-cont-element').removeClass('hidden');
});
$('.attribute-node').click(function(){
    $('.accordion:first-child').click();
    $('#doc-cont-attribute').siblings().addClass('hidden');
    $('#doc-cont-attribute').removeClass('hidden');
});
