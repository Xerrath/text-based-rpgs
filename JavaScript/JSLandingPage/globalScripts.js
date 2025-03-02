const gameArea = document.getElementById("game-area");
const gameOptions = document.getElementById("game-options");
const gameReset = document.getElementById("game-reset-wrapper");

let countDownTimer;
let currentGameArray;

function generateMultipleChoiceOptions(a, nFA, b, nFB, c, nFC, d, nFD){
    let rows = document.getElementsByClassName("row-options");

    let buttonContainerA = document.createElement("div");
    let buttonContainerB = document.createElement("div");
    let buttonContainerC = document.createElement("div");
    let buttonContainerD = document.createElement("div");
    let gameButtonA = document.createElement("a");
    let gameButtonB = document.createElement("a");
    let gameButtonC = document.createElement("a");
    let gameButtonD = document.createElement("a");

    buttonContainerA.classList.add("game-button-container", "options-button-wrapper");
    buttonContainerB.classList.add("game-button-container", "options-button-wrapper");
    buttonContainerC.classList.add("game-button-container", "options-button-wrapper");
    buttonContainerD.classList.add("game-button-container", "options-button-wrapper");

    buttonContainerA.setAttribute('id', "button-container-a");
    buttonContainerB.setAttribute('id', "button-container-b");
    buttonContainerC.setAttribute('id', "button-container-c");
    buttonContainerD.setAttribute('id', "button-container-d");

    gameButtonA.classList.add("game-button", "options-button");
    gameButtonB.classList.add("game-button", "options-button");
    gameButtonC.classList.add("game-button", "options-button");
    gameButtonD.classList.add("game-button", "options-button");

    gameButtonA.setAttribute('id', "button-option-a");
    gameButtonB.setAttribute('id', "button-option-b");
    gameButtonC.setAttribute('id', "button-option-c");
    gameButtonD.setAttribute('id', "button-option-d");

    gameButtonA.addEventListener('click', function() {
        multiChoiceAction('a', nFA);
    });
    gameButtonB.addEventListener('click', function() {
        multiChoiceAction('b', nFB);
    });
    gameButtonC.addEventListener('click', function() {
        multiChoiceAction('c', nFC);
    });
    gameButtonD.addEventListener('click', function() {
        multiChoiceAction('d', nFD);
    });

    gameButtonA.innerHTML = a;
    gameButtonB.innerHTML = b;
    gameButtonC.innerHTML = c;
    gameButtonD.innerHTML = d;

    buttonContainerA.appendChild(gameButtonA);
    buttonContainerB.appendChild(gameButtonB);
    buttonContainerC.appendChild(gameButtonC);
    buttonContainerD.appendChild(gameButtonD);

    rows[0].innerHTML = "";
    rows[1].innerHTML = "";
    rows[0].appendChild(buttonContainerA);
    rows[0].appendChild(buttonContainerB);
    rows[1].appendChild(buttonContainerC);
    rows[1].appendChild(buttonContainerD);
}

function generateTextInputOption(textPlaceHolder){
    let rows = document.getElementsByClassName("row-options");
    let textInputWrapper = document.createElement("div");
    let textInput = document.createElement("input");
    let submitButton = document.createElement("button");

    textInputWrapper.classList.add("game-input-wrapper");
    textInputWrapper.setAttribute("id", "game-input-container");

    textInput.classList.add("game-input-box");
    textInput.setAttribute("type", "text");
    textInput.setAttribute("id", "game-input");
    textInput.setAttribute("placeholder", textPlaceHolder);

    submitButton.classList.add("submition-button");
    submitButton.setAttribute("id", "game-submit-text-input-button");
    submitButton.setAttribute("onclick", "submitAction()");

    rows[0].innerHTML = "";
    rows[1].innerHTML = "";
    submitButton.innerHTML = "Confirm";

    textInputWrapper.appendChild(textInput);
    rows[1].appendChild(textInputWrapper);
    rows[1].appendChild(submitButton);
}

