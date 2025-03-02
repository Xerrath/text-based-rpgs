function playGame1(){
    gameArea.innerHTML = "";
    localStorage.setItem("gameArray", "[]");

    gameSetUp(games[0].gameTitle);

    let currentGameArray = JSON.parse(localStorage.getItem("gameArray")) || [];
    // How to modify the array in local storage
    // currentGameArray.push("a");
    // localStorage.setItem("gameArray", JSON.stringify(currentGameArray));
    // console.log(JSON.parse(localStorage.getItem("gameArray")));

    generateMultipleChoiceOptions("a", "b", "c", "d");
}