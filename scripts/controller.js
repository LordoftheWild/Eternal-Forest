// This adds a change in image for the play button
(function (w, d) {
	w.onload = function () {
		var play = d.querySelector('img[alt="Play Button"]');
		play.onmouseenter = function () {
			this.src = 'images/play-hover.png';
		};
		play.onmouseleave = function () {
			this.src = 'images/play.png';
		};
		play.onclick = game;
	};
})(window, document);
