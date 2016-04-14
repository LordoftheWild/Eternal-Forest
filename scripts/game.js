//create game code here
//basic functions
function timestamp() {
  return window.performance && window.performance.now ? window.performance.now() : new Date().getTime();
}

function update() {  //update function
  //insert update function code here
}

function render() {  //render game objects
  //insert rendering code here
}
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
}

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
  }

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
      case KEY.ONE: player.input.one = pressed; break;
    }
  }



//rest of game
