

new gnMenu( document.getElementById( 'gn-menu' ) );


$(document).ready(function() {
	$('.carousel').carousel({
		interval: 12000,
		cycle: true
	});
});

$("#contact").popover(
{
	placement:'bottom',
	html: true,
	content:'<address><a href="mailto:#">sean@example.com</a></address>'
}
);

