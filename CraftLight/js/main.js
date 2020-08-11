console.log("%cHello.", "color:#044bbb;font-size:45px;-webkit-text-stroke:1px #003289");
console.log("%cHow are you doing?", "color:#044bbb;font-size:30px;-webkit-text-stroke:1px #003289");
var date = new Date();

// Light/dark mode
function loadTheme(theme) {
	if (!localStorage.theme) localStorage.theme = "light";
	if (theme) localStorage.theme = theme;

	var html        = $("html");
	var navbarLinks = $(".navbar-links--right");
	var navbarIcon  = $(".navbar-links--right *")

	if (localStorage.theme === "dark") {
		html.removeClass("theme-light").addClass("theme-dark")
		navbarIcon.removeClass("fa-moon").addClass("fa-sun theme-dark");
	} else if (localStorage.theme === "light") {
		html.removeClass("theme-dark").addClass("theme-light")
		navbarIcon.removeClass("fa-sun").addClass("fa-moon");
	}

	navbarLinks.mouseover(function() {$(".navbar-links--right *").css("fill", "#222")});
	navbarLinks.mouseout(function()  {$(".navbar-links--right *").css("fill", "#eee")});
};

function toggleTheme() {
	if (localStorage.theme === "dark")  return loadTheme("light");
	if (localStorage.theme === "light") return loadTheme("dark");
}

/* ### Navbar Events ### */
// Toggle the navbar
$(function() {	
	loadTheme();

	// Highlight current page
	currentPage = window.location.pathname.split("/")[1];
	$("a:contains('" + currentPage.charAt(0).toUpperCase() + currentPage.slice(1) + "')").addClass("navbar-links--current");

	// Make first status active
	$(".navbar-status p:first").addClass("active");
});

// Status box
function changeStatus(direction) {
	if (direction === "right") $(".navbar-status p.active").removeClass("active").next().addClass("active");
	if (direction === "left") $(".navbar-status p.active").removeClass("active").prev().addClass("active");
	
	if ($(".navbar-status p.active").prev().is("p")) $(".navbar-status a:first").removeClass("disabled");
	else $(".navbar-status a:first").addClass("disabled");

	if ($(".navbar-status p.active").next().is("p")) $(".navbar-status a:last").removeClass("disabled");
	else $(".navbar-status a:last").addClass("disabled");
}

// Don't let mobile resize
document.ontouchmove = function(event) {event.preventDefault()}