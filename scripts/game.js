//create game code here
//canvas
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);
//random thing
var moving = false;
//basic functions
function timestamp() {
  return window.performance && window.performance.now ? window.performance.now() : new Date().getTime();
};

//load the images

//background
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
	bgReady = true;
};
bgImage.src = "images/background.png";

//Player
var playerReady = false;
var playerImage = new Image();
playerImage.onload = function () {
	playerReady = true;
};
playerImage.src = "images/Alex.png";

function update() {  //update function
  //insert update function code here
  if (player.input.w === pressed) {
    player.y -= player.speed * modifier;
    moving = true
  } else {
    if (player.input.a === pressed) {
      player.x -= player.speed * modifier;
      moving = true
    } else {
      if (player.input.s === pressed) {
        player.y += player.speed * modifier;
        moving = true
      } else {
        if (player.input.d === pressed) {
         player.x += player.speed * modifier;
          moving = true
        } else {
          moving = false
        }
      }
    }
  }
};

function render() {  //render game objects
    if (bgReady) {
    	ctx.drawImage(bgImage, 0, 0);
    }
    
    if (playerReady) {
    	ctx.drawImage(playerImage, player.x, player.y);
    }
};
//gameloop
var now,
    dt   = 0,
    last = timestamp(),
    step = 1/60;

function frame() {
  now = timestamp();
  dt = dt + Math.min(1, (now - last) / 1000);
  while(dt > step) {
    dt = dt - step;
    update(step);
  }
  render(dt);
  last = now;
  requestAnimationFrame(frame);
};

requestAnimationFrame(frame);

//player stats
var health = 100;
var energy = 10;
var water level = 100; //how much negetive thirst you have
var attack = 1;
var speed = 5;
var intelligence = 5;
//other game variables
var KEY = {
  I:     73, //access full inventory
  W:     87, //forward
  A:     65, //left
  S:     83, //'backward'
  D:     68, //right
  ONE:   49, //hotbar slot 1
  TWO:   50, //hotbar slot 2
  THREE: 51, //hotbar slot 3
  FOUR:  52, //hotbar slot 4
  FIVE:  53, //hotbar slot 5
  SIX:   54, //hotbar slot 6
  SEVEN: 55, //hotbar slot 7
  EIGHT: 56, //hotbar slot 8
  NINE:  57, //hotbar slot 9
};
//player move code
var player = {
    ...
    input: { w: false, a: false, s: false, d: false, i: false, one: false, two: false, three: false, four: false, five: false, six: false, seven: false, eight: false, nine: false}
    speed: 256, // movement in pixels per second
    x: 0,
    y: 0
  };

  document.addEventListener('keydown', function(ev) { return onkey(ev, ev.keyCode, true);  }, false);
  document.addEventListener('keyup',   function(ev) { return onkey(ev, ev.keyCode, false); }, false);

  function onkey(ev, key, pressed) {
    switch(key) {
      case KEY.W:  player.input.w  = pressed; break;
      case KEY.A: player.input.a = pressed; break;
      case KEY.S: player.input.s  = pressed; break;
      case KEY.D: player.input.d = pressed; break;
      case KEY.I: player.input.i = pressed; break;
      case KEY.ONE: player.input.one = pressed; break;
      case KEY.TWO: player.input.two = pressed; break;
      case KEY.THREE: player.input.three = pressed; break;
      case KEY.FOUR: player.input.four = pressed; break;
      case KEY.FIVE: player.input.five = pressed; break;
      case KEY.SIX: player.input.six = pressed; break;
      case KEY.SEVEN: player.input.seven = pressed; break;
      case KEY.EIGHT: player.input.eight = pressed; break;
      case KEY.NINE: player.input.nine = pressed; break;
    }
  };



//rest of game
