function event(string, functions, fallback) {
	fallback = (typeof fallback === 'function') ? fallback : function () {};
	// Selects options from  string
	var options = string.match(/\[(.*?)\]/g);
	// Looped for all options
	for (var i = 0; i < options.length; i++) {
		// Removes brackets
		options[i] = options[i].slice(1, -1).toLowerCase();
	}
	var index = options.indexOf(prompt(string).toLowerCase());
	// Loops until you've selected the correct choice
	while (index === -1) {
		if (confirm('Please make sure you\'ve selected something between the square brackets.')) {
			index = options.indexOf(prompt(string).toLowerCase());
		} else {
			// Stops loop
			index = 'quit';
		}
	}
	if (index !== 'quit') {
		functions[index]();
	} else {
		fallback();
	}
}
