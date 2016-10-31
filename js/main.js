(function (d) {
	var $canvas = document.createElement('canvas'),
		$body,

// Inconspicuous space to seperate DOM nodes and rest of code.

		ctx,
		levels;

// Check to ensure that getContext is supported.

	if (!$canvas.getContext) { return; }

	ctx = $canvas.getContext('2d');
	levels = {
		ruins: function () {

// Load the level here.
// Other levels will be added.

		}
	};

	$canvas.className = 'game';
	$canvas.width = 512;
	$canvas.height = 480;

	d.addEventListener('DOMContentLoaded', function () {
		$body = d.body || d.getElementsByTagName('body')[0];

		$body.appendChild($canvas);
	});
})(document);
