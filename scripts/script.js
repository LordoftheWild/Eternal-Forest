var game = function () {

// Don't indent first-level code inside of the function.
// It takes up more indentation over-all and is unnecessary.
//gameover cycle
if(energy === 0 || thirst === 10 || health === 0){
	gameover = true;
}
//shelter
var shelter = false;
var shelterLevel = 0;
//pet?
var pet = "none";
// Actual game variables
var gameover = false;
var day = 0;
var strengthplay = false;
var location ;
// Player well-being
var health = 100;
var energy = 10;
var thirst = 0;
var sleep = 100;
// Player info
var attack = 1;
var defense = 1;
var speed = 5;
var intelligence = 3;
var inventory = {
	food: 25,
	water: 25,
	sleeping_bag: 1
};
//Spells learned
var spells = {
        fire: false,
	earth: false,
	water: false,
	light: false,
	dark: false
};
day = 1
alert('Day ' + day + '\n-\nEnergy: ' + energy + '\nThirst: ' + thirst + '\nSleep: ' + sleep + '\nPet: ' + pet)
//Set location
location = 'RUINS';
// Introduction
if (location === 'RUINS') {
	alert('Hello? are you awake? My name is Echo');
	alert('Wait! what\'s that ?')
	alert('*A scroll tumbles out of a nearby bush.*')
	alert('*You read the scroll.* It says, "What is thriving now shall be destroyed (lots of mud is stuck to this portion) Ancient race of the dwarves". *The rest is burnt.*')
}
alert('Okay...that was different.')
alert('Nevermind that, let\'s gather some supplies')
// Main Choice
var biomeChoice = prompt('*You\'re gathering supplies when some rustling\'s heard.* It\'s definitely not safe. We have to go now. Should we go to the [WOODS] or the [WETLANDS].').toUpperCase();
if(biomeChoice === 'WETLANDS')
{
	inventory.scythe = 1
	inventory.shovel = 1
	alert('*You enter a wetlands plain.* Whew...that was close. anyway, why not take stock? Let us see...some food, water and...oh! A farmer\'s scythe and a shovel!')
	alert('*You use the scythe and shovel to collect tall grass and dig a pit to make a very crude but hidden shelter.*')
	shelter = true
	shelterLevel = 1
	alert('Well, looks like the sun is setting, you should get some rest.')
	alert('*Zzzz...*')
	location = 'RUINS';
} else
{
	inventory.axe = 1
	alert('*You decide that the woods are your best bet.* Let\'s take stock of our supplies. Some food, some water and...oh! There\'s an axe in a stump! sweet!')
	alert('*You spend the rest of the day building a very crude treehouse.*')
	
	shelter = true
	shelterLevel = 1
	alert('It looks like the sun is setting. Grab some sleep, I\'ll take first watch.')
	alert('*Zzzz...*')
	location = 'RUINS';
}
energy = 8
thirst = 2
day = 2
alert('Day ' + day + '\n-\nEnergy: ' + energy + '\nThirst: ' + thirst + '\nSleep: ' + sleep + '\nPet: ' + pet)
// Day Two
alert('You should probably go back to the village. maybe we can find something useful.')
if (location === 'RUINS') {
	var classChoice = prompt('let\'s see... we could go to the [BUTCHER SHOP], we might find a weapon of some sort. or we could go to the [LIBRARY].').toUpperCase();
	location = classChoice;
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
    spells.fire = true
    spells.water = true
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
alert('We should probably eat something now')
inventory.food = 20
inventory.water = 20
energy = 10
thirst = 0
alert('Yum! that was delicious.')
alert('Let\'s go to sleep for now. We can forage some more tommorow.')
day = 3
alert('Day ' + day + '\n-\nEnergy: ' + energy + '\nThirst: ' + thirst + '\nSleep: ' + sleep + '\nPet: ' + pet)
//Day Three
alert('Alright. New day, new opportunities. Let\'s go look for some stuff')
if(location === 'WOODS')
{
    inventory.food = 30
    inventory.wood = 15
    inventory.water = 30
    alert('*found material [WOOD]*')
    alert('*found essential [FOOD]*')
    alert('*found essential [WATER]*')
    alert('Okay, this is a lot of water.')
    alert('Why not use this wood we found to make a cask? That way we can store more water.')
    var caskYesNo = prompt('*make the cask?*').toUpperCase();
    if(caskYesNo === 'YES'){
    	inventory.wood = 10
    	inventory.waterCask = 1
    } else {
    	alert('Okay, your choice.')
    	inventory.water = 25
    }
} else
{
    inventory.food = 30
    inventory.water = 35
    inventory.wildGrass = 15
    alert('*found material [WILD GRASS]*')
    alert('*found essential [FOOD]*')
    alert('*found essential [WATER]*')
    alert('We should take advantage of all this extra water. Let\'s make a cask. It will allow us to hold a lot more water.')
    var caskYesNo = prompt('*make the cask?*').toUpperCase();
    if(caskYesNo === 'YES'){
    	inventory.wildGrass = 10
    	inventory.wovenCask = 1
    } else {
    	alert('Have it your way.')
    	inventory.water = 25
    }
}
alert('We should get going.')
alert('We don\'t want to be out after dark.')
alert('Terrible things lurk here.')
alert('Wha... what was that!')
alert('A SHADOW apeared')
var userAttack = prompt('[ATTACK] or [RUN]').toUpperCase();
if(userAttack === 'RUN')
{
	alert('I\'m with you. let\'s get out of here.')
	location = prompt('You run. which way again? [WOODS] or [WETLANDS]').toUpperCase();
} else
{
	if(inventory.knife === 1)
	{
		alert('That won\'t work against a being of pure darkness! It has no physical form!')
	        location = prompt('RUUUUUUUN. Quick, which way? [WOODS] or [WETLANDS]')
	} else
	{
		if(inventory.spellbook === 1){
			var spellChoice = prompt('Which spell should we use? [FIRE] or [WATER]').toUpperCase();
		        if(spellChoice === 'FIREBALL'){
		         	alert('Woah!...nice fireball.')
		        	alert('The SHADOW was disspatched to wherever SHADOWs come from.')
		        } else
		        {
		        	alert('WOAH!. . . nice gigantic wave of water. that ought to do the trick.')
	        		alert('The SHADOW was dissolved.')
	        	}
		
        	} else
        	{
        		alert('That won\'t work against a being of pure darkness! It has no physical form!')
	                location = prompt('RUUUUUUUN. Quick, which way? [WOODS] or [WETLANDS]')
        	}
        }
}
alert('Whew, that was WAY too close. let\'s hope we don\'t see any more SHADOWS.')
var whatNext = prompt('Okay, what next? [EXPLORE] or [HOME]').toUpperCase();
if(whatNext === 'HOME')
{
	alert(' Ya, It is getting dark. I agree.')
} else
{
	alert('It\'s getting dark. I think we should go home instead.')
}
inventory.map = 1
alert('Hey! look it\'s a map.')
var homeLocation = prompt('let\'s record the location of that shelter you built. [WOODS] or [WETLANDS]').toUpperCase();
location = homeLocation
alert('Well, here we are. Home sweet home.')
alert('The sun seems to be setting. Let\'s eat dinner and go to sleep and grab some sleep')
inventory.food = 10
day = 4
alert('Day ' + day + '\n-\nEnergy: ' + energy + '\nThirst: ' + thirst + '\nSleep: ' + sleep + '\nPet: ' + pet)
//day 4
alert('Ah! after a goodnight\'s sleep I feel ready to do some work.')
alert('hmm...')
alert('Why don\'t we make this shelter of yours a bit better?')
var shelterYes = prompt('*upgrade shelter?*').toUpperCase();
if(shelterYes === 'YES'){
	alert('*You spend the entire day upgrading your home, with a lunch break of course*')
	shelterLevel = 2
	alert('Our supplies are running low.')
	alert('let\'s forage for some more')
	alert('*found essential [FOOD]*')
	alert('*found essential [WATER]*')
	inventory.food = 25
	inventory.water = 25
} else {
	alert('Okay...')
	//will change the following line to give choice for exploration later
	alert('Let\'s explore!')
	alert('Let\'s see...')
	alert('The map shows some sort of wierd formation to the south.')
	if(inventory.spellbook === 1){
		alert('We should probably master casting spells before we go there though.')
		alert('I have a feeling that it\'s chok-full of monsters and other bad things')
		alert('we can start training tomorrow, for today just take a break.')
		inventory.food = 20
		inventory.water = 20
	} else {
		if(inventory.iron_sword = 1){
			alert('I get the feeling that it will be dangerous.')
			alert('We should probably hone our swordfighting skills first')
			alert('Relax for today, tommorow we start training.')
			inventory.food = 20
			inventory.water = 20
		} else {
			if(inventory.scythe = 1){
				alert('It will probably be a perilous journey.')
				alert('I can teach you how to weild the scythe.')
				alert('take the rest of the day off. We start tommorow.')
				inventory.food = 20
				inventory.water = 20
			} else {
				alert('The journey there will be full of danger.')
				alert('You must first master the quick and agile attacks of the dagger')
				alert('Meet me in the ruins tommorow morning.')
				alert('And don\'t forget the knife')
				alert('For now relax.')
				inventory.food = 20
				inventory.water = 20
			}
		}
	}
}
day = 5
alert('Day ' + day + '\n-\nEnergy: ' + energy + '\nThirst: ' + thirst + '\nSleep: ' + sleep + '\nPet: ' + pet)
if(shelterYes === 'YES'){
	alert('Ahhh. What a nice feeling to wake up in this significantly better shelter')
	alert('huh...')
	alert('It looks like there is an incantation on this mysterious scroll.')
	alert('One word is missing')
	alert('Oh!')
	alert('I get it...')
	alert('Fill in this word eith one of the following')
	var petWhich = prompt('[STRENGTH] or [KNOWLEDGE] or [PEACE] or [POWER]').toUpperCase();
} else {
	alert('*You wake up to see that mysterious scroll lying on the floor*')
	alert('*upon reeding it you discover an incantation*')
	alert('*There is a missing word and a note next to it*')
	alert('*The note says...*')
	alert('*Fill in this word one of the following*')
	var petWhich = prompt('[STRENGTH] or [KNOWLEDGE] or [PEACE] or [POWER]').toUpperCase();
}

alert('*You read the incantation with the missing word filled in*')
if(petWhich === 'STRENGTH'){
	alert('...')
	alert('...')
	alert('...')
	pet = 'Blue Sky Whale'
	alert('*A creature of unmatched strangth appeared in a flash of light*')
	alert('It\'s a Blue Sky Whale!')
	alert('Blue Sky Whales were the chosen mounts of the powerful warriors of old')
	alert('A single whale can take out a frigate with a flick of it\'s tail')
} else {
	alert('...')
}
if(petWhich === 'PEACE'){
	alert('...')
	alert('...')
	pet = 'Fairy Dog'
	alert('*A creature of peace and loyalty appeared in a flash of...*')
	alert('*sparkles?*')
	alert('Oh...it\'s a Fairy Dog')
	alert('Fairy Dogs are loyal companions and very peaceful')
	alert('Still, if need be they can defend the peace with, well...usually a super powerful attack but sometimes their lives')
} else {
	alert('...')
}
if(petWhich === 'KNOWLEDGE'){
	alert('...')
	pet = 'Squirel Pheonix'
	alert('*A creature of unmatched memory appeared in a flash of acorns*')
	alert('It\'s a Squirel Pheonix!')
	alert('Squirel Pheonix are the keepers of knowledge. they know EVERYTHING')
	alert('Even though they know everything, they cannot recall it until much later on in their lives and they are very hard to train')
	alert('Good Luck!')
} else {
	alert('...')
}
if(petWhich === 'POWER'){
	pet = 'Desert Ox'
	alert('*A creature of unmatched power appeared in a flash of acorns*')
	alert('It\'s a Desert Ox!')
	alert('Desert Ox have a super secret power that only the Squirel Pheonix know of')
	alert('This super power is so great that only one in every 1,000,000 Ox can use it.')
	alert('Also, before it uses the power, you have to train it.')
} else {
	location = homeLocation
}

day = 6
alert('Day ' + day + '\n-\nEnergy: ' + energy + '\nThirst: ' + thirst + '\nSleep: ' + sleep + '\nPet: ' + pet)
//temporary end
gameover = true;
// Real beginning
while (!gameover) {
	day++;
	alert('Day ' + day + '\n-\nEnergy: ' + energy + '\nThirst: ' + thirst + '\nSleep: ' + sleep + '\nPet: ' + pet);
	switch (day) {
		case 1:
			gameover = true;
			break;
	}
}

}
