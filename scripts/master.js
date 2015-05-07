jQuery(document).ready(function ($) {

	// Using default configuration
	$('#carousel').carouFredSel();

	// Using custom configuration
	$('#carousel').carouFredSel({
		items: 1,
		direction: "left",
		scroll: {
			items: 1,
			fx: "fade",
			duration: 1000,
		}
	});
})

