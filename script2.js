//Weathering

var diceweather = {
	sides: 20,
	roll: function () {
			var randomNumber = Math.floor(Math.random() * this.sides) +1;
			return randomNumber;
	}
}

var diceweathermod = {
	sides: 4,
	roll: function () {
			var randomNumber = Math.floor(Math.random() * this.sides) +1;
			return randomNumber;
	}
}


function printNumber(number) {
	var rolldisplay = document.getElementById('rolldisplay');
	rolldisplay.innerHTML = number;
}

var weather = document.getElementById('weather');

weather.onclick = function() {
	var result1 = diceweather.roll();
	var skill = ""
	var result2 = result1+' '+skill
	var result3 = diceweathermod.roll();
	var result4 = result2+' + '+result3
	printNumber(result4);
};

//Law

var dicelaw = {
	sides: 20,
	roll: function () {
			var randomNumber = Math.floor(Math.random() * this.sides) +1;
			return randomNumber;
	}
}

var dicelawmod = {
	sides: 4,
	roll: function () {
			var randomNumber = Math.floor(Math.random() * this.sides) +1;
			return randomNumber;
	}
}


function printNumber(number) {
	var rolldisplay = document.getElementById('rolldisplay');
	rolldisplay.innerHTML = number;
}

var law = document.getElementById('law');

law.onclick = function() {
	var result1 = dicelaw.roll();
	var skill = ""
	var result2 = result1+' '+skill
	var result3 = dicelawmod.roll();
	var result4 = result2+' + '+result3
	printNumber(result4);
};

//Brawl

var dicebrawl = {
	sides: 20,
	roll: function () {
			var randomNumber = Math.floor(Math.random() * this.sides) +1;
			return randomNumber;
	}
}


function printNumber(number) {
	var rolldisplay = document.getElementById('rolldisplay');
	rolldisplay.innerHTML = number;
}

var brawl = document.getElementById('brawl');

brawl.onclick = function() {
	var result1 = dicebrawl.roll();
	var skill = ""
	var result2 = result1+' '+skill
	printNumber(result2);
};

//Crafting

var dicecrafting = {
	sides: 20,
	roll: function () {
			var randomNumber = Math.floor(Math.random() * this.sides) +1;
			return randomNumber;
	}
}


function printNumber(number) {
	var rolldisplay = document.getElementById('rolldisplay');
	rolldisplay.innerHTML = number;
}

var crafting = document.getElementById('crafting');

crafting.onclick = function() {
	var result1 = dicecrafting.roll();
	var skill = ""
	var result2 = result1+' '+skill
	printNumber(result2);
};

//Detection

var dicedetect = {
	sides: 20,
	roll: function () {
			var randomNumber = Math.floor(Math.random() * this.sides) +1;
			return randomNumber;
	}
}

var dicedetectmod = {
	sides: 6,
	roll: function () {
			var randomNumber = Math.floor(Math.random() * this.sides) +1;
			return randomNumber;
	}
}


function printNumber(number) {
	var rolldisplay = document.getElementById('rolldisplay');
	rolldisplay.innerHTML = number;
}

var detect = document.getElementById('detect');

detect.onclick = function() {
	var result1 = dicedetect.roll();
	var skill = ""
	var result2 = result1+' '+skill
	var result3 = dicedetectmod.roll();
	var result4 = result2+' + '+result3
	printNumber(result4);
};

//Gymnastics

var dicegymnast = {
	sides: 20,
	roll: function () {
			var randomNumber = Math.floor(Math.random() * this.sides) +1;
			return randomNumber;
	}
}

var dicegymnastmod = {
	sides: 4,
	roll: function () {
			var randomNumber = Math.floor(Math.random() * this.sides) +1;
			return randomNumber;
	}
}


function printNumber(number) {
	var rolldisplay = document.getElementById('rolldisplay');
	rolldisplay.innerHTML = number;
}

var gymnast = document.getElementById('gymnast');

gymnast.onclick = function() {
	var result1 = dicegymnast.roll();
	var skill = ""
	var result2 = result1+' '+skill
	var result3 = dicegymnastmod.roll();
	var result4 = result2+' + '+result3
	printNumber(result4);
};

//Heroics

