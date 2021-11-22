//AndrewChicken's Paladins Randomizer

//Tool that returns if the user is on a mobile device
function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
};

//Arrays containing the data for each section
var champions = ["Androxus", "Ash", "Atlas", "Azaan", "Barik", "Bomb King", "Buck", "Cassie", "Corvus", "Dredge", "Drogoz", "Evie", "Fernando", "Furia", "Grohk", "Grover", "Imani", "Inara", "Io", "Jenos", "Khan", "Kinessa", "Koga", "Lex", "Lian", "Maeve", "Makoa", "Mal'Damba", "Moji", "Octavia", "Pip", "Raum", "Rei", "Ruckus", "Saati", "Seris", "Sha Lin", "Skye", "Strix", "Talus", "Terminus", "Tiberius", "Torvald", "Tyra", "Vatu", "Viktor", "Vivian", "Vora", "Willo", "Yagorath", "Ying", "Zhin"];

var talent1 = ["Cursed Revolver", "Battering Ram", "Unstable Fissure", "Persistence", "Forgefire", "Chain Reaction", "Ensnare", "Impulse", "Spreading Influence", "Scuttle", "WYRM Jets", "Snow Globe", "Aegis", "Exterminate", "Spirit's Domain", "Deep Roots", "Mana Rift", "Treacherous Ground", "Sacrifice", "The Power Cosmeum", "Lian's Shield", "Steady Aim", "Blood Reaper", "Death Hastens", "Precision", "Street Justice", "Half Shell", "Wekono's Wrath", "Boom Boom", "Asymmetric Warfare", "Catalyst", "Enforcer", "Extension", "Aerial Assault", "Window of Opportunity", "Mortal Reach", "Sand Trap", "Smoke And Dagger", "Crack Shot", "Inner Strength", "Crush", "Tigron's Fury", "Field Study", "Mercy Kill", "Unerring", "Shrapnel", "Opportunity in Chaos", "Relentless Presence", "Scorn", "Corrosive Acid", "Life Exchange", "Yomi"];

var talent2 = ["Godslayer", "Slug Shot", "Temporal Divide", "Tempering", "Tinkerin", "Royal Subjects", "Bulk Up", "Exaction", "Dark Gifts", "Abyss Spike", "Fusillade", "Wormhole", "Formidible", "Cherish", "Maelstrom", "Rampant Blooming", "Pyromania", "Mother's Grace", "Goddess' Blessing", "Luminary", "Vortex Grip", "Reposition", "Adrenaline Junkie", "Discovery", "Eminence", "Cat Burglar", "Leviathan", "Spirit's Chosen", "Toot", "Hell or High Water", "Mega Potion", "Earthsplitter", "Restraint", "Rocket Barrage", "Improvised", "Soul Collector", "Recurve", "Debilitate", "Unauthorized Use", "Faustian Bargain", "Decimation", "Predatory Instincts", "Direct Current", "Burn Monster", "Omnipresence", "Cardio", "Suspect Everyone", "Deafening Silence", "Blastflower", "Sight Begets Strength", "Resonance", "Guillotine"];

var talent3 = ["Defiant Fist", "Fortress Breaker", "Deja Vu", "Eternal", "Fortify", "Accelerant", "Bounce House", "Big Game", "Stunning Visage", "Hurl", "Combustible", "Over the Moon", "Scorch", "Solar Blessing", "Totemic Ward", "Ferocity", "Splitting Ice", "Tremors", "Life Link", "Binary Star", "Storm of Bullets", "Eagle Eye", "Dragon Fangs", "Heroism", "Alacrity", "Rogue's Gambit", "Pluck", "Ripened Gourd", "Snack Attack", "Display of Force", "Combat Medic", "Subservience", "Focus", "Flux Generator", "Heads or Tails", "Agony", "Desert Silence", "Preparation", "Nocturnal", "Nothing Personal", "Undying", "Vicious Assault", "Thanks, Grandpa", "Hunting Party", "Enveloping Shadows", "Burst Mode", "Booby Trap", "Unyielding Pressure", "Nightshade", "Unnatural Persistence", "Focusing Lens", "Smolder"];

var items = ["Illuminate", "Resilience", "Guardian", "Haven", "Nimble", "Master Riding", "Morale Boost", "Chronos", "Rejuvenate", "Kill to Heal", "Life Rip", "Veteran", "Bulldozer", "Cauterize", "Deft Hands", "Wrecker"];
var champ;
var talent;

var rand;
var champID;
var randPH = [null, null, null]

//Create arrays holding the card values and locations.
var cardValues = [0, 0, 0, 0, 0];
var cardLocations = [0, 0, 0, 0, 0];
var cardX = [0, 0, 0, 0, 0];
var cardY = [0, 0, 0, 0, 0];

//This array holds all possible value combinations for cards.
const possibleValues = [[5,5,3,1,1],[5,3,3,3,1],[5,3,3,2,2],[5,4,3,2,1],[5,4,4,1,1],[4,4,4,2,1],[4,4,3,3,1],[4,4,3,2,2],[4,3,3,3,2],[3,3,3,3,3]];

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
	/* if (!isMobileDevice()) {
		//Put an event listener on the randomizer button so that it can be pressed on enter:
		document.getElementById("randomize()").addEventListener("keyup", function(event) {
			if (event.keyCode === 13) {
				setCookie(document.getElementById('newName').value + '|' + document.getElementById('newCategory').value.toLowerCase());
			}
		});
	}  */

	toggleCards(false);
	resizeCards();
};

