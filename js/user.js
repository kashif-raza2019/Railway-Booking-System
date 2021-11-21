const trainNumber = ["19323", "20432"];
const trainName = ["Indore-Nagpur Superfast", "Indore-Yashwantpur Superfast Express"];
const trainCode = ["INDB-NGP", "INDB-YSP"];

// Suggestion Function for Train on Key Up
function suggestTrainOnKeyUp() {
    const train = document.getElementById("train").value;
    const trainSuggestion = document.getElementById("train");
    
    
}

document.getElementById("train").addEventListener("keyup", suggestTrainOnKeyUp);