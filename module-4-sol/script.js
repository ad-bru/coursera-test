(function () {

var names = ["Yaakov", "Jean", "Janice", "Jake", "Papa", "Fitzgerald", "Louis", "Pops", "Lucie", "Jeremy"];

for (var i = 0; i < names.length; i++) {
  var firstLetter = names[i].charAt(0).toLowerCase();

  if (firstLetter === 'j') {
    byeSpeaker(names[i]);
  }
  else {
    helloSpeaker(names[i]);
  }
}

})();