var diceheroics = {
	sides: 20,
	roll: function () {
			var randomNumber = Math.floor(Math.random() * this.sides) +1;
			return randomNumber;
	}
}


function printNumber(number) {
	var rolldisplay = document.getElementById('rolldisplay');
	rolldisplay.innerHTML = number;
}

var heroics = document.getElementById('heroics');

heroics.onclick = function() {
	var result1 = diceheroics.roll();
	var skill = ""
	var result2 = result1+' '+skill
	printNumber(result2);
};

//Sneaking

var dicesneaking = {
	sides: 20,
	roll: function () {
			var randomNumber = Math.floor(Math.random() * this.sides) +1;
			return randomNumber;
	}
}

var dicesneakingmod = {
	sides: 4,
	roll: function () {
			var randomNumber = Math.floor(Math.random() * this.sides) +1;
			return randomNumber;
	}
}


function printNumber(number) {
	var rolldisplay = document.getElementById('rolldisplay');
	rolldisplay.innerHTML = number;
}

var sneaking = document.getElementById('sneaking');

sneaking.onclick = function() {
	var result1 = dicesneaking.roll();
	var skill = ""
	var result2 = result1+' '+skill
	var result3 = dicesneakingmod.roll();
	var result4 = result2+' + '+result3
	printNumber(result4);
};

//Benevolence

var dicebenev = {
	sides: 20,
	roll: function () {
			var randomNumber = Math.floor(Math.random() * this.sides) +1;
			return randomNumber;
	}
}

var dicebenevmod = {
	sides: 6,
	roll: function () {
			var randomNumber = Math.floor(Math.random() * this.sides) +1;
			return randomNumber;
	}
}


function printNumber(number) {
	var rolldisplay = document.getElementById('rolldisplay');
	rolldisplay.innerHTML = number;
}

var benev = document.getElementById('benev');

benev.onclick = function() {
	var result1 = dicebenev.roll();
	var skill = ""
	var result2 = result1+' '+skill
	var result3 = dicebenevmod.roll();
	var result4 = result2+' + '+result3
	printNumber(result4);
};

//Boundary

var diceboundary = {
	sides: 20,
	roll: function () {
			var randomNumber = Math.floor(Math.random() * this.sides) +1;
			return randomNumber;
	}
}

function printNumber(number) {
	var rolldisplay = document.getElementById('rolldisplay');
	rolldisplay.innerHTML = number;
}

var boundary = document.getElementById('boundary');

boundary.onclick = function() {
	var result1 = diceboundary.roll();
	var skill = ""
	var result2 = result1+' '+skill
	printNumber(result2);
};

//Discipline

var dicediscipline = {
	sides: 20,
	roll: function () {
			var randomNumber = Math.floor(Math.random() * this.sides) +1;
			return randomNumber;
	}
}

function printNumber(number) {
	var rolldisplay = document.getElementById('rolldisplay');
	rolldisplay.innerHTML = number;
}

var discipline = document.getElementById('discipline');

discipline.onclick = function() {
	var result1 = dicediscipline.roll();
	var skill = "- 1"
	var result2 = result1+' '+skill
	printNumber(result2);
};

//Instinct

var diceinstinct = {
	sides: 20,
	roll: function () {
			var randomNumber = Math.floor(Math.random() * this.sides) +1;
			return randomNumber;
	}
}

var diceinstinctmod = {
	sides: 4,
	roll: function () {
			var randomNumber = Math.floor(Math.random() * this.sides) +1;
			return randomNumber;
	}
}


function printNumber(number) {
	var rolldisplay = document.getElementById('rolldisplay');
	rolldisplay.innerHTML = number;
}

var instinct = document.getElementById('instinct');

instinct.onclick = function() {
	var result1 = diceinstinct.roll();
	var skill = ""
	var result2 = result1+' '+skill
	var result3 = diceinstinctmod.roll();
	var result4 = result2+' + '+result3
	printNumber(result4);
};

//Malevolence

var dicemalev = {
	sides: 20,
	roll: function () {
			var randomNumber = Math.floor(Math.random() * this.sides) +1;
			return randomNumber;
	}
}

function printNumber(number) {
	var rolldisplay = document.getElementById('rolldisplay');
	rolldisplay.innerHTML = number;
}

var malev = document.getElementById('malev');

