console.log("hey");

let outputDiv = document.getElementById("output");
let articleEl = document.getElementsByClassName("article-section");

//console.log(articleEl);

function handleSectionClick() {
	console.log(event);
	let elementText = event.target.innerHTML
	outputDiv.innerHTML = `you clicked on the ${elementText} section`
}

articleEl[0].addEventListener("click", handleSectionClick);

function sayYourName(name){
	console.log("My name is"+ name );
}

let piggie = document.getElementById("guinea-pig");

document.getElementById("add-color").addEventListener("click", function(){
	piggie.classList.toggle("blue");
	console.log(piggie, piggie.classList);
});

document.getElementById("make-large").addEventListener("click", function(){
	piggie.classList.toggle("bold");
	console.log(piggie, piggie.classList);
});

// document.getElementById("add-color").addEventListener("click", function(){
// 	piggie.classList.toggle("border");
// 	console.log(piggie, ciggie.classList);
// });

// document.getElementById("add-color").addEventListener("click", function(){
// 	piggie.classList.toggle("blue");
// 	console.log(piggie, piggie.classList);
// });





console.log("still going");


















