jQuery(document).ready(function ($) {
	var instagramUrl = 'https://api.instagram.com/v1/users/732051385/media/recent/?access_token=732051385.674061d.3cab369edb5147adbf8a8285f70c423e&count=60 ';

	function getNext(instaUrl) {
		$.ajax({
			url: instaUrl,
			type: 'GET',
			dataType: 'jsonp',
			success: function appendInsta(data, status, jqXHR) {
				if (data) {
					$.each(data.data, function (index, value) {
						$('#instagram').append('<li class="tile"><img src="' + value.images.low_resolution.url + '" data-full="' + value.images.standard_resolution.url + '"/></li>');
					})

					if (data.pagination.next_url) {
						getNext(data.pagination.next_url);
					}
					else {
						$('#instagram li.tile img').click(function () {
							$('#fullImage').attr('src', this.attributes['data-full'].value)
							$('#fullImageContainer').show('fast');
						});

						$('#fullImageContainer .underlay').click(function () {
							$('#fullImageContainer').hide('fast');
						})

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

	getNext(instagramUrl);
});