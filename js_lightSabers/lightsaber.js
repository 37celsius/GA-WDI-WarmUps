var button = document.getElementById("findOut");


button.addEventListener("click", function(){
	var inputText = document.getElementById("askMe").value;
	inputText = inputText.toLowerCase();
	var answer = document.getElementById("answer");

	if(inputText === "zach"){
		answer.innerHTML = "Zach owns 18 Lightsaber";
	} else {
		answer.innerHTML = "This " + inputText + " does not own lightsaber";
	}

});