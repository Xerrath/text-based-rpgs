const gameArea = document.getElementById("game-area");
const gameOptions = document.getElementById("game-options");
const gameReset = document.getElementById("game-reset-wrapper");
const themeRoot = document.documentElement;

// theme variable
let checkBoxTheme = document.getElementById("theme-switch");

// global variables declared
let countDownTimer;
let currentGameArray;
let currentGameItemsArray;

if (localStorage.getItem("theme") === null || localStorage.getItem("theme") === "null"){
    localStorage.setItem("theme", "false");
}

if (localStorage.getItem("theme") === "true") {
    checkBoxTheme.checked = true;
    themeRoot.style.setProperty("--colorBG", "rgba(1, 11, 19, 1)");
    themeRoot.style.setProperty("--colorText", "rgba(236, 235, 243, 1)");
    themeRoot.style.setProperty("--color03", "rgba(1, 11, 19, 1)");
    themeRoot.style.setProperty("--color04", "rgba(10, 226, 255, 1)");
    themeRoot.style.setProperty("--color05", "rgba(3, 160, 98, 1)");
    themeRoot.style.setProperty("--colorWhite", "rgba(236, 235, 243, 1)");
}
    
checkBoxTheme.addEventListener('change', function() {
    if (checkBoxTheme.checked || localStorage.getItem("theme") === "false") {
        // console.log('Checkbox is checked');
        localStorage.setItem("theme", "true");
        // console.log(localStorage.getItem("theme"));
        themeRoot.style.setProperty("--colorBG", "rgba(1, 11, 19, 1)");
        themeRoot.style.setProperty("--colorText", "rgba(236, 235, 243, 1)");
        themeRoot.style.setProperty("--color03", "rgba(1, 11, 19, 1)");
        themeRoot.style.setProperty("--color04", "rgba(10, 226, 255, 1)");
        themeRoot.style.setProperty("--color05", "rgba(3, 160, 98, 1)");
        themeRoot.style.setProperty("--colorWhite", "rgba(236, 235, 243, 1)");
    } else {
        // console.log('Checkbox is unchecked');
        localStorage.setItem("theme", "false");
        // console.log(localStorage.getItem("theme"));
        themeRoot.style.setProperty("--colorBG", "rgba(226, 226, 226, 0.6)");
        themeRoot.style.setProperty("--colorText", "rgba(1, 11, 19, 1)");
        themeRoot.style.setProperty("--color03", "rgba(1, 11, 19, 1)");
        themeRoot.style.setProperty("--color04", "rgba(3, 160, 98, 1)");
        themeRoot.style.setProperty("--color05", "rgba(10, 226, 255, 1)");
        themeRoot.style.setProperty("--colorWhite", "rgba(236, 235, 243, 1)");
    }
});

function generateNextText(text, nextRun){
    let elementVisuals = document.getElementById("gameplay-visuals");
    let rows = document.getElementsByClassName("row-options");

    let nextButtonContainer = document.createElement("div");
    let nextButtonA = document.createElement("a");

    nextButtonContainer.classList.add("game-button-container");

    nextButtonA.classList.add("game-button", "options-button");

    nextButtonA.addEventListener('click', function() {
        nextRun();
    });

    elementVisuals.innerHTML = text;

    nextButtonA.innerHTML = "Continue";
    rows[0].innerHTML = "";
    rows[1].innerHTML = "";

    nextButtonContainer.appendChild(nextButtonA);
    rows[1].appendChild(nextButtonContainer);
}

