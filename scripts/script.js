function game() {

// Don't indent first-level code inside of the function.
// It takes up more indentation over-all and is unnecessary.

// Actual game variables
var day = 0,
	gameover = false;
// Player well-being
var health = 100,
	hunger = 0,
	thirst = 0,
	sleep = 100;
// Introduction
alert('You wake up in a clearing in the woods. You look around and see \
ruins. What was once a thriving village reduced to a few smoldering splinters. \
Wait! what\'s that? You found a scroll. You read the scroll. It says, "What is \
thriving now shall be destroyed (lots of mud covers this portion) Ancient race \
of the dwarves". The rest is burnt.');
// Real beginning
while (!gameover) {
	day++;
	alert('Day ' + day + '\n-\nHunger: ' + hunger + '\nThirst: ' + thirst + '\nSleep: ' + sleep);
	switch (day) {
		case 1:
			gameover = true;
			break;
	}
}

}
