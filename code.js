//AndrewChicken's Paladins Randomizer

//Tool that returns if the user is on a mobile device
function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
};

//Arrays containing the data for each section
var champions = ["Androxus", "Ash", "Atlas", "Barik", "Bomb King", "Buck", "Cassie", "Corvus", "Dredge", "Drogoz", "Evie", "Fernando", "Furia", "Grohk", "Grover", "Imani", "Inara", "Io", "Jenos", "Khan", "Kinessa", "Koga", "Lex", "Lian", "Maeve", "Makoa", "Mal'Damba", "Moji", "Octavia", "Pip", "Raum", "Rei", "Ruckus", "Saati", "Seris", "Sha Lin", "Skye", "Strix", "Talus", "Terminus", "Tiberius", "Torvald", "Tyra", "Vatu", "Viktor", "Vivian", "Vora", "Willo", "Yagorath", "Ying", "Zhin"];
var items = ["Illuminate", "Resilience", "Guardian", "Haven", "Nimble", "Master Riding", "Morale Boost", "Chronos", "Rejuvenate", "Kill to Heal", "Life Rip", "Veteran", "Bulldozer", "Cauterize", "Deft Hands", "Wrecker"];
var champ;
var cards;

var rand;
var randPH = [null, null, null]

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
		
		//Randomize the champion
		rand = Math.floor(Math.random()*champions.length);
		champ = champions[rand];
		document.getElementById("champ_image").src = champ + ".png";
	}
	
	if (document.getElementById("itemToggle").checked) {
		//Randomize the items
		//For each subsequent item, check with a while loop to ensure that the random item generated is not the same as the previous items.
		//Run the randomizer once each time to populate it with a value!!!
		rand = Math.floor(Math.random()*items.length);
		//Item 1
		randomizeItem();
		randPH[0] = rand;
		document.getElementById("item1img").src = items[rand] + ".png";
		
		
		//Item 2
		while (rand == randPH[0]) {
			//This while loop is required to ensure that the random item generated is not the same as the other items before it.
			rand = Math.floor(Math.random()*items.length);
			randomizeItem();
		}
		randPH[1] = rand;
		document.getElementById("item2img").src = items[rand] + ".png";
		
		//Item 3
		while (rand == randPH[0] || rand == randPH[1]) {
			//This while loop is required to ensure that the random item generated is not the same as the other items before it.
			rand = Math.floor(Math.random()*items.length);
			randomizeItem();
		}
		randPH[2] = rand;
		document.getElementById("item3img").src = items[rand] + ".png";
		
		//Item 4
		while (rand == randPH[0] || rand == randPH[1] || rand == randPH[2]) {
			//This while loop is required to ensure that the random item generated is not the same as the other items before it.
			rand = Math.floor(Math.random()*items.length);
			randomizeItem();
		}
		document.getElementById("item4img").src = items[rand] + ".png";
		
		//Clear the random placeholder array for the next use.
		randPH = [null, null, null];
	}
	
	function randomizeItem() {
		switch (champ) {
			case "Androxus":
				while (items[rand] == "Guardian") {
					rand = Math.floor(Math.random()*items.length);
				}
				break;
			case "Atlas":
				while (items[rand] == "Guardian") {
					rand = Math.floor(Math.random()*items.length);
				}
				break;
			case "Bomb King":
				while (items[rand] == "Guardian") {
					rand = Math.floor(Math.random()*items.length);
				}
				break;
			case "Buck":
				while (items[rand] == "Guardian") {
					rand = Math.floor(Math.random()*items.length);
				}
				break;
			case "Cassie":
				while (items[rand] == "Guardian") {
					rand = Math.floor(Math.random()*items.length);
				}
				break;
			case "Corvus":
				while (items[rand] == "Guardian") {
					rand = Math.floor(Math.random()*items.length);
				}
				break;
			case "Dredge":
				while (items[rand] == "Guardian") {
					rand = Math.floor(Math.random()*items.length);
				}
				break;
			case "Drogoz":
				while (items[rand] == "Guardian") {
					rand = Math.floor(Math.random()*items.length);
				}
				break;
			case "Evie":
				while (items[rand] == "Guardian") {
					rand = Math.floor(Math.random()*items.length);
				}
				break;
			case "Furia":
				while (items[rand] == "Guardian") {
					rand = Math.floor(Math.random()*items.length);
				}
				break;
			case "Grohk":
				while (items[rand] == "Guardian") {
					rand = Math.floor(Math.random()*items.length);
				}
				break;
			case "Grover":
				while (items[rand] == "Guardian") {
					rand = Math.floor(Math.random()*items.length);
				}
				break;
			case "Imani":
				while (items[rand] == "Guardian" || items[rand] == "Deft Hands") {
					rand = Math.floor(Math.random()*items.length);
				}
				break;
			case "Inara":
				while (items[rand] == "Guardian") {
					rand = Math.floor(Math.random()*items.length);
				}
				break;
			case "Io":
				while (items[rand] == "Guardian") {
					rand = Math.floor(Math.random()*items.length);
				}
				break;
			case "Jenos":
				while (items[rand] == "Guardian") {
					rand = Math.floor(Math.random()*items.length);
				}
				break;
			case "Kinessa":
				while (items[rand] == "Guardian") {
					rand = Math.floor(Math.random()*items.length);
				}
				break;
			case "Koga":
				while (items[rand] == "Guardian" || items[rand] == "Chronos") {
					rand = Math.floor(Math.random()*items.length);
				}
				break;
			case "Lex":
				while (items[rand] == "Guardian") {
					rand = Math.floor(Math.random()*items.length);
				}
				break;
			case "Lian":
				while (items[rand] == "Guardian") {
					rand = Math.floor(Math.random()*items.length);
				}
				break;
			case "Maeve":
				while (items[rand] == "Guardian" || items[rand] == "Deft Hands") {
					rand = Math.floor(Math.random()*items.length);
				}
				break;
			case "Mal'Damba":
				while (items[rand] == "Guardian") {
					rand = Math.floor(Math.random()*items.length);
				}
				break;
			case "Moji":
				while (items[rand] == "Guardian" || items[rand] == "Deft Hands") {
					rand = Math.floor(Math.random()*items.length);
				}
				break;
			case "Octavia":
				while (items[rand] == "Guardian") {
					rand = Math.floor(Math.random()*items.length);
				}
				break;
			case "Pip":
				while (items[rand] == "Guardian") {
					rand = Math.floor(Math.random()*items.length);
				}
				break;
			case "Raum":
				while (items[rand] == "Guardian") {
					rand = Math.floor(Math.random()*items.length);
				}
				break;
			case "Rei":
				while (items[rand] == "Guardian") {
					rand = Math.floor(Math.random()*items.length);
				}
				break;
			case "Saati":
				while (items[rand] == "Guardian" || items[rand] == "Chronos") {
					rand = Math.floor(Math.random()*items.length);
				}
				break;
			case "Seris":
				while (items[rand] == "Guardian") {
					rand = Math.floor(Math.random()*items.length);
				}
				break;
			case "Sha Lin":
				while (items[rand] == "Guardian" || items[rand] == "Deft Hands") {
					rand = Math.floor(Math.random()*items.length);
				}
				break;
			case "Skye":
				while (items[rand] == "Guardian") {
					rand = Math.floor(Math.random()*items.length);
				}
				break;
			case "Strix":
				while (items[rand] == "Guardian") {
					rand = Math.floor(Math.random()*items.length);
				}
				break;
			case "Talus":
				while (items[rand] == "Guardian") {
					rand = Math.floor(Math.random()*items.length);
				}
				break;
			case "Terminus":
				while (items[rand] == "Guardian" || items[rand] == "Deft Hands") {
					rand = Math.floor(Math.random()*items.length);
				}
				break;
			case "Tiberius":
				while (items[rand] == "Guardian") {
					rand = Math.floor(Math.random()*items.length);
				}
				break;
			case "Tyra":
				while (items[rand] == "Guardian") {
					rand = Math.floor(Math.random()*items.length);
				}
				break;
			case "Vatu":
				while (items[rand] == "Guardian") {
					rand = Math.floor(Math.random()*items.length);
				}
				break;
			case "Viktor":
				while (items[rand] == "Guardian") {
					rand = Math.floor(Math.random()*items.length);
				}
				break;
			case "Vora":
				while (items[rand] == "Guardian" || item[rand] == "Deft Hands") {
					rand = Math.floor(Math.random()*items.length);
				}
				break;
			case "Willo":
				while (items[rand] == "Guardian") {
					rand = Math.floor(Math.random()*items.length);
				}
				break;
			case "Yagorath":
				while (items[rand] == "Master Riding" || items[rand] == "Nimble" || items[rand] == "Deft Hands") {
					rand = Math.floor(Math.random()*items.length);
				}
				break;
			case "Ying":
				while (items[rand] == "Guardian") {
					rand = Math.floor(Math.random()*items.length);
				}
				break;
			case "Zhin":
				while (items[rand] == "Guardian") {
					rand = Math.floor(Math.random()*items.length);
				}
				break;
			default:
				rand = Math.floor(Math.random()*items.length);
		}
	}
	
	if (!document.getElementById("champToggle").checked && !document.getElementById("itemToggle").checked && !document.getElementById("cardsToggle").checked) {
		alert("You don't have anything selected!");
	}
};