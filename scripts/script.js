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
if (location === 'woods') {
	alert('You wake up in a clearing in the woods. You look around and see ruins. What was once a thriving village reduced to a few smoldering splinters. Wait! what\'s that? You found a scroll. You read the scroll. It says, "What is thriving now shall be destroyed (lots of mud is stuck to this portion) Ancient race of the dwarves". The rest is burnt.');
} else {
	alert('You enter a wetlands plain. "That was weird. Let\'s take stock. Hmm... plenty of food and fresh water but what\'s thish ... oh! A farmer\'s scythe and a shovel, plus a sleeping bag. Wasn\'t that lucky? It\'s starting to get dark. You should probably build a shelter, the wetlands aren\'t exactly the safest place." You spent the rest of the day building a makeshift shelter using tall grass and a pit. it looks pretty hidden.');
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
