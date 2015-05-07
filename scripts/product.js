jQuery(document).ready(function () {
    $('.samples .tab-control > .tab').click(function () {
        var index = $(this).index('.samples .tab-control .tab');

        $('.samples .page').removeClass('active');
        $('.samples .tab-control .tab').removeClass('active');
        $($('.samples .page')[index]).addClass('active');
        $($('.samples .tab-control .tab')[index]).addClass('active');
    })
})

jQuery(document).ready(function ($) {
    var selectedImage = 0;
    var direction;

    function setMeasures(width, height, ratio) {
        if (height > $(window).height()) {
            $('#fullImageContainer .image-wrapper').height($(window).height() * 0.8);
            $('#fullImageContainer .image-wrapper').width($(window).height() * 0.8 * ratio);
        }
        if ($($('#fullImageContainer .image-wrapper')[0]).width() > $(window).width()) {
            $('#fullImageContainer .image-wrapper').width($(window).width() * 0.8);
            $('#fullImageContainer .image-wrapper').height($(window).width() * 0.8 / ratio);
        }
        $('#fullImageContainer .image-wrapper').css('top', $('#fullImageContainer').height() * 0.1);
    }

    function setFullImage(image, dir) {
        var currentImage = new Image();
        direction = dir;
        currentImage.src = image.attributes['data-full'] ? image.attributes['data-full'].value : '/images/no_photo.png';
        currentImage.id = 'fullImage';

        $('#fullImageContainer .left.arrow').show();
        $('#fullImageContainer .right.arrow').show();
        if ($($(selectedImage)[0].parentElement.parentElement)
            .index() == 1) {
            $('#fullImageContainer .left.arrow').hide();
        }

        if ($($(selectedImage)[0].parentElement.parentElement).is(':last-child')) {
            $('#fullImageContainer .right.arrow').hide();
        }

        currentImage.onload = function () {
            $('#fullImage').replaceWith(currentImage);
            //setMeasures($(currentImage)[0].width, $(currentImage)[0].height, $(currentImage)[0].width / $(currentImage)[0].height);
            $('#fullImage').css({ 'left': direction });
            $('#fullImageContainer').show('fast');
            $('#fullImage').animate({
                left: 0
            }, 'fast')
        };
    }

    function getNextImage() {
        selectedImage = $(selectedImage).parent('.image-wrapper').parent('.item').next('.item').children('.image-wrapper').children('img')[0];
        $('#fullImage').animate({
            left: '-100%'
        }, 'fast', function () {
            setFullImage(selectedImage, '100%')
        });
    }

    function getPrevImage() {
        selectedImage = $(selectedImage).parent('.image-wrapper').parent('.item').prev('.item').children('.image-wrapper').children('img')[0];
        $('#fullImage').animate({
            left: '100%'
        }, 'fast', function () {
            setFullImage(selectedImage, '-100%')
        });
    }

    $('.samples .item img').click(function () {
        selectedImage = this;

        setFullImage(this);
    });

    $('#fullImageContainer .right.arrow').click(getNextImage);

    $('#fullImageContainer .left.arrow').click(getPrevImage);

    $('#fullImageContainer .underlay').click(function () {
        $('#fullImageContainer').hide('fast');
    })

    $('#fullImageContainer .close-button').click(function () {
        $('#fullImageContainer').hide('fast');
    })

    $(document).keyup(function (e) {
        if (e.keyCode == 27) {
            $('#fullImageContainer').hide('fast');
        }
    });

    //samples
    var samplesCarouselOptions = {
        $AutoPlay: false,                                    //[Optional] Whether to auto play, to enable slideshow, this option must be set to true, default value is false
        $AutoPlaySteps: 7,                                  //[Optional] Steps to go for each navigation request (this options applys only when slideshow disabled), the default value is 1
        $AutoPlayInterval: 4000,                            //[Optional] Interval (in milliseconds) to go for next slide since the previous stopped if the slider is auto playing, default value is 3000
        $PauseOnHover: 1,                               //[Optional] Whether to pause when mouse over if a slider is auto playing, 0 no pause, 1 pause for desktop, 2 pause for touch device, 3 pause for desktop and touch device, 4 freeze for desktop, 8 freeze for touch device, 12 freeze for desktop and touch device, default value is 1
        $Loop: 0,
        $ArrowKeyNavigation: true,   			            //[Optional] Allows keyboard (arrow key) navigation or not, default value is false
        $SlideDuration: 100,                                //[Optional] Specifies default duration (swipe) for slide in milliseconds, default value is 500
        $MinDragOffsetToSlide: 20,                          //[Optional] Minimum drag offset to trigger slide , default value is 20
        $SlideWidth: 171,                                   //[Optional] Width of every slide in pixels, default value is width of 'slides' container
        $SlideSpacing: 0, 					                //[Optional] Space between each slide in pixels, default value is 0
        $DisplayPieces: 7,                                  //[Optional] Number of pieces to display (the slideshow would be disabled if the value is set to greater than 1), the default value is 1
        $ParkingPosition: 0,                              //[Optional] The offset position to park slide (this options applys only when slideshow disabled), default value is 0.
        $UISearchMode: 1,                                   //[Optional] The way (0 parellel, 1 recursive, default value is 1) to search UI components (slides container, loading screen, navigator container, arrow navigator container, thumbnail navigator container etc).
        $PlayOrientation: 1,                                //[Optional] Orientation to play slide (for auto play, navigation), 1 horizental, 2 vertical, 5 horizental reverse, 6 vertical reverse, default value is 1
        $DragOrientation: 1,                                //[Optional] Orientation to drag slide, 0 no drag, 1 horizental, 2 vertical, 3 either, default value is 1 (Note that the $DragOrientation should be the same as $PlayOrientation when $DisplayPieces is greater than 1, or parking position is not 0)

        $ArrowNavigatorOptions: {
            $Class: $JssorArrowNavigator$,              //[Requried] Class to create arrow navigator instance
            $ChanceToShow: 2,                               //[Required] 0 Never, 1 Mouse Over, 2 Always
            $Steps: 7                                       //[Optional] Steps to go for each navigation request, default value is 1
        }
    };

    $('.samples .page > div > div').css({
        cursor: 'pointer',
        position: 'absolute',
        overflow: 'hidden',
        left: 10,
        top: 0,
        width: 1200,
        height: 194
    });

    var carousels = [];
    $('.samples .page > div').each(function (index) {
        this.id = 'samplesCarousel-' + index;
        $(this).css({ position: 'relative', top: 0, left: -10, width: 1220, height: 194 });
        var samplesCarousel = new $JssorSlider$(this.id, samplesCarouselOptions);

        carousels.push(samplesCarousel);
    });
});
