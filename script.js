var css = document.querySelector(".output");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var btn = document.querySelector(".btn");
const colorStart1 = color1.value;
const colorStart2 = color2.value;

function colorStart(){
	body.style.background = 
	"linear-gradient(to bottom right, "+colorStart1+", "+colorStart2+")";
	css.textContent = body.style.background + ";";
}

function setGradient(){
	body.style.background = 
	"linear-gradient(to bottom right,"+color1.value+", "+color2.value+")";
	css.textContent = body.style.background + ";";
}

function setRandomGradient(){
	var x = Math.floor(Math.random() * 256);
	var y = Math.floor(Math.random() * 256);
	var z = Math.floor(Math.random() * 256);
	var x1 = Math.floor(Math.random() * 256);
	var y1 = Math.floor(Math.random() * 256);
	var z1 = Math.floor(Math.random() * 256);
	var colorRnd1 = "rgb(" + x + "," + y + "," + z + ")";
	var colorRnd2 = "rgb(" + x1 + "," + y1 + "," + z1 + ")";
	body.style.background = "linear-gradient(to bottom right,"+colorRnd1+", "+colorRnd2+")";
	css.textContent = body.style.background + ";";
	}

colorStart();

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

btn.addEventListener("click", setRandomGradient);
