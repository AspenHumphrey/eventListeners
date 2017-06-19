let myArr = ["Hello", "Howdy", "Bonjuor", "S'up?"];
let phraseDOM = document.getElementById("greeting");

myArr.forEach( function(greeting, index) {
	let phraseString = `<div id="phrase-${index +1}"><h3>${greeting}, world!</h3></div>`
	let phraseDiv = document.createElement("div");
	phraseDiv.innerHTML += phraseString;
	phraseDOM.appendChild(phraseDiv);
	document.getElementById(`phrase-${index +1}`).addEventListener("click", function() {
		event.target.classList.add("blue");
	});
});