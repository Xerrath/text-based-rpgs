function playGame2(){
    gameArea.innerHTML = "";

    gameSetUp(games[1].gameTitle);
    
    localStorage.setItem("gameArray", "[]");

    currentGameArray = JSON.parse(localStorage.getItem("gameArray")) || [];
    // How to modify the array in local storage
    // currentGameArray.push("a");
    // localStorage.setItem("gameArray", JSON.stringify(currentGameArray));
    // console.log(JSON.parse(localStorage.getItem("gameArray")));

    // Testing 2nd run
    function testingTwoRuns (){
        generateTextInputOption("Please create an adventurer name", gameFinished);
    }

    // running the text input function
    generateTextInputOption("Please create an adventurer name", testingTwoRuns);
}