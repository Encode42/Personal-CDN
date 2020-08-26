/*
	MAIN SCRIPT
	VERSION 1.1

	The script that runs
	on every page.
*/

// Cloudflare thing
window.__cfRLUnblockHandlers = true;

// Align sub-stripes
var stripeMain     = $(".stripe-main");
var stripeMainSpan = $(".stripe-main span");
var stripeSub      = $(".stripe-sub");
var stripeSubDiv   = $(".stripe-sub");

$(function() {
	// Set the width of the stripes
	stripeSub.css("width", stripeMainSpan.width());

	// Automatically align them correctly
	stripeMain.prev().css("text-align", "right");
	stripeMain.next().css("text-align", "left");

	// Show the stripes
	fadeStripe();
});

/* ### Navbar Events ### */
// Toggle the navbar
var navbar       = $(".navbar");
var navbarButton = $(".navbar-button")
var navbarStatus = false;

function toggleSidebar(action) {
	if (action === undefined) navbarStatus = !navbarStatus;
	else navbarStatus = action;

	if (navbarStatus) {
		navbar.css("transform", "translateX(-250px)");
		navbarButton.css({ "transform": "rotate(180deg)", "fill": "var(--color-light)" });
	} else {
		navbar.removeAttr("style");
		navbarButton.removeAttr("style");
	}
}

// Toggle the navbar settings
$(".popup").click(function(event) {
	togglePopup($(event.target));
});

function togglePopup(popup, action) {
	var status = popup.data("open");

	if (action === undefined) status = !status;
	else status = action;

	if (status) {
		popup.css({ "opacity": "1", "visibility": "visible"})
		popup.data("open", true)
	} else {
		popup.css({ "opacity": "0", "visibility": "hidden" })
		popup.data("open", false)
	}
}

// Color the button on hover
var stripeSub = $(".stripe-sub");

$(document).ready(function() {
	navbar.hover(
		function() {
			navbarButton.css("fill", "var(--color-light)")

			if (navbarStatus) return;
			navbar.css("transform", "translateX(-25px)")
		},
		function() {
			if (navbarStatus) return;
			navbarButton.removeAttr("style");
			navbar.removeAttr("style");
		}
	)
});

// Don't fade in text after being on site
function fadeStripe() {
	if (document.referrer.includes("encode42.dev")) stripeSub.css({ "transition": "ease-in 0.05s", "opacity": "1" });
	else stripeSub.css("opacity", "1");
}