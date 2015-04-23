jQuery(document).ready(function ($) {
	//main slider
	var options = {
		$AutoPlay: true,
		$BulletNavigatorOptions: {
			$Class: $JssorBulletNavigator$,
			$ChanceToShow: 2,
			$SpacingX: 10,
			$AutoCenter: 1
		}
	};
	var mainSlider = new $JssorSlider$('mainSlider', options);

	$('#logo').click(function () {
		window.location = '/index.html';
	})
})

