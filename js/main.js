(function (w, d) {
	var $canvas = document.createElement('canvas'),
		$body,

// Inconspicuous space to seperate nodes and rest of code.

		ctx,
		keysDown,
		then,
		levels,
		level,
		background,
		char;

// Check to ensure that getContext is supported.

	if (!$canvas.getContext) { return; }

	function Background(name) {
		var that = this;
		this.ready = false;
		this.img = new Image();
		this.img.onload = function () {
			that.ready = true;
		}
		this.img.src = 'img/' + name + '.png';
	}

	function Sprite(name, dir, speed, ai) {
		var that = this;
		this.name = name;
		this.speed = speed || 256;
		this.ai = ai;
		this.dir = dir || 'down';
		this.x = 0;
		this.y = 0;
		this.ready = false;
		this.img = new Image();
		this.img.onload = function () {
			that.ready = true;
		}
		this.img.src = 'img/' + name + '-' + this.dir + '.png';
	}

	Sprite.prototype.moveTo = function (x, y) {
		this.x = x;
		this.y = y;
	};

	Sprite.prototype.setImg = function (name) {
		var that = this;
		this.img = new Image();
		this.img.onload = function () {
			that.ready = true;
		}
		this.img.src = 'img/' + name + '.png';
	}

	ctx = $canvas.getContext('2d')
	keysDown = {},
	levels = {
		ruins: {
			background: new Background('background-cropped'),
			sprites: {
				alex: new Sprite('alex')
			}
		}
	};

	function loadLevel(l) {
		level = levels[l];
		background = level.background;
		char = level.sprites.alex;
	}

	loadLevel('ruins');

	w.wow = background;

	$canvas.className = 'game';
	$canvas.width = 512;
	$canvas.height = 480;

	d.addEventListener('DOMContentLoaded', function () {
		$body = d.body || d.getElementsByTagName('body')[0];
		$body.appendChild($canvas);

		main();
	});

	w.addEventListener('keydown', function (e) {
		e.which = e.which || e.keyCode;
		keysDown[e.which] = true;
	});

	w.addEventListener('keyup', function (e) {
		e.which = e.which || e.keyCode;
		delete keysDown[e.which];
	});

	function update(modifier) {
		if (38 in keysDown) { // Player holding up
			char.y -= char.speed * modifier;
			char.dir = 'up';
		}
		if (40 in keysDown) { // Player holding down
			char.y += char.speed * modifier;
			char.dir = 'down';
		}
		if (37 in keysDown) { // Player holding left
			char.x -= char.speed * modifier;
			char.dir = 'left';
		}
		if (39 in keysDown) { // Player holding right
			char.x += char.speed * modifier;
			char.dir = 'right';
		}

		char.setImg(char.name + '-' + char.dir);
	}

	function render() {
		if (background.ready) {
			ctx.drawImage(background.img, 0, 0);
		}
		if (char.ready) {
			ctx.drawImage(char.img, char.x, char.y);
		}
	}

	function main() {
		var now = Date.now();
		var delta = now - then;

		update(delta / 1000);
		render();

		then = now;

		// Request to do this again ASAP
		requestAnimationFrame(main);
	}
})(window, document);
