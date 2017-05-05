function addPromise(a, b) {
	return new Promise(function(resolve, reject) {
		if (typeof a === 'number' && typeof b === 'number') {
			resolve(a + b);
		} else {
			reject("Both arguments need to be numbers");
		}
	});
}

addPromise(2, 3).then(function(answer) {
		console.log("Success", answer);
	},
	function(err) {
		console.error(err);
	});

addPromise(null, 2).then(function(answer) {
		console.log("Success", answer);
	},
	function(err) {
		console.error(err);
	});

addPromise(2).then(function(answer) {
		console.log("Success", answer);
	},
	function(err) {
		console.error(err);
	});

addPromise('a', 3).then(function(answer) {
		console.log("Success", answer);
	},
	function(err) {
		console.error(err);
	});
	
addPromise(145, 2345).then(function(answer) {
		console.log("Success", answer);
	},
	function(err) {
		console.error(err);
	});
	
	