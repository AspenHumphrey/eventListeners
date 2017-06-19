let myArr = ["Hello", "Howdy", "Bonjuor", "S'up?"];
let phraseDiv = document.getElementById("greeting");

myArr.forEach( function(greeting) {
	let phraseString = `<div><h3>${greeting}, world!</h3></div>`
	phraseDiv.innerHTML += phraseDiv;
});