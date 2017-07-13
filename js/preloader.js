document.body.onload = function () {
	setTimeout(function () {
		var preloader = document.getElementById('prel');
		if(!preloader.classList.contains('done')) {
			preloader.classList.add('done');
		}
	}, 3000);
};