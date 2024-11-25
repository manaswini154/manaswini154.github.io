(function(window) {
    var helloSpeaker = {};
    helloSpeaker.speak = function(name) {
        console.log("Hello " + name);
    };
    window.helloSpeaker = helloSpeaker; // Expose to the global scope
})(window);
(function(window) {
    var goodbyeSpeaker = {};
    goodbyeSpeaker.speak = function(name) {
        console.log("Goodbye " + name);
    };
    window.goodbyeSpeaker = goodbyeSpeaker; // Expose to the global scope
})(window);
(function() {
    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

    for (var i = 0; i < names.length; i++) {
        var name = names[i];

        // Check if the name starts with 'j' or 'J'
        if (name.charAt(0).toLowerCase() === 'j') {
            goodbyeSpeaker.speak(name);
        } else {
            helloSpeaker.speak(name);
        }
    }
})();