function generateMultipleChoiceOptions(a, valueA, nFA, b = "none", valueB = "none", nFB = "none", c = "none", valueC = "none", nFC = "none", d = "none", valueD = "none", nFD = "none"){
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
        multiChoiceAction("a", valueA, nFA);
    });
    gameButtonB.addEventListener('click', function() {
        multiChoiceAction("b", valueB, nFB);
    });
    gameButtonC.addEventListener('click', function() {
        multiChoiceAction("c", valueC, nFC);
    });
    gameButtonD.addEventListener('click', function() {
        multiChoiceAction("d", valueD, nFD);
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

    if (b != "none") {
        rows[0].appendChild(buttonContainerB);
    }

    if(c != "none" && d != "none"){
        rows[1].appendChild(buttonContainerC);
        rows[1].appendChild(buttonContainerD);
    } else if (c != "none") {
        rows[1].appendChild(buttonContainerC)
    } else {
        rows[1].innerHTML = "";
    }
}

function generateTextInputOption(textPlaceHolder, nextFRun){
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
    // submitButton.setAttribute("onclick", "submitAction()");
    submitButton.addEventListener('click', function() {
        submitAction(nextFRun, "conOne", "conTwo", "conThree", "conFour", "conFive", "conSix");
    });

    rows[0].innerHTML = "";
    rows[1].innerHTML = "";
    submitButton.innerHTML = "Confirm";

    textInputWrapper.appendChild(textInput);
    rows[1].appendChild(textInputWrapper);
    rows[1].appendChild(submitButton);
}

function submitAction(nextRun){
    let gameInput = document.getElementById("game-input");
    let gameInputValue = gameInput.value;
    let rows = document.getElementsByClassName("row-options");

    if(gameInputValue === ""){
        console.log("Error");
    } else {
        // console.log(gameInputValue);
        currentGameArray.push(gameInputValue);
        localStorage.setItem("gameArray", JSON.stringify(currentGameArray));

        rows[0].innerHTML = "";
        rows[1].innerHTML = "";
    
        nextRun();
    }
}

function multiChoiceAction(answer, valueToPush, nextRun){
    currentGameArray.push(valueToPush);
    localStorage.setItem("gameArray", JSON.stringify(currentGameArray));
    let rows = document.getElementsByClassName("row-options");

    if(answer == "a"){
        // console.log(answer);
        rows[0].innerHTML = "";
        rows[1].innerHTML = "";
        nextRun();
    } else if(answer == "b"){
        // console.log(answer);
        rows[0].innerHTML = "";
        rows[1].innerHTML = "";
        nextRun();
    } else if(answer == "c"){
        // console.log(answer);
        rows[0].innerHTML = "";
        rows[1].innerHTML = "";
        nextRun();
    } else if(answer == "d"){
        // console.log(answer);
        rows[0].innerHTML = "";
        rows[1].innerHTML = "";
        nextRun();
    }
}

function clearDecisionArea(){
    let rows = document.getElementsByClassName("row-options");
    rows[0].innerHTML = "";
    rows[1].innerHTML = "";
}

function gameSetUp(gameName){
    localStorage.removeItem("gameArray");
    localStorage.removeItem("gameItemsArray");
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

        gamePlayVisuals.setAttribute("id", "gameplay-visuals")

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
        localStorage.removeItem("gameItemsArray");
        gameArea.innerHTML = "";
    }
}

function clearGame(){
    gameArea.innerHTML = "";
    localStorage.removeItem("gameArray");
    localStorage.removeItem("gameItemsArray");
}

function clearData(){
    gameArea.innerHTML = "";
    localStorage.removeItem("playerName");
    localStorage.removeItem("gameArray");
    localStorage.removeItem("gameItemsArray");
    // localStorage.removeItem("theme");
}

function gameFinished(){
    let rows = document.getElementsByClassName("row-options");

    let buttonContainer = document.createElement("div");
    let gameButton = document.createElement("a");
    buttonContainer.classList.add("game-button-container", "options-button-wrapper");
    buttonContainer.setAttribute('id', "button-container-a");
    gameButton.classList.add("game-button", "options-button");

    gameButton.setAttribute('id', "button-option-a");

    buttonContainer.addEventListener('click', function() {
        clearGame();
    });

    gameButton.innerHTML = "End Game";

    buttonContainer.appendChild(gameButton);
    rows[0].innerHTML = "Thank you for Playing";
    rows[1].innerHTML = "";
    rows[1].appendChild(buttonContainer);
}