let games = [
    {
        id: 0,
        idName: "The Sleepy Escape",
        gameTitle: "The Sleepy Escape",
        functionToRun: "playGame1()",
        genre: "RPG The Sleepy Escape",
        author: "Emily H.",
    },
    // {
    //     id: 1,
    //     idName: "game2",
    //     gameTitle: "Unknownst Horrors",
    //     functionToRun: "playGame2()",
    //     genre: "Horror",
    //     author: "N/A",
    // },
    // {
    //     id: 2,
    //     idName: "game3",
    //     gameTitle: "Ei's Story Line",
    //     functionToRun: "playGame3()",
    //     genre: "Adventure",
    //     author: "N/A",
    // },
    {
        id: 999999999998,
        idName: "Clear-game-data",
        gameTitle: "End Game",
        functionToRun: "clearGame()",
        genre: "N/A",
        author: "N/A",
    },
    {
        id: 999999999999,
        idName: "Clear-all-data",
        gameTitle: "Reset",
        functionToRun: "clearData()",
        genre: "N/A",
        author: "N/A",
    },
];

for(let i = 0; i < games.length; i++){
    if(games[i].id < 900000000000){
        // Creates a div container for a single game per iteration
        let container = document.createElement("div");
        container.classList.add("game-button-container");
        container.setAttribute('id', games[i].idName);

        // Creates a nested button within the container div for a single game per iteration
        let gameButton = document.createElement("a");
        gameButton.classList.add("game-button");
        gameButton.innerHTML = games[i].gameTitle;
        gameButton.setAttribute("onClick", games[i].functionToRun);

        container.appendChild(gameButton);
        gameOptions.appendChild(container);
    } else if (games[i].id >= 900000000000){
        // Creates a div container for a single game per iteration
        let clearContainer = document.createElement("div");
        clearContainer.classList.add("game-button-container");
        clearContainer.setAttribute('id', games[i].idName);

        // Creates a nested button within the container div for a single game per iteration
        let gameButton = document.createElement("a")
        gameButton.classList.add("game-button");
        gameButton.innerHTML = games[i].gameTitle;
        gameButton.setAttribute("onClick", games[i].functionToRun);

        clearContainer.appendChild(gameButton);
        gameReset.appendChild(clearContainer);
    }
};