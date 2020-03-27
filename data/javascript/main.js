console.log("%cHello.", "color:#044bbb;font-size:45px;-webkit-text-stroke:1px #003289");
console.log("%cHow are you doing?", "color:#044bbb;font-size:30px;-webkit-text-stroke:1px #003289");

// Global variables
var theme = localStorage.theme;
var date = new Date();

// Light/dark mode

if (theme === "dark") $("html").addClass("theme-dark");

function loadTheme() {		
	theme = localStorage.theme;
	if (theme === "dark") {
		$("html, a, p, .text-header, .text-normal, .navbar-links a, .navbar-links--current").addClass("theme-dark");
		$(".navbar-links--right *").removeClass("fa-moon").addClass("fa-sun theme-dark");
		$(".navbar-links--right").mouseover(function() {$(".navbar-links--right *").css("fill", "#eee")});
		$(".navbar-links--right").mouseout(function() {$(".navbar-links--right *").css("fill", "#eee")});
	} else if (theme === "light") {
		$("html, a, p, .text-header, .text-normal, .navbar-links a, .navbar-links--current").removeClass("theme-dark");
		$(".navbar-links--right *").removeClass("fa-sun").addClass("fa-moon");
		$(".navbar-links--right").mouseover(function() {$(".navbar-links--right *").css("fill", "#222")});
		$(".navbar-links--right").mouseout(function() {$(".navbar-links--right *").css("fill", "#eee")});
	} else localStorage.theme = "light";
};

function toggleTheme() {
	if (theme === "dark") {
		localStorage.theme = "light"
		return loadTheme();
	};
	if (theme === "light") {
		localStorage.theme = "dark"
		return loadTheme();
	};
}

// Navbar events
let craftlight, craftlightmc, cftli = false;
$(function() {	
	// Highlight current page
	$(".navbar-links a").each(function() {
		if ($(this).prop("href") == window.location.href.replace(/#.*/g, "")) $(this).addClass("navbar-links--current");
	});
	
	// Load the theme
	loadTheme();
	
	// Minecraft server status
	try {
		MinecraftAPI.getServerStatus("mc.craftlight.org", function(err, response) {
			if (err) return $("#craftlightMC p").first().html("Error getting status.");
			$("#craftlightMC").html("CraftLight MC: " + (response.online ? "<i class=\"fas fa-check\"></i>" : "<i class=\"fas fa-times\"></i>") + " " + response.players.now + "/" + response.players.max);
		});
	} catch (err) {console.error(err)}
});

function changeStatus(direction) {
	if (direction === "right") $(".navbar-status p.active").removeClass("active").next().addClass("active");
	if (direction === "left") $(".navbar-status p.active").removeClass("active").prev().addClass("active");
	
	if ($(".navbar-status p.active").prev().is("p")) $(".navbar-status a:first").removeClass("disabled");
	else $(".navbar-status a:first").addClass("disabled");

	if ($(".navbar-status p.active").next().is("p")) $(".navbar-status a:last").removeClass("disabled");
	else $(".navbar-status a:last").addClass("disabled");
}

// Footer events
$(function() {
	// Load footer
	$("#footer").load("/footer.html", function() {
		$("#footer-copyright").html("© " + date.getFullYear() + " CraftLight Network. ")
		loadTheme();
	});
});

// Don't let mobile resize
document.ontouchmove = function(event) {event.preventDefault()}