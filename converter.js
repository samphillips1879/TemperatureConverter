



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



















var convertButton = document.getElementById("convertButton");





convertButton.addEventListener("click", determineConverter);






function determineConverter(clickEvent) {
	console.log("event", clickEvent);
}





function toCelsius () {

}





function toFahrenheit () {

}



