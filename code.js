//AndrewChicken's Paladins Randomizer

//Tool that returns if the user is on a mobile device
function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
};

//Arrays containing the data for each section
var champions = ["Androxus", "Ash", "Atlas", "Barik", "Bomb King", "Buck", "Cassie", "Corvus", "Dredge", "Drogoz", "Evie", "Fernando", "Furia", "Grohk", "Grover", "Imani", "Inara", "Io", "Jenos", "Khan", "Kinessa", "Koga", "Lex", "Lian", "Maeve", "Makoa", "Mal'Damba", "Moji", "Octavia", "Pip", "Raum", "Rei", "Ruckus", "Seris", "Sha Lin", "Skye", "Strix", "Talus", "Terminus", "Tiberius", "Torvald", "Tyra", "Vatu", "Viktor", "Vivian", "Vora", "Willo", "Yagorath", "Ying", "Zhin"];
var items = ["Illuminate", "Resilience", "Guardian", "Haven", "Nimble", "Master Riding", "Morale Boost", "Chronos", "Rejuvenate", "Kill to Heal", "Life Rip", "Veteran", "Bulldozer", "Cauterize", "Deft Hands", "Wrecker"];
var cards;

var rand;

/*



Note for the future!
The way we could do the cards is have a picture of the card setup (2x2 sets of 4 cards), and make the ones which should be used highlighted in red, with the levels imprinted on top. Kind of like this

_ _ 4 _     _ 2 1 _
_ 3 _ _     _ 5 _ _





*/

//Run this on startup
function init() {
	//Test alert
	//alert("This is working.");
	
	//Check if the user is on a mobile device and fix the graphics accordingly
	if (!isMobileDevice()) {
		//Put an event listener on the randomizer button so that it can be pressed on enter:
		document.getElementById("randomize()").addEventListener("keyup", function(event) {
			if (event.keyCode === 13) {
				setCookie(document.getElementById('newName').value + '|' + document.getElementById('newCategory').value.toLowerCase());
			}
		});
	}
	
	
};

//The big randomizer script
function randomize() {
	//Test alert
	//alert("Randomizing!");
	
	//Check if the champion randomizer is toggled on:
	if (document.getElementById("champToggle").checked) {
		//alert("Champion Toggle is on");
		rand = Math.round(Math.random()*champions.length)-1;
		document.getElementById("champ_name").innerHTML = "Champion: " + champions[rand];
		document.getElementById("champ_image").src = champions[rand] + ".png";
	}
};