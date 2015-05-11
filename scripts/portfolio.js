jQuery(document).ready(function ($) {
    $('#side-menu').hoverAccordion();

    $('#portfolio li.tile img').click(function () {
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

    $("div.pager").jPages({
        containerID: "portfolio",
        perPage: 20,
        previous: "",
        next: ""
    });

    function setFullImage(image, dir) {
        var currentImage = new Image();
        direction = dir;
        currentImage.src = image.attributes['data-full'].value;
        currentImage.id = 'fullImage';

        $('#fullImageContainer .left.arrow').show();
        $('#fullImageContainer .right.arrow').show();
        if ($($(selectedImage)[0].parentElement).is(':first-child')) {
            $('#fullImageContainer .left.arrow').hide();
        }

        if ($($(selectedImage)[0].parentElement).is(':last-child')) {
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
        selectedImage = $(selectedImage).parent('.tile').next('.tile').children('img')[0];
        $('#fullImage').animate({
            left: '-100%'
        }, 'fast', function () {
            setFullImage(selectedImage, '100%')
        });
    }

    function getPrevImage() {
        selectedImage = $(selectedImage).parent('.tile').prev('.tile').children('img')[0];
        $('#fullImage').animate({
            left: '100%'
        }, 'fast', function () {
            setFullImage(selectedImage, '-100%')
        });
    }
});