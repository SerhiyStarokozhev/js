$(document).ready(function() {
    
    $('.main_btna, .main_btn, nav a:eq(1)').on('click', () => {
		$('.overlay').fadeToggle('slow');
		$('.modal').slideDown("slow");
    });
    
	$('.close').on('click', () => {
		$('.overlay').fadeToggle('slow');
		$('.modal').slideUp("slow");
	});
});