var colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)"
]
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");

var pickedColor = pickColor();

colorDisplay.textContent = pickedColor;

for (var i = 0; i<squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    
    // add clcik listeners to squares
    squares[i].addEventListener("click", function(){
        // grab color of clicked square
        var clickedColor = this.style.backgroundColor;
        // compare color to pickedColor
        if(clickedColor === pickedColor){
            messageDisplay.textContent = "correct";
            changeColors(clickedColor);
        } else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "try again";
        }
    });
    
}
// cambie nombre del argumento color a rightcolor
function changeColors(rightColor) {
    // recorre todos los cuadros
    for (var i = 0; i<squares.length; i++) {
        squares[i].style.backgroundColor = rightColor;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}