// Navbar
$(function() {
	// Highlight current page
	currentPage = window.location.pathname.split("/")[1];
	$("a:contains('" + currentPage.charAt(0).toUpperCase() + currentPage.slice(1) + "')").addClass("navbar-links--current");
});

// Hide Logo
$(document).scroll(function() {
	var span = $("#navbar-title span");
	var text = $("#navbar-title-text");
	var title = $("#navbar-title");
	var img = $("#navbar img");

	if ($(window).scrollTop() !== 0) {
		span.css({"transition": "0.25s"});
		text.css({"opacity": "0"});
		title.css({"height": "40px", "box-shadow": "none"});
		img.css({"transform": "translateY(-5px)"});
		
	} else {
		span.css({"transition": "2s"});
		text.css({"opacity": "1"});
		title.css({"height": "100px", "box-shadow": "0 0 5px black"});
		img.css({"transform": "translateY(0)"});
	}
});