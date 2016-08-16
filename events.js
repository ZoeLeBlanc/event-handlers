var sectionClicked = document.getElementsByClassName("article-section");
var outputTarget = document.getElementById("output-target");
var h1Mouseover = document.getElementById("page-title");
var keypress = document.getElementById("keypress-input");
var guineaPig = document.getElementById("guinea-pig");
var addColorBtn = document.getElementById("add-color");
var hulkifyBtn = document.getElementById("make-large");

//Exercise 1 for sections

function handleClick(event) {
	var sectionText = event.target.innerHTML; 
	outputTarget.innerHTML = "You clicked on the "  + sectionText + " section.";
}

for (var i = 0; i < sectionClicked.length; i++) {
  		sectionClicked.item(i).addEventListener("click", handleClick);
 }
//Exercise 2 for H1 mouseover

function h1MouseOver(event) {
	outputTarget.innerHTML = "You moved your mouse over the header.";
} 

h1Mouseover.addEventListener("mouseover", h1MouseOver);

function h1MouseOut(event) {
	outputTarget.innerHTML = "You left me!!";
}
h1Mouseover.addEventListener("mouseout", h1MouseOut);
//Exercise 3 for input fields

keypress.addEventListener("keyup", function(event) {
	outputTarget.innerHTML = event.target.value;
});

//Exercise 4 add color to guinea pig
addColorBtn.addEventListener("click", 
	function() {
		guineaPig.classList = "";
		guineaPig.classList.add("guineaPigColor");
	});

//Exercise 5 add font to guinea pig
hulkifyBtn.addEventListener("click", 
	function() {
		guineaPig.classList = "";
		guineaPig.classList.add("guineaPigSize");
	});
//Exercise 6 add border to guinea pig
document.getElementById("add-border").addEventListener("click",
	function() {
		guineaPig.classList = "";
		guineaPig.classList.add("guineaPigBorder");
	});
//Exercise 7 round border to guinea pig
document.getElementById("add-rounding").addEventListener("click", 
	function() {
		guineaPig.classList = "";
		guineaPig.classList.add("guineaPigBorder", "guineaPigRound");
	});




