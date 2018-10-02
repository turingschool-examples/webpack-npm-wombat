var newWombatButton = document.querySelector('.new-wombat');
var wombat = document.querySelector('.wombat');
var counter = 0;

var wombats = [
  "./assets/box_on_head.png",
  "./assets/box_wave.png",
  "./assets/using.svg",
  "./assets/publishing.svg",
  "./assets/wombat_by_night.svg",
  "./assets/pride.png"
];

newWombatButton.addEventListener("click", showNewWombat)

function showNewWombat() {
  if (counter < 5) {
    findnewWombat()
  } else {
    counter = 0
    findnewWombat()
  }
}

function findnewWombat() {
  wombat.src = wombats[counter + 1]
  counter++;
}
