(function (d) {
	var $canvas = document.createElement('canvas'),
		$body,
		ctx;

// Check to ensure that getContext is supported.

	if (!$canvas.getContext) { return; }

	var $body,
		ctx;

	ctx = $canvas.getContext('2d');

	$canvas.className = 'game';
	$canvas.width = 512;
	$canvas.height = 480;

	d.addEventListener('DOMContentLoaded', function () {
		$body = d.body || d.getElementsByTagName('body')[0];

		$body.appendChild($canvas);
	});
})(document);