malev.onclick = function() {
	var result1 = dicemalev.roll();
	var skill = ""
	var result2 = result1+' '+skill
	printNumber(result2);
};

//Recognition

var dicerecognition = {
	sides: 20,
	roll: function () {
			var randomNumber = Math.floor(Math.random() * this.sides) +1;
			return randomNumber;
	}
}

function printNumber(number) {
	var rolldisplay = document.getElementById('rolldisplay');
	rolldisplay.innerHTML = number;
}

var recognition = document.getElementById('recognition');

recognition.onclick = function() {
	var result1 = dicerecognition.roll();
	var skill = ""
	var result2 = result1+' '+skill
	printNumber(result2);
};

//Utility

var diceutility = {
	sides: 20,
	roll: function () {
			var randomNumber = Math.floor(Math.random() * this.sides) +1;
			return randomNumber;
	}
}

var diceutilitymod = {
	sides: 6,
	roll: function () {
			var randomNumber = Math.floor(Math.random() * this.sides) +1;
			return randomNumber;
	}
}


function printNumber(number) {
	var rolldisplay = document.getElementById('rolldisplay');
	rolldisplay.innerHTML = number;
}

var utility = document.getElementById('utility');

utility.onclick = function() {
	var result1 = diceutility.roll();
	var skill = ""
	var result2 = result1+' '+skill
	var result3 = diceutilitymod.roll();
	var result4 = result2+' + '+result3
	printNumber(result4);
};

//Practice

var dicepractice = {
	sides: 20,
	roll: function () {
			var randomNumber = Math.floor(Math.random() * this.sides) +1;
			return randomNumber;
	}
}

var dicepracticemod = {
	sides: 6,
	roll: function () {
			var randomNumber = Math.floor(Math.random() * this.sides) +1;
			return randomNumber;
	}
}


function printNumber(number) {
	var rolldisplay = document.getElementById('rolldisplay');
	rolldisplay.innerHTML = number;
}

var practice = document.getElementById('practice');

practice.onclick = function() {
	var result1 = dicepractice.roll();
	var skill = ""
	var result2 = result1+' '+skill
	var result3 = dicepracticemod.roll();
	var result4 = result2+' + '+result3
	printNumber(result4);
};

//Spell Attacks

var dicespellatk = {
	sides: 20,
	roll: function () {
			var randomNumber = Math.floor(Math.random() * this.sides) +1;
			return randomNumber;
	}
}


function printNumber(number) {
	var rolldisplay = document.getElementById('rolldisplay');
	rolldisplay.innerHTML = number;
}

var spellatk = document.getElementById('spellatk');

spellatk.onclick = function() {
	var result1 = dicespellatk.roll();
	var skill = "+ 3"
	var result2 = result1+' '+skill
	printNumber(result2);
};

//Dagger Damage

var dicedagger = {
	sides: 6,
	roll: function () {
			var randomNumber = Math.floor(Math.random() * this.sides) +1;
			return randomNumber;
	}
}


function printNumber(number) {
	var rolldisplay = document.getElementById('rolldisplay');
	rolldisplay.innerHTML = number;
}

var dagger = document.getElementById('dagger');

dagger.onclick = function() {
	var result1 = dicedagger.roll();
	var skill = ""
	var result2 = result1+' '+skill
	printNumber(result2);
};

//Spell Practice

var dicenewspell = {
	sides: 20,
	roll: function () {
			var randomNumber = Math.floor(Math.random() * this.sides) +1;
			return randomNumber;
	}
}

var dicenewspellmod = {
	sides: 6,
	roll: function () {
			var randomNumber = Math.floor(Math.random() * this.sides) +1;
			return randomNumber;
	}
}


function printNumber(number) {
	var rolldisplay = document.getElementById('rolldisplay');
	rolldisplay.innerHTML = number;
}

var newspell = document.getElementById('newspell');

newspell.onclick = function() {
	var result1 = dicenewspell.roll();
	var skill = ""
	var result2 = result1+' '+skill
	var result3 = dicenewspellmod.roll();
	var result4 = result2+' + '+result3
	printNumber(result4);
};

//Recovering Willpower

var dicerecover = {
	sides: 4,
	roll: function () {
			var randomNumber = Math.floor(Math.random() * this.sides) +1;
			return randomNumber;
	}
}


