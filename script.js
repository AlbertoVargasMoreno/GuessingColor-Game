var colors = generateRandomColors(6);
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var header = document.querySelector("h1");  //cambie el nombre de la variable de h1 a header
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
            header.style.backgroundColor = clickedColor;
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
// cambie el argumento num por howMany
function generateRandomColors(howMany) {
    // make array
    var array = [];
    // repeat 'howMany' times
    for(var i=0; i<howMany; i++) {
        array.push(randomColor());
    }
    return array;
}

function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}