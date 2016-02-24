function game () {

// Don't indent first-level code inside of the function.
// It takes up more indentation over-all and is unnecessary.

// Actual game variables
var gameover = false,
	day = 0,
	location;
// Player well-being
var health = 100,
	hunger = 0,
	thirst = 0,
	sleep = 100;
// Player info
var attack = 1,
	defense = 1,
	speed = 5,
	intelligence = 3,
	inventory = {
		food: 25,
		water: 25,
		sleeping_bag: 1
	};
// Main Choice
event('You\'re gathering materials when some rustling\'s heard. It\'s definitely not safe. You have to go now. You gather your supplies. You have a choice to go to the [left] or the [right].', [function () {
	location = 'woods';
	inventory.axe = 1;
}, function () {
	location = 'wetlands';
	inventory.scythe = 1;
	inventory.shovel = 1;
}]);
// Introduction
if (location === 'ruins') {
	alert('You wake up in a clearing in the woods. You look around and see ruins. What was once a thriving village reduced to a few smoldering splinters. Wait! what is that ? You found a scroll. You read the scroll. It says, "What is thriving now shall be destroyed (lots of mud is stuck to this portion) Ancient race of the dwarves". The rest is burnt.');
} else {
	if (location === 'woods') {
	alert('you decide to hide in the woods. Alright, that was almost too close. let us take stock of our supplies. you have some food, some water and...oh! an axe! nice! you spend the rest of the day building a very crude treehouse. hmm...looks like the sun is setting. goodnight.)
	} else {
		alert('you enter a wetlands plain. Whew...that was close. anyway, why not take stock? let us see... we scored some food, water and...oh! a farm scythe and a shovel! nice. you use the scythe and shovel to collect tall grass and dig a pit to make a very crude but hidden shelter. well looks like the sun is setting, nighty night.)	}
}
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
