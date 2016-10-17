



var input = document.getElementById("userInput");

// console.log("input", input)

var clearButton = document.getElementById("clear");

// console.log("clearButton", clearButton)

clearButton.addEventListener("click", clearUserInput);

function clearUserInput () {
	// document.getElementById("userInput").value = " ";
	input.value = " ";
}

// console.log("input.innerHTML according to js", input.innerHTML)













var inputAsNumber 

function logInputNumber() {
	inputValue = document.getElementById("userInput").value;
	inputAsNumber = parseInt(inputValue);
	console.log("inputAsNumber", inputAsNumber); 
}




var convertButton = document.getElementById("convertButton");

// var 


// I don't quite understand why these next few lines work     '

input.addEventListener("keypress", function (e) {
  if (13 == e.keyCode) {
     conversionSelect();
  }
});


// ....... but they do, and that's good enough for me for now


// convertButton.addEventListener("click", determineConverter);
convertButton.addEventListener("click", conversionSelect);



var fahrenheit = document.getElementById("fahrenheitRadio");
var celsius = document.getElementById("celciusRadio");


// function determineConverter() {
// 	if (convertTo === "") {}
// }



function checkingSubmit() {
	console.log("the user input text input has been submitted");
}

function toCelsius () {
	inputValue = document.getElementById("userInput").value;
	inputAsNumber = parseInt(inputValue);
	console.log("inputAsNumber", inputAsNumber); 
	var celsiusOutput = (inputAsNumber -32) * (5/9);
	console.log("celsiusOutput =", celsiusOutput);
	return celsiusOutput;
}


function toFahrenheit () {
	inputValue = document.getElementById("userInput").value;
	inputAsNumber = parseInt(inputValue);
	console.log("inputAsNumber", inputAsNumber); 
	var fahrenheitOutput = inputAsNumber * (9 / 5) + 32;
	console.log("fahrenheitOutput =", fahrenheitOutput);
	return fahrenheitOutput;
}


var DOMOutput = document.getElementById("tempOutputPlaceholder")
// var tempScale;
var tempOutput;

function conversionSelect() {
		if (fahrenheit.checked === true) {
			console.log("fahrenheit is selected");
			tempOutput = toFahrenheit();
			DOMOutput.innerHTML = tempOutput + " fahrenheit";
			console.log(tempOutput);
			if (tempOutput > 90) {
				DOMOutput.style.color = "red";
			} else if (tempOutput < 32) {
				DOMOutput.style.color = "blue";
			} else {
				DOMOutput.style.color = "green";
			}
		} else if (celsius.checked === true) {
			console.log("celcius is checked");
			tempOutput = toCelsius();
			DOMOutput.innerHTML = tempOutput + " celsius";
			if (tempOutput > 32) {
				DOMOutput.style.color = "red";
			} else if (tempOutput < 0) {
				DOMOutput.style.color = "blue";
			} else {
				DOMOutput.style.color = "green";
			}

		}
	// alert(tempOutput);
	// DOMOutput.innerHTML = tempOutput + ;

	// if (tempOutput{
	// 	DOMOutput.style.color = red

	// }
}



var convertTo = document.getElementById("");


// 	var tempScale = document.getElementById("scaleRadioButtons").innerH;
// 	console.log(tempScale);
// 














