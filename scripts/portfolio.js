jQuery(document).ready(function ($) {
	var instagramUrl = 'https://api.instagram.com/v1/users/732051385/media/recent/?access_token=732051385.674061d.3cab369edb5147adbf8a8285f70c423e&count=60 ';

	var selectedImage = 0;

	function getNext(instaUrl) {
		$.ajax({
			url: instaUrl,
			type: 'GET',
			dataType: 'jsonp',
			success: function appendInsta(data, status, jqXHR) {
				if (data) {
					$.each(data.data, function (index, value) {
						$('#instagram').append('<li class="tile"><img src="' + value.images.low_resolution.url
							+ '" data-full="' + value.images.standard_resolution.url
							+ '" data-type="' + value.type
							+ '" data-link="' + value.link
							+ '" data-tags="' + createTags(value.tags) + '" /></li>');
					})

					if (data.pagination.next_url) {
						getNext(data.pagination.next_url);
					}
					else {
						$('#instagram li.tile img').click(function () {
							selectedImage = this;
							if (this.attributes['data-type'].value == 'image') {
								settFullImage(this);
							}
							if (this.attributes['data-type'].value == 'video') {
								window.open(this.attributes['data-link'].value, 'blank');
							}
						});

						$('#fullImageContainer .right.arrow').click(getNextImage);

						$('#fullImageContainer .left.arrow').click(getPrevImage);

						$('#fullImageContainer .underlay').click(function () {
							$('#fullImageContainer').hide('fast');
						})

						$('#fullImageContainer .close-button').click(function () {
						    $('#fullImageContainer').hide('fast');
						})

						$(document).keyup(function(e) {
						    if (e.keyCode == 27) {
						        $('#fullImageContainer').hide('fast');
						    }
						});

						$("div.pager").jPages({
							containerID: "instagram",
							perPage: 25,
							previous: "",
							next: ""
						});
					}
				}
			}
		});
	}

	function createTags(tags) {
		var hashtags = '';
		$.each(tags, function (index, value) {
			hashtags += '#' + value + ' ';
		})

		return hashtags;
	}

	function settFullImage(image) {
		var currentImage = new Image();
		currentImage.src = image.attributes['data-full'].value;
		currentImage.id = 'fullImage';
		$('#description').text(image.attributes['data-tags'].value);

		currentImage.onload = function () {
			$('#fullImage').replaceWith(currentImage);
			$('#fullImageContainer').show('fast');
		};
	}

	function getNextImage() {
		selectedImage = $(selectedImage).parent('.tile').next('.tile').children('img')[0];
		settFullImage(selectedImage);
	}

	function getPrevImage() {
		selectedImage = $(selectedImage).parent('.tile').prev('.tile').children('img')[0];
		settFullImage(selectedImage);
	}

	getNext(instagramUrl);
});