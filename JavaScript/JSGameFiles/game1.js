function timingCountDown(s, text){
    countDownTimer = s;
}

function runFunctionA() {
    console.log("Running Function A");
}

function runFunctionB() {
    console.log("Running Function B");
}

function runFunctionC() {
    console.log("Running Function C");
}

function runFunctionD() {
    console.log("Running Function D");
}

function playGame1(){
    gameArea.innerHTML = "";

    gameSetUp(games[0].gameTitle);

    localStorage.setItem("gameArray", "[]");
    currentGameArray = JSON.parse(localStorage.getItem("gameArray")) || [];

    // Testing 2nd run
    // function testingTwoRuns (){
    //    generateTextInputOption("What Weapon Do you want?", gameFinished);
    // }

    // Running The multiChoice Options
    
    //generateMultipleChoiceOptions("Testing Run A", testingTwoRuns, "Testing Run B", testingTwoRuns, "Testing Run C", testingTwoRuns, "Testing Run D", runFunctionD);

    // generateNextText("This is a visual test for a next run", testingTwoRuns);

    // How to modify the array in local storage
    // currentGameArray.push("a");
    // localStorage.setItem("gameArray", JSON.stringify(currentGameArray));
    // console.log(JSON.parse(localStorage.getItem("gameArray")));
}