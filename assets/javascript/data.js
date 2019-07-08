"use strict";

// Data acquisition, processing, and storage (i.e. word lists)
const data = {
	// Word lists from APIs
	lukeWords: {
		'week01' : ['accept', 'account', 'achieve', 'across', 'active', 'actually', 'adult', 'advice', 'African', 'against', 'allow', 'altogether', 'angel', 'appeal', 'appropriate', 'argument', 'arrange'],
	},
	lukeSources: ['luke-week01'],

	// Methods
	isReady: function(){},
		// Returns boolean ready state of word lists (true === all lists populated, game can start)
		// Calls: (none)
		// Sets: (none)

	get: function(source){},
		// Returns word list from requested source (if source === all, updates all lists and returns null)
		// Calls: (none)
		// Sets: any or all data.Words properties

	getSources: function(source){},
		
};


// Method definitions
Object.defineProperties(data, {
	"isReady": { value: function() {
		return true;
	}},

	"get": { value: function(source) {
		var tokens = source.split("-");
		var source0 = tokens[0];
		var source1 = tokens[1];
		switch (source0) {
			case "luke": return shuffle(data.lukeWords[source1].slice());
		}

	}},

	"getSources": { value: function(source) {
		var result = [];
		Array.prototype.push.apply(result, data.lukeSources);
		return result;
	}},
});

function shuffle(arr) {
    var i,
        j,
        temp;
    for (i = arr.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
};

Object.seal(data);