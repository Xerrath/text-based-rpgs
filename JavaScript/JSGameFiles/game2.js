function playGame2(){
    gameArea.innerHTML = "";

    gameSetUp(games[1].gameTitle);
    
    localStorage.setItem("gameArray", "[]");

    currentGameArray = JSON.parse(localStorage.getItem("gameArray")) || [];
    // How to modify the array in local storage
    // currentGameArray.push("a");
    // localStorage.setItem("gameArray", JSON.stringify(currentGameArray));
    // console.log(JSON.parse(localStorage.getItem("gameArray")));
    generateTextInputOption("Please create an adventurer name");
}