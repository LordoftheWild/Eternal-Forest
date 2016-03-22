// This adds the play button.
window.onload = function () {
	var beta = document.createElement('sup'),
		play = document.createElement('a'),
		header = document.getElementsByClassName('page-header')[0];
	beta.innerHTML = 'ALPHA';
	play.href = '#';
	play.className = 'btn';
	play.innerHTML = 'Play';
	play.onclick = function () {
		game();
		return false;
	};
	play.appendChild(alpha);
	header.appendChild(play);
};
