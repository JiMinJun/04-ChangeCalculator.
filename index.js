var isValidInput = function(change, cost) {
	
	if (change === "" || cost === "") {
		alert("One or more of the fields are empty. Please submit it again");
		return false;
	};
	if (isNaN(change) || isNaN(cost)){
		alert("The number you entered is not a valid input.");
		return false;
	}
	return true;
}

$("#calculateButton").click(function() {
	var change = parseFloat($("#change").val());
	var cost = parseFloat($("#cost").val());
	var quarterWorth = 0.25;
	var dimesWorth = 0.10;
	var nickelsWorth = 0.05;
	var penniesWorth = 0.01;

	var totalOwed = Math.round((change - cost)*100)/100;
	var dollarsOwed = Math.floor(totalOwed);
	var changeOwed = totalOwed % 1;
	var quartersOwed = Math.floor(changeOwed/quarterWorth);
	var dimesOwed = Math.floor((changeOwed % quarterWorth)/dimesWorth);
	var nickelsOwed = Math.floor(((changeOwed % quarterWorth) % dimesWorth) / nickelsWorth);
	var penniesOwed = ((((changeOwed % quarterWorth) % dimesWorth) % nickelsWorth) / penniesWorth);
	penniesOwed = Math.round(penniesOwed*100)/100;

	if (!isValidInput(change, cost)) {
		return;
	}
	else {
		$("#totalOwed").text("Total Owed: " + totalOwed);
		$("#dollarsOwed").text(dollarsOwed);
		$("#quartersOwed").text(quartersOwed);
		$("#dimesOwed").text(dimesOwed);
		$("#nickelsOwed").text(nickelsOwed);
		$("#penniesOwed").text(penniesOwed);
	}

})