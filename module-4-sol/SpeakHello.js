(function(window) {
	var speakHello = "Hello";
	var helloSpeaker = function (name) {
		console.log(speakHello + " " + name);
	}

	window.helloSpeaker = helloSpeaker;

})(window);
