// Event Listener
document.getElementById("search").addEventListener("click", searchClicked);

// Event Function
function searchClicked() {
  // Get Input Value (what character to look for?)
  let name = document.getElementById("input-name").value;
  name = name.toLowerCase();

  // Test Input Variable and update the page
  if (name === "po" || name === "dragon warrior") {
    // Update page to Po
    updateCharacters("Po", "Buddy, I am the Dragon Warrior.");
  } else if (name === "tigress" || name === "master tigress") {
    // Update page to Tigress
    updateCharacters("Tigress", "That was pretty hardcore!");
  } else if (name === "mantis" || name === "master mantis") {
    // Update page to Mantis
    updateCharacters("Mantis", "Fear the bug!");
  } else if (name === "monkey" || name === "master monkey") {
    // Update page to Monkey
    updateCharacters("Monkey", "We should hang out.");
  } else if (name === "crane" || name === "master crane") {
    // Update page to Crane
    updateCharacters(
      "Crane",
      "You can chain my body, but you will never chain my warrior spirit!"
    );
  } else if (name === "viper" || name === "master viper") {
    // Update page to Viper
    updateCharacters("viper", "I don't need to bite to fight!");
  } else if (name === "shifu" || name === "master shifu") {
    // Update page to Master Shifu
    updateCharacters("Master Shifu", "There is now a Level Zero.");
  } else if (name === "ping" || name === "master") {
    // Update page to Mr. Ping
    updateCharacters(
      "Mr. Ping",
      "We are noodle folk, broth runs through our veins!"
    );
  } else {
    // Update page to Question Mark
    document.getElementById("character-name").innerHTML = "?????";
    document.getElementById("main-img").src = "img/question-mark.png";
    document.getElementById("quote").innerHTML = "Character Not Found";
  }
}

//FUNCTIONS
function updateCharacters(charName, quote) {
  document.getElementById("character-name").innerHTML = charName;
  document.getElementById("main-img").src = `img/${charName}.png`;
  document.getElementById("quote").innerHTML = quote;
}
