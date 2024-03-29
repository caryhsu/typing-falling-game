"use strict";

// Leaderboard display
const leaderboard = {
	hiScoreTime: 80,  // Timeout delay for each new shown high score row


	// Methods
	init: function(){},
		// Initializes page
		// Calls: leaderboard.show

	show: function(difficulty){}
		// Shows scores for given difficulty
};


// Method definitions
Object.defineProperties(leaderboard, {
	"init": { value: function() {
		leaderboard.show("easy");
		
		// Leaderboard radio button event
		$("input[type=radio][name=scoreList]").on('change', function() {
			leaderboard.show($(this).val());
		});
	}},

	"show": { value: function(difficulty){
		firebase.database().ref("leaderboard/" + difficulty).once("value").then(function(snapshot) {
			const heading = "\
				<th class='text-center hipster-text' style='width: 30%'>Player Name:</th>\
				<th class='text-center hipster-text'>Score:</th>\
				<th class='text-center hipster-text'>WPM:</th>\
				<th class='text-center hipster-text'>Accuracy %:</th>\
				<th class='text-center hipster-text'>Max Streak:</th>"
			$("#leaderboard-heading").html($("<tr>").html(heading).fadeIn());

			const arr = JSON.parse(snapshot.val());

			$("#leaderboard-stats").empty();

			for (let i = 0; i < arr.length; i++) {
				const template = "\
					<th class='text-center hipster-text'>" + arr[i].player + "</th>\
					<th class='text-center hipster-text'>" + arr[i].score + "</th>\
					<th class='text-center hipster-text'>" + arr[i].wpm.toFixed(1) + "</th>\
					<th class='text-center hipster-text'>" + arr[i].hits + " / " + (arr[i].hits + arr[i].misses) + " ( " + arr[i].acc.toFixed(1) + "% )</th>\
					<th class='text-center hipster-text'>" + arr[i].longestStreak + "</th>";

				setTimeout(function() { $("#leaderboard-stats").append($("<tr>").html(template).fadeIn()) }, i * leaderboard.hiScoreTime);
			}
		});
	}}
});

Object.seal(leaderboard);