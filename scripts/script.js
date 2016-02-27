function game () {

// Don't indent first-level code inside of the function.
// It takes up more indentation over-all and is unnecessary.

// Actual game variables
var gameover = false,
	day = 0,
	strengthplay = false,
	location ;
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
	learned.fireball = false
	learned.stab = false
	inventory = {
		food: 25,
		water: 25,
		sleeping_bag: 1
	};
//Set location
location = 'RUINS'
// Introduction
if (location === 'RUINS') {
	alert('You wake up in a clearing in the woods. You look around and see ruins. What was once a thriving village reduced to a few smoldering splinters. Wait! what\'s that ? You found a scroll. You read the scroll. It says, "What is thriving now shall be destroyed (lots of mud is stuck to this portion) Ancient race of the dwarves". The rest is burnt.');
} else {
	if (location === 'woods') {
	alert('You decide to hide in the woods. Alright, that was almost too close. let\'s take stock of our supplies. you have some food, some water and...oh! an axe! nice! you spend the rest of the day building a very crude treehouse. hmm...looks like the sun is setting. goodnight.')
	} else {
		alert('You enter a wetlands plain. Whew...that was close. anyway, why not take stock? let us see... we scored let\'s see...some food, water and...oh! a farmer\'s scythe and a shovel! nice. you use the scythe and shovel to collect tall grass and dig a pit to make a very crude but hidden shelter. well looks like the sun is setting, nighty night.')	}
}
// Main Choice
var biomeChoice = prompt('You\'re gathering materials when some rustling\'s heard. It\'s definitely not safe. You have to go now. You gather your supplies. You have a choice to go to the WOODS or the WETLANDS.').toUpperCase();
if(biomeChoice === 'WETLANDS')
{
	inventory.scythe = 1
	inventory.shovel = 1
	alert('You enter a wetlands plain. Whew...that was close. anyway, why not take stock? let us see... we scored let\'s see...some food, water and...oh! a farmer\'s scythe and a shovel! nice. you use the scythe and shovel to collect tall grass and dig a pit to make a very crude but hidden shelter. well looks like the sun is setting, nighty night.')
	location = 'RUINS'
} else
{
	inventory.axe = 1
	alert('You decide to hide in the woods. Alright, that was almost too close. let\'s take stock of our supplies. you have some food, some water and...oh! an axe! nice! you spend the rest of the day building a very crude treehouse. hmm...looks like the sun is setting. goodnight.')
	location = 'RUINS'
}

// Day Two
event('You should probably go back to the village. maybe we can find something useful.')
if (location === 'RUINS') {
	var classChoice = prompt('let\'s see... we could go to the BUTCHER SHOP, we might find a weapon of some sort. or we could go to the LIBRARY.').toUpperCase();
	location = classChoice
}
if (location === 'BUTCHER SHOP')
{
	strengthplay = true
        alert('That butcher\'s knife over there looks pretty sharp. lets take it')
        inventory.knife = 1
        attack = 5
} else
{
	alert('You enter the library. let\'s see, lots of old scrolls... ! A spellbook! that ought to be useful. go on and take it')
        intelligence = 7
        inventory.spellbook = 1
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
