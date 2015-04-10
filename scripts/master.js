jQuery(document).ready(function ($) {
	//main slider
	var _CaptionTransitions = [{
		$Duration: 900,
		$Clip: 1,
		$Move: true,
		$Easing: {
			$Clip: $JssorEasing$.$EaseInOutCubic
		}
	}];

	var options = {
		$AutoPlay: true,
		$BulletNavigatorOptions: {
			$Class: $JssorBulletNavigator$,
			$ChanceToShow: 2,
			$SpacingX: 10,
			$AutoCenter: 1
		},
		$CaptionSliderOptions: {
			$Class: $JssorCaptionSlider$,
			$CaptionTransitions: _CaptionTransitions,
			$PlayInMode: 1,
			$PlayOutMode: 3
		}
	};
	var mainSlider = new $JssorSlider$('mainSlider', options);
})

//catalog
$('#catalog').slimmenu(
{
	resizeWidth: '1200',
	collapserTitle: 'Main Menu',
	animSpeed: 'medium',
	easingEffect: null,
	indentChildren: false,
	childrenIndenter: '&nbsp;'
});