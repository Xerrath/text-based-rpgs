function timingCountDown(s, text){
    countDownTimer = s;
}

function playGame1(){
    gameArea.innerHTML = "";

    gameSetUp(games[0].gameTitle);

    localStorage.setItem("gameArray", "[]");
    currentGameArray = JSON.parse(localStorage.getItem("gameArray")) || [];

    // How to modify the array in local storage
    // currentGameArray.push("a");
    // localStorage.setItem("gameArray", JSON.stringify(currentGameArray));
    // console.log(JSON.parse(localStorage.getItem("gameArray")));
}