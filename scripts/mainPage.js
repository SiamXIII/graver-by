﻿jQuery(document).ready(function ($) {
	//popular slider
	var popularOptions = {
		$AutoPlay: true,
		$AutoPlayInterval: 15000,
		$DragOrientation: 2,
		$PlayOrientation: 2,
		$ArrowNavigatorOptions: {                       //[Optional] Options to specify and enable arrow navigator or not
			$Class: $JssorArrowNavigator$,              //[Requried] Class to create arrow navigator instance
			$ChanceToShow: 2,                               //[Required] 0 Never, 1 Mouse Over, 2 Always
			$AutoCenter: 0,                                 //[Optional] Auto center arrows in parent container, 0 No, 1 Horizontal, 2 Vertical, 3 Both, default value is 0
			$Steps: 1                                       //[Optional] Steps to go for each navigation request, default value is 1
		}
	};
	var popularSlider = new $JssorSlider$('popularSlider', popularOptions);

	//partners
	var partnersCarouselOptions = {
		$AutoPlay: true,                                    //[Optional] Whether to auto play, to enable slideshow, this option must be set to true, default value is false
		$AutoPlaySteps: 4,                                  //[Optional] Steps to go for each navigation request (this options applys only when slideshow disabled), the default value is 1
		$AutoPlayInterval: 4000,                            //[Optional] Interval (in milliseconds) to go for next slide since the previous stopped if the slider is auto playing, default value is 3000
		$PauseOnHover: 1,                               //[Optional] Whether to pause when mouse over if a slider is auto playing, 0 no pause, 1 pause for desktop, 2 pause for touch device, 3 pause for desktop and touch device, 4 freeze for desktop, 8 freeze for touch device, 12 freeze for desktop and touch device, default value is 1

		$ArrowKeyNavigation: true,   			            //[Optional] Allows keyboard (arrow key) navigation or not, default value is false
		$SlideDuration: 660,                                //[Optional] Specifies default duration (swipe) for slide in milliseconds, default value is 500
		$MinDragOffsetToSlide: 20,                          //[Optional] Minimum drag offset to trigger slide , default value is 20
		$SlideWidth: 104,                                   //[Optional] Width of every slide in pixels, default value is width of 'slides' container
		$SlideHeight: 40,                                //[Optional] Height of every slide in pixels, default value is height of 'slides' container
		$SlideSpacing: 70, 					                //[Optional] Space between each slide in pixels, default value is 0
		$DisplayPieces: 7,                                  //[Optional] Number of pieces to display (the slideshow would be disabled if the value is set to greater than 1), the default value is 1
		$ParkingPosition: 0,                              //[Optional] The offset position to park slide (this options applys only when slideshow disabled), default value is 0.
		$UISearchMode: 1,                                   //[Optional] The way (0 parellel, 1 recursive, default value is 1) to search UI components (slides container, loading screen, navigator container, arrow navigator container, thumbnail navigator container etc).
		$PlayOrientation: 1,                                //[Optional] Orientation to play slide (for auto play, navigation), 1 horizental, 2 vertical, 5 horizental reverse, 6 vertical reverse, default value is 1
		$DragOrientation: 1,                                //[Optional] Orientation to drag slide, 0 no drag, 1 horizental, 2 vertical, 3 either, default value is 1 (Note that the $DragOrientation should be the same as $PlayOrientation when $DisplayPieces is greater than 1, or parking position is not 0)

		$ArrowNavigatorOptions: {
			$Class: $JssorArrowNavigator$,              //[Requried] Class to create arrow navigator instance
			$ChanceToShow: 1,                               //[Required] 0 Never, 1 Mouse Over, 2 Always
			$AutoCenter: 2,                                 //[Optional] Auto center navigator in parent container, 0 None, 1 Horizontal, 2 Vertical, 3 Both, default value is 0
			$Steps: 4                                       //[Optional] Steps to go for each navigation request, default value is 1
		}
	};

	var partnersCarousel = new $JssorSlider$("partnersCarousel", partnersCarouselOptions);

	$('.partner').click(function () {
		window.location = this.attributes["href"].value;
	});

	var map;
	function initialize() {
		var mapOptions = {
			zoom: 17,
			center: new google.maps.LatLng(53.91555797, 27.56966678)
		};
		map = new google.maps.Map(document.getElementById('mapCanvas'),
            mapOptions);

		var marker = new google.maps.Marker({
			position: new google.maps.LatLng(53.91555797, 27.56966678),
			map: map,
			labelContent: "Гравер 123",
			labelAnchor: new google.maps.Point(22, 0),
			labelClass: "labels", // the CSS class for the label
			labelStyle: { opacity: 0.75 }
		});

		// Disable scroll zooming and bind back the click event
		var onMapMouseleaveHandler = function (event) {
			var that = $(this);

			that.on('click', onMapClickHandler);
			that.off('mouseleave', onMapMouseleaveHandler);
			that.find('.map').css("pointer-events", "none");
		}

		var onMapClickHandler = function (event) {
			var that = $(this);

			// Disable the click handler until the user leaves the map area
			that.off('click', onMapClickHandler);

			// Enable scrolling zoom
			that.find('.map').css("pointer-events", "auto");

			// Handle the mouse leave event
			that.on('mouseleave', onMapMouseleaveHandler);
		}

		// Enable map zooming with mouse scroll when the user clicks the map
		$('.map-wrapper').on('click', onMapClickHandler);
	}

	google.maps.event.addDomListener(window, 'load', initialize);
});