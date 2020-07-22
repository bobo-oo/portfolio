
function home_sreen_size() {
	var window_height = $(document).height();
	var nav_height = $('#about .page_content').height();

	if (window_height<nav_height) {
		$('#home .page_content').css('height',nav_height+'px');
		$('#home').css('height',nav_height+'px');
	}
	else {
		$('#home .page_content').css('height','100vh');
	}
}
home_sreen_size()
$(window).resize(function() {
	home_sreen_size()
});

$('.nav-btn').click(function(e){
	nav_panel();
});
$('.nav_container .nav-item').click(function(e){
	nav_panel();
	$('.nav-item').removeClass('active');
	$(this).addClass('active');
});
$('.skillbar').each(
	function(index, element) {
		$($(this).find('.skillbar-value')).css('width',$(this).find('.skillbar-percent').data('percent'));
		$($(this).find('.skillbar-percent')).text($(this).find('.skillbar-percent').data('percent'))
	}
);
function nav_panel()
{
	$("#nav_content").fadeToggle('fast');
	$('.nav-btn .nav_icon').toggleClass('active');
}
$(window).scroll(function() {
	if($(this).scrollLeft()>$('#home').position().left+100){
		$('.home-btn').addClass('scroll');
		$('.nav-btn').addClass('scroll');
	}
	else {
		$('.home-btn').removeClass('scroll');
		$('.nav-btn').removeClass('scroll');
	}
});