$(document).ready(function() {
	setTimeout(function(){$("#loading_page").fadeOut('slow');},6000);
	$("a").click(function(){
	  var scroll = $(this).attr("href");
	  $("body").animate({scrollTop: $(scroll).offset().top}, 1500);
	  return false;
	});
});