function printNumber(number) {
	var rolldisplay = document.getElementById('rolldisplay');
	rolldisplay.innerHTML = number;
}

var willrecover = document.getElementById('willrecover');

willrecover.onclick = function() {
	var result1 = dicerecover.roll();
	var skill = "+ 2"
	var result2 = result1+' '+skill
	printNumber(result2);
};

//Academics

var diceacademics = {
	sides: 20,
	roll: function () {
			var randomNumber = Math.floor(Math.random() * this.sides) +1;
			return randomNumber;
	}
}

var diceacademicsmod = {
	sides: 4,
	roll: function () {
			var randomNumber = Math.floor(Math.random() * this.sides) +1;
			return randomNumber;
	}
}


function printNumber(number) {
	var rolldisplay = document.getElementById('rolldisplay');
	rolldisplay.innerHTML = number;
}

var academics = document.getElementById('academics');

academics.onclick = function() {
	var result1 = diceacademics.roll();
	var skill = ""
	var result2 = result1+' '+skill
	var result3 = diceacademicsmod.roll();
	var result4 = result2+' + '+result3
	printNumber(result4);
};

//Charms

var dicecharms = {
	sides: 20,
	roll: function () {
			var randomNumber = Math.floor(Math.random() * this.sides) +1;
			return randomNumber;
	}
}

var dicecharmsmod = {
	sides: 4,
	roll: function () {
			var randomNumber = Math.floor(Math.random() * this.sides) +1;
			return randomNumber;
	}
}


function printNumber(number) {
	var rolldisplay = document.getElementById('rolldisplay');
	rolldisplay.innerHTML = number;
}

var charms = document.getElementById('charms');

charms.onclick = function() {
	var result1 = dicecharms.roll();
	var skill = ""
	var result2 = result1+' '+skill
	var result3 = dicecharmsmod.roll();
	var result4 = result2+' + '+result3
	printNumber(result4);
};

//Performance

var diceperform = {
	sides: 20,
	roll: function () {
			var randomNumber = Math.floor(Math.random() * this.sides) +1;
			return randomNumber;
	}
}

var diceperformmod = {
	sides: 4,
	roll: function () {
			var randomNumber = Math.floor(Math.random() * this.sides) +1;
			return randomNumber;
	}
}


function printNumber(number) {
	var rolldisplay = document.getElementById('rolldisplay');
	rolldisplay.innerHTML = number;
}

var perform = document.getElementById('perform');

perform.onclick = function() {
	var result1 = diceperform.roll();
	var skill = ""
	var result2 = result1+' '+skill
	var result3 = diceperformmod.roll();
	var result4 = result2+' + '+result3
	printNumber(result4);
};

//Research

var diceresearch = {
	sides: 20,
	roll: function () {
			var randomNumber = Math.floor(Math.random() * this.sides) +1;
			return randomNumber;
	}
}

var diceresearchmod = {
	sides: 6,
	roll: function () {
			var randomNumber = Math.floor(Math.random() * this.sides) +1;
			return randomNumber;
	}
}


function printNumber(number) {
	var rolldisplay = document.getElementById('rolldisplay');
	rolldisplay.innerHTML = number;
}

var research = document.getElementById('research');

research.onclick = function() {
	var result1 = diceresearch.roll();
	var skill = ""
	var result2 = result1+' '+skill
	var result3 = diceresearchmod.roll();
	var result4 = result2+' + '+result3
	printNumber(result4);
};

//Sense

var dicesense = {
	sides: 20,
	roll: function () {
			var randomNumber = Math.floor(Math.random() * this.sides) +1;
			return randomNumber;
	}
}

var dicesensemod = {
	sides: 4,
	roll: function () {
			var randomNumber = Math.floor(Math.random() * this.sides) +1;
			return randomNumber;
	}
}


function printNumber(number) {
	var rolldisplay = document.getElementById('rolldisplay');
	rolldisplay.innerHTML = number;
}

var sense = document.getElementById('sense');

sense.onclick = function() {
	var result1 = dicesense.roll();
	var skill = ""
	var result2 = result1+' '+skill
	var result3 = dicesensemod.roll();
	var result4 = result2+' + '+result3
	printNumber(result4);
};