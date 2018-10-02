var newWombatButton = document.querySelector('.new-wombat');
var wombat = document.querySelector('.wombat');
var counter = 0;

var wombats = [
  "./assets/box_on_head.png",
  "./assets/box_wave.png",
  "./assets/pride.png",
  "./assets/publishing.svg",
  "./assets/using.svg",
  "./assets/wombat_by_night.svg"
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
