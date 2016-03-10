function game () {

// Don't indent first-level code inside of the function.
// It takes up more indentation over-all and is unnecessary.

//pet?
var shadowDead = false
// Actual game variables
var gameover = false,
var day = 0,
var strengthplay = false,
var location ;
// Player well-being
var health = 100,
var hunger = 0,
var thirst = 0,
var sleep = 100;
// Player info
var attack = 1,
var defense = 1,
var speed = 5,
var intelligence = 3,
var inventory = {
	food: 25,
	water: 25,
	sleeping_bag: 1
};
//Spells learned
var spells = {
        fireball: false
	telekenesis: false
	tsunami: false
	solar_flare: false
	summon_pet: false
};
day = 1
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
day = 2
// Day Two
event('You should probably go back to the village. maybe we can find something useful.')
if (location === 'RUINS') {
	var classChoice = prompt('let\'s see... we could go to the [BUTCHER SHOP], we might find a weapon of some sort. or we could go to the [LIBRARY].').toUpperCase();
	location = classChoice
}
if (location === 'BUTCHER SHOP')
{
	strengthplay = true
    alert('That butcher\'s knife over there looks pretty sharp. lets take it')
    inventory.knife = 1
    attack = 5
    location = prompt('It\'s getting dark. Where was home? [WOODS] or [WETLANDS]').toUpperCase();
} else
{
	if(location === 'LIBRARY') {
	alert('You enter the library. let\'s see, lots of old scrolls... ! A spellbook! that ought to be useful. go on and take it')
    intelligence = 7
    inventory.spellbook = 1
    spells.fireball = true
    spells.tsunami = true
    location = prompt('It\'s getting dark. we can test this spellbook later. first we should go home. [WOODS] or [WETLANDS]').toUpperCase();
	} else {
	    alert('you instead decide to explore the TRADESHOP.')
	    location = 'TRADESHOP'
	    var classWarrior = prompt('You found an iron sword. would you like to take it').toUpperCase();
	    if(classWarrior === 'YES'){
	        inventory.iron_sword = 1
	        alert('This sword should protect you from danger.')
	        location = prompt('Let\'s go back home. where was it again? [WOODS] or [WETLANDS]').toUpperCase();
	    } else {
	        alert('We should really take the sword. It could be handy.')
	        inventory.iron_sword = 1
	        location = prompt('Okay, it\'s getting dark. Where was that shelter you built, again? [WOODS] or [WETLANDS]').toUpperCase();
	    }
	}
}
event('We should probably eat something now')
inventory.food = 20
inventory.water = 20
alert('Yum! that was good. let\'s go to sleep for now. we can collect some more supplies tommorow morning.')
day = 3
//Day Three
event('Alright. New day, new opportunities. Let\'s go get some supplies')
if(location === 'WOODS')
{
    inventory.food = 30
    inventory.wood = 15
    inventory.water = 30
    alert('Okay, lets use this wood we found to make a cask so we can store more water.')
    inventory.wood = 5
    inventory.woodCask = 1
} else
{
    inventory.food = 30
    inventory.water = 35
    inventory.wildGrass = 15
    alert('We found some food and water. we also found some wild grass. let\'s make a cask. It will hold more water than our waterskin.')
    inventory.wildGrass = 5
    inventory.wovenCask = 1
}
alert('Wha... what was that!')
alert('A SHADOW apeared')
var userAttack = prompt('[ATTACK] or [RUN]').toUpperCase();
if(userAttack === 'RUN')
{
	alert(I'm with you. let\'s get out of here.')
	location = prompt('You run. which way again? [WOODS] or [WETLANDS]').toUpperCase();
} else
{
	if(inventory.knife === 1)
	{
		alert('That won\'t work against a being of pure darkness! It has no physical form!')
	        location = prompt('RUUUUUUUN. Quick, which way? [WOODS] or [WETLANDS]')
	} else
	{
		var spellChoice = prompt('Which spell should we use? [FIREBALL] or [TSUNAMI]').toUpperCase();
		if(spellChoice === 'FIREBALL')
		{
			alert('Woah!...nice fireball.')
			alert('The SHADOW was disspatched to wherever SHADOWs come from.')
			shadowDead = true
		} else
		{
			alert('WOAH!. . . nice gigantic wave of water. that ought to do the trick.')
			alert('The SHADOW was dissolved.')
			shadowDead = true
		}
	}
}
alert('Whew, that was WAY too close. let\'s hope we don\'t see any more SHADOWS.')
var whatNext = promptI('Okay, what next? [EXPLORE] or [HOME]').toUpperCase();
if(whatNext === 'HOME')
{
	alert(' Ya, It is getting dark. I agree.')
} else
{
	alert('It\'s getting dark. I think we should go home instead.')
}
inventory.map = 1
alert('Hey! look it\'s a map.')
var homeLocation = prompt('let\'s put the location of that shelter you built on it. [WOODS] or [WETlANDS]').toUpperCase();
location = homeLocation
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
