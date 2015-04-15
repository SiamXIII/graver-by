jQuery(document).ready(function ($) {
	$.ajax({
		url: 'https://api.instagram.com/v1/users/732051385/media/recent/?access_token=732051385.674061d.3cab369edb5147adbf8a8285f70c423e&count=60',
		type: 'GET',
		dataType: 'jsonp',
		success: function (data, status, jqXHR) {
			if (data) {
				$.each(data.data, function (index, value) {
					$('#instagram').append('<li class="tile"><img src="' + value.images.low_resolution.url + '" data-full="' + value.images.standard_resolution.url + '"/></li>');
				})
			}

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
	})
});