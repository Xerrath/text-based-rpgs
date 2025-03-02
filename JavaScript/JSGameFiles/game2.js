function playGame2(){
    gameArea.innerHTML = "";
    localStorage.setItem("gameArray", "[]");

    let currentGameArray = JSON.parse(localStorage.getItem("gameArray")) || [];
    // How to modify the array in local storage
    // currentGameArray.push("a");
    // localStorage.setItem("gameArray", JSON.stringify(currentGameArray));
    // console.log(JSON.parse(localStorage.getItem("gameArray")));

    gameSetUp(games[1].gameTitle);
    generateTextInputOption("Please create an adventurer name");
}