var numOfSquares = 6;
var colors = [];
var pickedColor;

var squares = document.querySelectorAll(".squares");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
	//mode buttons
	for (var i = 0; i< modeButtons.length; i++){
	modeButtons[i].addEventListener("click", function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");
		this.textContent === "Easy"? numOfSquares =3 : numOfSquares = 6;
		reset();

		});
	}

	for(var i = 0; i < squares.length; i++){
	//add initial colors to squares
	squares[i].style.backgroundColor = colors[i];

	//add click listeners to squares
	squares[i].addEventListener("click", function(){
		//grab color of clicked square
		var clickedColor = this.style.backgroundColor;
		//compare color to pickedColor
		if(clickedColor === pickedColor){
			messageDisplay.textContent = "Correct";
			resetButton.textContent = "Play Again?";
			changeColors(pickedColor);
			h1.style.backgroundColor = pickedColor;
		}else{
			this.style.backgroundColor = "transparent";
			messageDisplay.textContent = "Try Again";
		}
	});
	}	

	reset();

}



function reset(){
	colors = generateRandomColor(numOfSquares);
	//pick a new random color
	pickedColor = pickColor();
	//change colorDispay to match
	colorDisplay.textContent = pickedColor;
	this.textContent = "New Colors";
	messageDisplay.textContent = "";
	//change colors of squares
	for (var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}else{
			squares[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "#DEB887";
}

resetButton.addEventListener("click", function(){
	//generate all new colors
	colors = generateRandomColor(numOfSquares);
	//pick a new random color
	pickedColor = pickColor();
	//change colorDispay to match
	colorDisplay.textContent = pickedColor;
	this.textContent = "New Colors";
	messageDisplay.textContent = "";
	//change colors of squares
	for (var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
	}

	h1.style.backgroundColor = "#DEB887";
})

function changeColors(color){
	//loop through all squares
	for (var i = 0; i<squares.length; i++){
		//change each color to match the given color
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random()*colors.length);
	return colors[random];
}

function generateRandomColor(num){
	//make an array
	var arr = [];
	//add num random colors to array
	for (var i = 0; i<num; i++){
		arr.push(randomColor());
	}
	//return that array
	return arr;
}

function randomColor(){
	//pick red
	var red = Math.floor(Math.random()*256);
	//pick green
	var green = Math.floor(Math.random()*256);
	//pick blue
	var blue = Math.floor(Math.random()*256);
	return "rgb(" + red +", "+ green + ", " + blue +")";
}