function timingCountDown(s, text){
    countDownTimer = s;
}

function playGame1(){
    gameArea.innerHTML = "";

    gameSetUp(games[0].gameTitle);

    localStorage.setItem("gameArray", "[]");
    currentGameArray = JSON.parse(localStorage.getItem("gameArray")) || [];

    // Testing 2nd run
    function testingTwoRuns (){
       generateTextInputOption("Please create an adventurer name", gameFinished);
    }

    // Running The multiChoice Options
    generateMultipleChoiceOptions("Testing Run A", testingTwoRuns, "Testing Run B", testingTwoRuns, "Testing Run C", testingTwoRuns, "Testing Run D", runFunctionD);

    // How to modify the array in local storage
    // currentGameArray.push("a");
    // localStorage.setItem("gameArray", JSON.stringify(currentGameArray));
    // console.log(JSON.parse(localStorage.getItem("gameArray")));
}