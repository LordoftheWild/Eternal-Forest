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

	$canvas.className = 'game';
	$canvas.width = 512;
	$canvas.height = 384;

	function Background(name) {
		var that = this;
		this.ready = false;
		this.img = new Image();
		this.img.onload = function () {
			that.ready = true;
		};
		this.img.src = 'img/' + name + '.png';
	}

	function Sprite(name, x, y, layer, dir, speed, ai) {
		var that = this;

		this.name = name;
		this.x = x || 0;
		this.y = y || 0;
		this.layer = layer || 0;
		this.dir = dir || 'down';
		this.speed = speed || 256;
		this.ai = ai;

		this.ready = false;
		this.img = new Image();
		this.img.onload = function () {
			that.ready = true;
		};
		this.img.src = 'img/' + name + '-' + this.dir + '.png';
	}

	/* Sprite.prototype.noColl = function (dir) {
		var tempSpr
			allowed = true;

		for (spr in level.sprites) {
			tempSpr = level.sprites[spr];

			if (tempSpr === this) { continue; }

			switch (dir) {
			case 'up':
			case 'down':
				break;
			case 'left':
			case 'right':
				if (
					spr.layer === this.layer
					&& (spr.y > this.y
					&& spr.y + 32 < this.y
					|| spr.y < this.y
					&& spr.y > this.y + 32)
				) {
					if (dir === 'left') {
						allowed = spr.x + 32 < this.x;
					} else {
						allowed = spr.x > this.x + 32;
					}
				}
				break;
			}

			if (!allowed) { break; }
		}

		return allowed;
	}; */

	Sprite.prototype.moveTo = function (x, y) {
		this.x = x;
		this.y = y;
	};

	Sprite.prototype.setImg = function (name) {
		var that = this;

		this.img = new Image();
		this.img.onload = function () {
			that.ready = true;
		};
		this.img.src = 'img/' + name + '.png';
	};

	ctx = $canvas.getContext('2d');
	keysDown = {};
	levels = {
		ruins: {
			background: new Background('background-cropped'),
			sprites: {
				alex: new Sprite('debug')
			},
			update: function () {}
		},
		true: {

// Possible room idea.
// Stuck until a certain event occurs.

			background: new Background('background-cropped'),
			sprites: {
				alex: new Sprite('debug'),
				bob: new Sprite('debug', $canvas.width - 32, $canvas.height - 32),
			},
			update: function () {
				if (char.y + 16 < 0) { // Too far up
					char.y = $canvas.height - 16;
				}
				if (char.y + 16 > $canvas.height) { // Too far down
					char.y = -16;
				}
				if (char.x + 16 < 0) { // Too far left
					char.x = $canvas.width - 16;
				}
				if (char.x + 16 > $canvas.width) { // Too far right
					char.x = -16;
				}
			}
		}
	};

	function loadLevel(l) {
		level = levels[l];
		background = level.background;
		char = level.sprites.alex;
	}

	// Debug tool
	w.loadLevel = loadLevel;

	loadLevel('true');

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
		var tempSpr;
		if (background.ready) {
			ctx.drawImage(background.img, 0, 0);
		}

		for (spr in level.sprites) {
			tempSpr = level.sprites[spr];
			if (tempSpr.ready) {
				ctx.drawImage(tempSpr.img, tempSpr.x, tempSpr.y);
			}
		}
	}

	function main() {
		var now = Date.now();
		var delta = now - then;

		update(delta / 1000);
		level.update(delta / 1000);
		render();

		then = now;

		// Request to do this again ASAP
		requestAnimationFrame(main);
	}
})(window, document);
