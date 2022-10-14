//D2

var dice2 = {
  sides: 2,
  roll: function () {
    var randomNumber = Math.floor(Math.random() * this.sides) + 1;
    return randomNumber;
  }
}

function printNumber(number) {
  var rolldisplay = document.getElementById('rolldisplay');
  rolldisplay.innerHTML = number;
}

var button2 = document.getElementById('button2');

button2.onclick = function() {
  var result = dice2.roll();
  printNumber(result);
};

//D4

var dice4 = {
  sides: 4,
  roll: function () {
    var randomNumber = Math.floor(Math.random() * this.sides) + 1;
    return randomNumber;
  }
}

function printNumber(number) {
  var rolldisplay = document.getElementById('rolldisplay');
  rolldisplay.innerHTML = number;
}

var button4 = document.getElementById('button4');

button4.onclick = function() {
  var result = dice4.roll();
  printNumber(result);
};

//D6

var dice6 = {
  sides: 6,
  roll: function () {
    var randomNumber = Math.floor(Math.random() * this.sides) + 1;
    return randomNumber;
  }
}

function printNumber(number) {
  var rolldisplay = document.getElementById('rolldisplay');
  rolldisplay.innerHTML = number;
}

var button6 = document.getElementById('button6');

button6.onclick = function() {
  var result = dice6.roll();
  printNumber(result);
};

//D8

var dice8 = {
  sides: 8,
  roll: function () {
    var randomNumber = Math.floor(Math.random() * this.sides) + 1;
    return randomNumber;
  }
}

function printNumber(number) {
  var rolldisplay = document.getElementById('rolldisplay');
  rolldisplay.innerHTML = number;
}

var button8 = document.getElementById('button8');

button8.onclick = function() {
  var result = dice8.roll();
  printNumber(result);
};

//D10

var dice10 = {
  sides: 10,
  roll: function () {
    var randomNumber = Math.floor(Math.random() * this.sides) + 1;
    return randomNumber;
  }
}

function printNumber(number) {
  var rolldisplay = document.getElementById('rolldisplay');
  rolldisplay.innerHTML = number;
}

var button10 = document.getElementById('button10');

button10.onclick = function() {
  var result = dice10.roll();
  printNumber(result);
};

//D12

var dice12 = {
  sides: 12,
  roll: function () {
    var randomNumber = Math.floor(Math.random() * this.sides) + 1;
    return randomNumber;
  }
}

function printNumber(number) {
  var rolldisplay = document.getElementById('rolldisplay');
  rolldisplay.innerHTML = number;
}

var button12 = document.getElementById('button12');

button12.onclick = function() {
  var result = dice12.roll();
  printNumber(result);
};

//D20

var dice20 = {
  sides: 20,
  roll: function () {
    var randomNumber = Math.floor(Math.random() * this.sides) + 1;
    return randomNumber;
  }
}

function printNumber(number) {
  var rolldisplay = document.getElementById('rolldisplay');
  rolldisplay.innerHTML = number;
}

var button20 = document.getElementById('button20');

button20.onclick = function() {
  var result = dice20.roll();
  printNumber(result);
};

//Core Mind

var dicemind = {
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

var mind = document.getElementById('mind');

mind.onclick = function() {
	var result1 = dicemind.roll();
	var skill = ""
	var result2 = result1+' '+skill
	printNumber(result2);
};

//Core Might

var dicemight = {
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

var might = document.getElementById('might');

might.onclick = function() {
	var result1 = dicemight.roll();
	var skill = "- 1"
	var result2 = result1+' '+skill
	printNumber(result2);
};

//Core Magic

var dicemagic = {
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

var magic = document.getElementById('magic');

magic.onclick = function() {
	var result1 = dicemagic.roll();
	var skill = "+ 2"
	var result2 = result1+' '+skill
	printNumber(result2);
};

//Intellect Ability

var diceintellect = {
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

var intellect = document.getElementById('intellect');

intellect.onclick = function() {
	var result1 = diceintellect.roll();
	var skill = "+ 3"
	var result2 = result1+' '+skill
	printNumber(result2);
};

//Social Ability

var dicesocial = {
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

var social = document.getElementById('social');

social.onclick = function() {
	var result1 = dicesocial.roll();
	var skill = "+ 2"
	var result2 = result1+' '+skill
	printNumber(result2);
};

//Brawn Ability

var dicebrawn = {
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

var brawn = document.getElementById('brawn');

brawn.onclick = function() {
	var result1 = dicebrawn.roll();
	var skill = "- 3"
	var result2 = result1+' '+skill
	printNumber(result2);
};

//Endurance Ability

var diceendur = {
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

var endurance = document.getElementById('endurance');

endurance.onclick = function() {
	var result1 = diceendur.roll();
	var skill = "- 1"
	var result2 = result1+' '+skill
	printNumber(result2);
};

//Active Ability

var diceactive = {
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

var active = document.getElementById('active');

active.onclick = function() {
	var result1 = diceactive.roll();
	var skill = "+ 3"
	var result2 = result1+' '+skill
	printNumber(result2);
};

//Passive Ability

var dicepassive = {
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

var passive = document.getElementById('passive');

passive.onclick = function() {
	var result1 = dicepassive.roll();
	var skill = "+ 2"
	var result2 = result1+' '+skill
	printNumber(result2);
};

//Dodge

var dicedodge = {
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

var dodge = document.getElementById('dodge');

dodge.onclick = function() {
	var result1 = dicedodge.roll();
	var skill = "- 1"
	var result2 = result1+' '+skill
	printNumber(result2);
};

//Resistance

var diceresist = {
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

var resist = document.getElementById('resist');

resist.onclick = function() {
	var result1 = diceresist.roll();
	var skill = "- 1"
	var result2 = result1+' '+skill
	printNumber(result2);
};

//Fight (Physical Combat & Melee)

var dicefight = {
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

var fight = document.getElementById('fight');

fight.onclick = function() {
	var result1 = dicefight.roll();
	var skill = "- 3"
	var result2 = result1+' '+skill
	printNumber(result2);
};

//Attack (Ranged Weapons)

var diceattack = {
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

var attack = document.getElementById('attack');

attack.onclick = function() {
	var result1 = diceattack.roll();
	var skill = "- 1"
	var result2 = result1+' '+skill
	printNumber(result2);
};
