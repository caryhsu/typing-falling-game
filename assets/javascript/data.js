"use strict";

// Data acquisition, processing, and storage (i.e. word lists)
const data = {
	// Word lists from APIs
	customWords: [],

	// Methods
	isReady: function(){},
		// Returns boolean ready state of word lists (true === all lists populated, game can start)
		// Calls: (none)
		// Sets: (none)

	get: function(source){},
		// Returns word list from requested source (if source === all, updates all lists and returns null)
		// Calls: (none)
		// Sets: any or all data.Words properties
};


// Method definitions
Object.defineProperties(data, {
	"isReady": { value: function() {
		return (data.customWords.length);
	}},

	"get": { value: function(source) {
		console.log("source=" + source);
		source = "custom";
		switch (source) {
			case "custom": custom(); return data.customWords;
		}

		function custom() {
			data.customWords.push("aaa");
			data.customWords.push("bbb");
			data.customWords.push("ccc");
			data.customWords.push("ddd");
			data.customWords.push("eee");
			data.customWords.push("fff");
		}

	}}
});

Object.seal(data);