/*
	UTILS
	VERSION 1.0

	This is a helper script that
	contains a few useful tools.
*/

// Get parts of the URL (Hash, query, etc.)
function getURLPart(part) {
	if (part === "fragment") return location.hash;
}

// Make sure the viewport accounts for mobile
window.onresize = function() {document.body.height = window.innerHeight}
window.onresize();

// Always make content clickable
var __cfRLUnblockHandlers = 1 ;