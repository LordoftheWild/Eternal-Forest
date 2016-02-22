function game() {

// Don't indent first-level code inside of the function.
// It takes up more indentation over-all and is unnecessary.

event('[Fight] or [flight]?', [function () {
	alert('You chose to fight.');
}, function () {
	alert('You chose to flee.');
}]);

}
