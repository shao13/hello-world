/*smooth scroll*/
$(document).ready(function() {
	$("a").click(function(){
	  var scroll = $(this).attr("href");
	  $("body").animate({scrollTop: $(scroll).offset().top}, 1500);
	  return false;
	});
});
