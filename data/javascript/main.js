console.log("%cHello.", "color:#044bbb;font-size:45px;-webkit-text-stroke:1px #003289");
console.log("%cHow are you doing?", "color:#044bbb;font-size:30px;-webkit-text-stroke:1px #003289");
var date = new Date();



// Light/dark mode
function loadTheme(theme) {
	if (!localStorage.theme) localStorage.theme = "light";
	if (theme) localStorage.theme = theme;

	if (localStorage.theme === "dark") {
		$("html, a, p, .text-header, .text-normal, .navbar-links a, .navbar-links--current").addClass("theme-dark");
		$(".navbar-links--right *").removeClass("fa-moon").addClass("fa-sun theme-dark");
		$(".navbar-links--right").css("fill", "#eee").mouseover(function() {$(".navbar-links--right *").css("fill", "#eee")});
		$(".navbar-links--right").mouseout(function() {$(".navbar-links--right *").css("fill", "#eee")});
	} else if (localStorage.theme === "light") {
		$("html, a, p, .text-header, .text-normal, .navbar-links a, .navbar-links--current").removeClass("theme-dark");
		$(".navbar-links--right *").removeClass("fa-sun").addClass("fa-moon");
		$(".navbar-links--right").css("fill", "#222").mouseover(function() {$(".navbar-links--right *").css("fill", "#222")});
		$(".navbar-links--right").mouseout(function() {$(".navbar-links--right *").css("fill", "#eee")});
	}
};

function toggleTheme() {
	if (localStorage.theme === "dark") return loadTheme("light");
	if (localStorage.theme === "light") return loadTheme("dark");
}



// Navbar events
$(function() {	
	loadTheme();

	// Highlight current page
	currentPage = window.location.pathname.split("/")[1];

	$(`a[href^="${currentPage}"]`).addClass("navbar-links--current");
	
	// Minecraft server status
		MinecraftAPI.getServerStatus("mc.craftlight.org", (err, response) => {
			$("#craftlightMC").html(`CraftLight MC: ${response.online ? "<i class=\"fas fa-check\"></i>" : "<i class=\"fas fa-times\"></i>"} ${response.players.now}/${response.players.max}`);
		});
});

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