window.addEventListener('resize', resizeCards);

//The big randomizer script
function randomize() {
	//Test alert
	//alert("Randomizing!");
	
	//Check if a randomizer is turned on. Return if not:
	if (!document.getElementById("champToggle").checked && !document.getElementById("itemToggle").checked && !document.getElementById("cardsToggle").checked) {
		alert("You don't have anything selected!");
		return;
	}
	
	//Check if the champion randomizer is toggled on and randomize if so:
	if (document.getElementById("champToggle").checked) {
		//alert("Champion Toggle is on");
		
		//Randomize the champion
		rand = Math.floor(Math.random()*champions.length);
		champID = rand;
		champ = champions[rand];
		document.getElementById("champ_image").src = champ + ".png";
	}
	
	//Check if the talent randomizer is toggled on and randomize if so:
	if (document.getElementById("talentToggle").checked) {
		var rand2 = Math.floor(Math.random()*3);
		switch (rand2) {
			case 0:
				talent = talent1[champID];
				break;
			case 1:
				talent = talent2[champID];
				break;
			case 2:
				talent = talent3[champID];
				break;
			default:
				talent = "Talent";
		}
		document.getElementById("talent").innerHTML = talent;
	} else if (!document.getElementById("talentToggle").checked && document.getElementById("champToggle").checked) {
		document.getElementById("talent").innerHTML = "Talent";
	}
	
	//Check if the item randomizer is turned on and randomize if so:
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
	
	if (document.getElementById("cardsToggle").checked) {
		//Randomly choose one of the possible value combinations.
		cardValues = possibleValues[Math.floor(Math.random()*10)];
		
		//Shuffle the values. The card value array is complete.
		shuffleArray(cardValues);
		
		//Apply the appropriate skin to each card.
		for (var i = 0; i < cardValues.length; i++) {
			document.getElementById("card_"+i).src="CardSelect"+cardValues[i]+".png";
		}
		
		//Randomize the position of each card.
		var tempLocation;
		for (var i = 0; i < cardLocations.length; i++) {
			tempLocation = Math.floor(Math.random()*16)+1;
			while (cardLocations.some(e => e === tempLocation)) {
				tempLocation = Math.floor(Math.random()*16)+1;
			}
			cardLocations[i] = tempLocation;
		}
		
		//Find the x and y value of each card.
		for (var i = 0; i < cardLocations.length; i++) {
			var l = cardLocations[i];
			//Find the x value of each card.
			switch (l) {
				case 1:
					cardX[i] = 0.0325;
					break;
				case 2 :
					cardX[i] = 0.1470;
					break;
				case 3:
					cardX[i] = 0.2626;
					break;
				case 4:
					cardX[i] = 0.3771;
					break;
				case 5:
					cardX[i] = 0.5123;
					break;
				case 6:
					cardX[i] = 0.6274;
					break;
				case 7:
					cardX[i] = 0.7424;
					break;
				case 8:
					cardX[i] = 0.8569;
					break;
				case 9:
					cardX[i] = 0.0325;
					break;
				case 10:
					cardX[i] = 0.1470;
					break;
				case 11:
					cardX[i] = 0.2626;
					break;
				case 12:
					cardX[i] = 0.3771;
					break;
				case 13:
					cardX[i] = 0.5123;
					break;
				case 14:
					cardX[i] = 0.6274;
					break;
				case 15:
					cardX[i] = 0.7424;
					break;
				case 16:
					cardX[i] = 0.8569;
					break;
				default:
					cardX[i] = 0;
			}
			document.getElementById("card_"+i).style.marginLeft = cardX[i]*document.getElementById("cards_img").width + "px";
			
			//Find the y value of each card.
			if (l < 9) {
				cardY[i] = 0.0838;
			} else if (l > 8) {
				cardY[i] = 0.5219;
			} else {
				cardY[i] = 0;
			}
			document.getElementById("card_"+i).style.marginTop = cardY[i]*document.getElementById("cards_img").height + "px";
		}
		//alert(cardX[0]*document.getElementById("cards_img").width + "px");
		//alert(cardX);
		//alert(cardLocations);
		//alert(cardValues);
		toggleCards(true);
	}
};



function shuffleArray(array) {
	//Durstenfeld shuffle
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

function resizeCards() {
	//Create an array storing all the elements from the card class.
	var cardsClass = document.getElementsByClassName("card");
	
	//Resize every one in accordance with the size of the main card deck.
	for (var i = 0; i < cardsClass.length; i++) {
		cardsClass[i].style.width = .11*document.getElementById("cards_img").width + "px";
		cardsClass[i].style.height = .398*document.getElementById("cards_img").height + "px";
		cardsClass[i].style.marginLeft = cardX[i]*document.getElementById("cards_img").width + "px";
		cardsClass[i].style.marginTop = cardY[i]*document.getElementById("cards_img").height + "px";
	}
}

function toggleCards(visible) {
	var cardsClass = document.getElementsByClassName("card");
	for (var i = 0; i < cardsClass.length; i++) {
		cardsClass[i].style.visibility = (visible ? "visible" : "hidden");
	}
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
			case "Azaan":
				while (items[rand] == "Guardian" || items[rand] == "Deft Hands") {
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