function submitAction(){
    let gameInput = document.getElementById("game-input");
    let gameInputValue = gameInput.value;
    let rows = document.getElementsByClassName("row-options");

    if(gameInputValue === ""){
        // console.log("Error");
        return("Error");
    } else {
        // console.log(gameInputValue);
        rows[0].innerHTML = "";
        rows[1].innerHTML = "";
        return(gameInputValue);
    }
}

function multiChoiceAction(answer, nextRun){
    currentGameArray.push(answer);
    localStorage.setItem("gameArray", JSON.stringify(currentGameArray));
    if(answer == "a"){
        // console.log(answer);
        nextRun();
    } else if(answer == "b"){
        // console.log(answer);
        nextRun();
    } else if(answer == "c"){
        // console.log(answer);
        nextRun();
    } else if(answer == "d"){
        // console.log(answer);
        nextRun();
    }
}

// function runFunctionA() {
//     console.log("Running Function A");
// }

// function runFunctionB() {
//     console.log("Running Function B");
// }

// function runFunctionC() {
//     console.log("Running Function C");
// }

// function runFunctionD() {
//     console.log("Running Function D");
// }

function clearDecisionArea(){
    let rows = document.getElementsByClassName("row-options");
    rows[0].innerHTML = "";
    rows[1].innerHTML = "";
}

function gameSetUp(gameName){
    localStorage.removeItem("gameArray");
    let nameCheck = localStorage.getItem("playerName");

    while(nameCheck == "null" || nameCheck == null){
        if(nameCheck == "null" || nameCheck == null){
            let name = prompt("Please create and Adventurer name or Type in 0 to exit");
            localStorage.setItem("playerName", name);
            nameCheck = localStorage.getItem("playerName");
        } else if(nameCheck == "0" || nameCheck == 0) {
            break;
        }
    }

    if(nameCheck != "0" || nameCheck != 0){

        // Creates divs for title of game and players name to be viewed
        let titleViewWrapper = document.createElement("div");
        let gamePlayVisuals = document.createElement("div");
        let gamePlayOptions = document.createElement("div");
        let gamePlayOptionsRowOne = document.createElement("div");
        let gamePlayOptionsRowTwo = document.createElement("div");

        // creates game version title wrapper
        let gameVersion = document.createElement("div");
        let userNameText = document.createElement("div");

        // adds classes to the divs
        titleViewWrapper.classList.add("title-wrapper");
        gameVersion.classList.add("viewport-text");
        userNameText.classList.add("user-name");
        gamePlayVisuals.classList.add("gameplay-visuals-wrapper");
        gamePlayOptions.classList.add("gameplay-options-wrapper");
        gamePlayOptionsRowOne.classList.add("row-options");
        gamePlayOptionsRowTwo.classList.add("row-options");

        // sets the html text
        gameVersion.innerHTML = gameName;
        userNameText.innerHTML = localStorage.getItem("playerName");

        // clears the cache before placing the game in
        gameArea.innerHTML = "";
        gamePlayVisuals.innerHTML = "Testing Visuals Area!";
        // gamePlayOptions.innerHTML = "Gameplay Options";
        gamePlayOptionsRowOne.innerHTML = "Row One Options"
        gamePlayOptionsRowTwo.innerHTML = "Row Two Options"

        // adds the game setup visually
        titleViewWrapper.appendChild(gameVersion);
        titleViewWrapper.appendChild(userNameText);
        gameArea.appendChild(titleViewWrapper);
        gameArea.appendChild(gamePlayVisuals);
        gameArea.appendChild(gamePlayOptions);
        gamePlayOptions.appendChild(gamePlayOptionsRowOne);
        gamePlayOptions.appendChild(gamePlayOptionsRowTwo);

    } else {
        // This is if there is an error with user not entering a name
        alert("You opted out to play please select a new game if you wish to continue");
        localStorage.removeItem("playerName");
        localStorage.removeItem("gameArray");
        gameArea.innerHTML = "";
    }
}

function clearGame(){
    gameArea.innerHTML = "";
    localStorage.removeItem("gameArray");
}

function clearData(){
    localStorage.removeItem("playerName");
    localStorage.removeItem("gameArray");
    gameArea.innerHTML = "";
}