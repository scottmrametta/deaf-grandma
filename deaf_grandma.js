let prompt = require('prompt');
let goodbyeCounter = 0;

function deafGrandma() {
    console.log("HEY KID!");
    promptUser();
    return undefined;
}

function condResponse(userInput) {
    let response = "";
    if (userInput == "") {
        response = "WHAT?!";
    } else if (caseCheck(userInput) == false) {
        response = "SPEAK UP, KID!";
    } else if (userInput == "GOODBYE!" && goodbyeCounter == 0) {
        response = "LEAVING SO SOON?";
        goodbyeCounter++;
    } else if (userInput == "GOODBYE!" && goodbyeCounter >= 1) {
        response = "LATER, SKATER!";
        console.log(response);
        return response;
    } else {
        response = "NO, NOT SINCE 1946!";
    }
    console.log(response);
    promptUser();
    return response;
}

function caseCheck(userInput) {
    return userInput.toUpperCase() === userInput;
}

function promptUser() {
    prompt.start();
    prompt.get(['askGrandma'], function (err, result) {
        condResponse(result.askGrandma);
    });
}

deafGrandma();

module.exports = {deafGrandma, condResponse, caseCheck}
