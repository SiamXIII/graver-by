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

    function setFullImage(image, dir) {
        var currentImage = new Image();
        direction = dir;
        currentImage.src = image.attributes['data-full'] ? image.attributes['data-full'].value : '/images/no_photo.png';
        currentImage.id = 'fullImage';

        $('#fullImageContainer .left.arrow').show();
        $('#fullImageContainer .right.arrow').show();
        if ($($(selectedImage)[0].parentElement.parentElement).is(':first-child')) {
            $('#fullImageContainer .left.arrow').hide();
        }

        if ($($(selectedImage)[0].parentElement.parentElement).is(':last-child')) {
            $('#fullImageContainer .right.arrow').hide();
        }

        currentImage.onload = function () {
            $('#fullImage').replaceWith(currentImage);
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
});
