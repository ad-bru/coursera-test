(function(window) {
	var speakGooodbye = "Good Bye";
	var byeSpeaker = function (name) {
  		console.log(speakGooodbye + " " + name);
	}
	window.byeSpeaker = byeSpeaker;
})(window);
