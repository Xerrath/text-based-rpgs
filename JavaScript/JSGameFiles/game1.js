let currentRoundChoices = [];

function roundTwoOptionA() {
    // console.log("Running Option A2");
    actionChoiceRoundTwo("A2", "You attempt to mix the chemicals together with absolutely no clue as to what you're doing and end up making a useless powder that only smells bad when burned. You're not sure what to do with this, so you retreat back to the laboratory and consider your other options.");
}

function roundTwoOptionB() {
    // console.log("Running Option B2");
    actionChoiceRoundTwo("B2", "You go over to the whiteboard, where in big lettering it displays the procedures for dissecting a frog. This won’t help. You take a closer look and find a sticky note in the corner of the board that says FIRE DRILL at 12:35. You enter this number into the locked drawer, but it doesn't open. You retreat back to the lab room and try again.");
}

function roundTwoOptionC() {
    // console.log("Running Option C2");
    actionChoiceRoundTwo("C2", "You look on top of the teacher's desk and find several stacks of worksheets for students, a few books the teacher is currently reading, and a picture. After rifling through the stacks of paper and opening the books, you find nothing. You take a look at the picture of a young boy and read the caption: My sweet baby boy, born in 1987. You enter this number into the lock for the locked drawer. It opens! Inside, you find a key. You pick up the key and try it on one of the doors leading to the hallway. Success!");
}

function finishC2OptionNext() {
    generateNextText("You have made it out of the school.<br><br> Congratulations! <br> You win!", gameFinished);
}

function roundTwoOptionD() {
    // console.log("Running Option D2");
    actionChoiceRoundTwo("D2", "You open the cabinet and find an old textbook from the 1940s titled Homemade Ammunition. You flip to a page labeled “How to Make Homemade Gunpowder.” Luckily, you have all the chemicals needed to create both gunpowder and thermite. After carefully following the instructions, you manage to make the gunpowder and apply it to the wooden door leading to the hallway. You light it using the lighter you found earlier and step back, watching as the explosion shakes the room.");
}

function finishD2OptionNext() {
    generateNextText("With the door now blown open, you hurry through the hallway, making your way across the campus. You stop at the front gate, where you quickly mix the thermite and apply it to the heavy padlock. The thermite burns through the metal, and with a final hiss, the padlock melts away. The gate swings open, and you step outside into the night air, breathing a sigh of relief.", finishD2OptionNextLast);
}

function finishD2OptionNextLast() {
    generateNextText("But as you cross the campus, the distant sound of sirens grows louder. Looking over your shoulder, you see the flashing red and blue lights from police cars approaching. Panic sets in as you realize the neighbors must have heard the explosions and called the authorities. You try to make a run for it, but just as you reach the street, the flashing lights surround you. The police quickly apprehend you and arrest you for destruction of property and creating a dangerous situation.", finishD2OptionNextLastGame);
}

function finishD2OptionNextLastGame() {
    generateNextText("You’ve escaped the building, but unfortunately, you’ve been caught. Your daring escape has failed... uh oh!", finishD2OptionNextLastGameOver);
}

function finishD2OptionNextLastGameOver() {
    generateNextText("Mission to escape the school without getting introuble led to failure!<br><br>I am sorry game over!<br>Try Again!", gameFinished);
}

function actionChoiceRoundTwo(selection, text){
    if (selection == "A2"){
        currentRoundChoices.push("A2");
        generateNextText(text, displayChoicesRoundTwo);
    } else if (selection == "B2") {
        currentRoundChoices.push("B2");
        generateNextText(text, displayChoicesRoundTwo);
    } else if (selection == "C2") {
        currentRoundChoices.push("C2");
        generateNextText(text, displayChoicesRoundTwo);
    } else if (selection == "D2") {
        currentRoundChoices.push("D2");
        generateNextText(text, displayChoicesRoundTwo);
    } else {
        console.log("Error with roundTwo actionChoice function passing params lastOption: " + lastOption);
    }
}

function displayChoicesRoundTwo() {
    let doesIncludeA2 = currentRoundChoices.includes("A2");
    let doesIncludeB2 = currentRoundChoices.includes("B2");
    let doesIncludeC2 = currentRoundChoices.includes("C2");
    let doesIncludeD2 = currentRoundChoices.includes("D2");
    let doesIncludesC2orD2 = currentRoundChoices.includes("C2") || currentRoundChoices.includes("D2");
    let doesIncludesA2orB2 = currentRoundChoices.includes("A2") || currentRoundChoices.includes("B2");

    if (!doesIncludesC2orD2 && doesIncludesA2orB2) {
        if (doesIncludeA2 && !doesIncludeB2) {
            generateMultipleChoiceOptions("Look on the whiteboard", "B2", roundTwoOptionB, "Look on the teacher's desk", "C2", roundTwoOptionC, "Search the cabinets", "D2", roundTwoOptionD);
        } else if (!doesIncludeA2 && doesIncludeB2) {
            generateMultipleChoiceOptions("Try mixing the chemicals together", "A2", roundTwoOptionA, "Look on the teacher's desk", "C2", roundTwoOptionC, "Search the cabinets", "D2", roundTwoOptionD);
        } else if (doesIncludeA2 && doesIncludeB2) {
            generateMultipleChoiceOptions("Look on the teacher's desk", "C2", roundTwoOptionC, "Search the cabinets", "D2", roundTwoOptionD);
        } else {
            console.log("Error with display choices round two and first if statement");
        }
    } else if (doesIncludesC2orD2) {
        if (doesIncludeC2) {
            generateNextText("You look on top of the teacher's desk and find several stacks of worksheets for students, a few books the teacher is currently reading, and a picture. After rifling through the stacks of paper and opening the books, you find nothing. You take a look at the picture of a young boy and read the caption: My sweet baby boy, born in 1987. You enter this number into the lock for the locked drawer. It opens! Inside, you find a key. You pick up the key and try it on one of the doors leading to the hallway. Success!", finishC2OptionNext);
        } else if (doesIncludeD2) {
            generateNextText("You open the cabinet and find an old textbook from the 1940s titled Homemade Ammunition. You flip to a page labeled “How to Make Homemade Gunpowder.” Luckily, you have all the chemicals needed to create both gunpowder and thermite. After carefully following the instructions, you manage to make the gunpowder and apply it to the wooden door leading to the hallway. You light it using the lighter you found earlier and step back, watching as the explosion shakes the room.", finishD2OptionNext);
        } else {
            console.log("Error with display choices round two and first else if statement");
        }
    } else {
        generateMultipleChoiceOptions("Try mixing the chemicals together", "A2", roundTwoOptionA, "Look on the whiteboard", "B2", roundTwoOptionB, "Look on the teacher's desk", "C2", roundTwoOptionC, "Search the cabinets", "D2", roundTwoOptionD);
    }
}

function roundTwo(){
    console.log("Entered Round 2")
    currentGameItemsArray = JSON.parse(localStorage.getItem("gameItemsArray"));
    currentRoundChoices = [];

    displayChoicesRoundTwo();
}

function roundOneOptionA() {
    // console.log("Running Option A1");
    actionChoiceRoundOne("A1", "You look through the messy teacher's desk, and after rummaging through all the drawers, you find a lighter in one of them. There is also another drawer that you can't open, which is locked with a four-digit code. You take the lighter and retreat from the desk, hoping to find a clue for the locked drawer. You return to the lab room and reconsider your other options. <br><br> Added Lighter to inventory!");
}

function roundOneOptionB() {
    // console.log("Running Option B1");
    actionChoiceRoundOne("B1", "You try the doors to the hallway and find that both of them are locked. This way won't work. You retreat back to the lab room and reconsider your other options");
}

function roundOneOptionC() {
    // console.log("Running Option C1");
    actionChoiceRoundOne("C1", "You go into the chemical storage room and find a number of chemicals. On one of the shelves, you see aluminum powder, iron oxide, sulfur, charcoal, and potassium nitrate. You collect all of the chemicals and keep them with you in case you need them later. You retreat back to the lab room and consider your other options. Clearly, you don't have what you need to get out of the lab room right now. <br><br> Added Chemicals to inventory!");
}

function roundOneOptionD() {
    // console.log("Running Option D1");
    actionChoiceRoundOne("D1", "You pick up one of the stools next to the lab table and throw it with all your might at one of the plexiglass windows. Unfortunately, you're a nerd who hasn’t seen the inside of a gym in years. The stool bounces off and nearly misses your head. This won’t work. You have to try something else. You retreat back to the lab room and consider your other options.");
}

function finalroundOneOption(){
    generateNextText("You're fairly sure that some combination of the chemicals you have could blast the door and release you from the classroom. You also know that you need a code to unlock the locked drawer on the teacher's desk. What do you do first?", roundTwo);
}

function actionChoiceRoundOne(selection, text){
    if (selection == "A1"){
        currentRoundChoices.push("A1");
        currentGameItemsArray.push("Lighter");
        localStorage.setItem("gameItemsArray", JSON.stringify(currentGameItemsArray));
        // console.log("choices to display");
        generateNextText(text, displayChoicesRoundOne);
    } else if (selection == "B1") {
        currentRoundChoices.push("B1");
        // console.log("choices to display");
        generateNextText(text, displayChoicesRoundOne);
    } else if (selection == "C1") {
        currentRoundChoices.push("C1");
        currentGameItemsArray.push("Chemicals");
        localStorage.setItem("gameItemsArray", JSON.stringify(currentGameItemsArray));
        // console.log("choices to display");
        generateNextText(text, displayChoicesRoundOne);
    } else if (selection == "D1") {
        currentRoundChoices.push("D1");
        // console.log("choices to display");
        generateNextText(text, displayChoicesRoundOne);
    } else {
        console.log("Error with roundOne actionChoice function passing params lastOption: " + lastOption);
    }
}

function displayChoicesRoundOne() {
    // conditional variables for the choices
    let notBandD = !currentRoundChoices.includes("B1") && !currentRoundChoices.includes("D1");
    let notB = !currentRoundChoices.includes("B1");
    let notD = !currentRoundChoices.includes("D1");
    let noLighterButChemicals = !currentGameItemsArray.includes("Lighter") && currentGameItemsArray.includes("Chemicals");
    let noChemicalsButLighter = currentGameItemsArray.includes("Lighter") && !currentGameItemsArray.includes("Chemicals");
    let noChemicalsAndLighter = !currentGameItemsArray.includes("Lighter") && !currentGameItemsArray.includes("Chemicals");

    // Check for a condition to meet, and if not, call the function again
    if (noLighterButChemicals || noChemicalsButLighter || noChemicalsAndLighter) {
        if (noLighterButChemicals && notBandD) {
            generateMultipleChoiceOptions("Look in the teacher's desk", "A1", roundOneOptionA, "Try the doors to the hallway", "B1", roundOneOptionB, "Try to break the windows with a stool", "D1", roundOneOptionD);
        } else if (noLighterButChemicals && notB && !notD) {
            generateMultipleChoiceOptions("Look in the teacher's desk", "A1", roundOneOptionA, "Try the doors to the hallway", "B1", roundOneOptionB);
        } else if (noLighterButChemicals && notD && !notB) {
            generateMultipleChoiceOptions("Look in the teacher's desk", "A1", roundOneOptionA, "Try to break the windows with a stool", "D1", roundOneOptionD);
        } else if (noLighterButChemicals && !notBandD) {
            generateMultipleChoiceOptions("Look in the teacher's desk", "A1", roundOneOptionA);
        } else if (noChemicalsButLighter && notBandD) {
            generateMultipleChoiceOptions("Try the doors to the hallway", roundOneOptionB, "B1", "Go into the chemical storage room", "C1", roundOneOptionC, "Try to break the windows with a stool", "D1", roundOneOptionD);
        } else if (noChemicalsButLighter && notB && !notD) {
            generateMultipleChoiceOptions("Try the doors to the hallway", roundOneOptionB, "B1", "Go into the chemical storage room", "C1", roundOneOptionC);
        } else if (noChemicalsButLighter && notD && !notB) {
            generateMultipleChoiceOptions("Go into the chemical storage room", "C1", roundOneOptionC, "Try to break the windows with a stool", "D1", roundOneOptionD);
        } else if (noChemicalsAndLighter && notB && !notD) {
            generateMultipleChoiceOptions("Look in the teacher's desk", "A1", roundOneOptionA, "Try the doors to the hallway", "B1", roundOneOptionB, "Go into the chemical storage room", "C1", roundOneOptionC);
        } else if (noChemicalsButLighter && !notBandD) {
            generateMultipleChoiceOptions("Go into the chemical storage room", "C1", roundOneOptionC);
        } else if (noChemicalsAndLighter && notD && !notB) {
            generateMultipleChoiceOptions("Look in the teacher's desk", "A1", roundOneOptionA, "Go into the chemical storage room", "C1",  roundOneOptionC, "Try to break the windows with a stool", "D1", roundOneOptionD);
        } else if (noChemicalsAndLighter && !notBandD) {
            generateMultipleChoiceOptions("Look in the teacher's desk", "A1", roundOneOptionA, "Go into the chemical storage room", "C1", roundOneOptionC);
        } else {
            generateMultipleChoiceOptions("Look in the teacher's desk", "A1", roundOneOptionA, "Try the doors to the hallway", "B1", roundOneOptionB, "Go into the chemical storage room", "C1",  roundOneOptionC,"Try to break the windows with a stool", "D1", roundOneOptionD);
        }
    } else {
        if (notBandD) {
            generateMultipleChoiceOptions("Try the doors to the hallway", "B1", roundOneOptionB, "Try to break the windows with a stool", "D1", roundOneOptionD, "Contemplate on the materials you have gained", "Entered Round 2", finalroundOneOption);
        } else if (notB) {
            generateMultipleChoiceOptions("Try the doors to the hallway", "B1", roundOneOptionB, "Contemplate the materials you have gained", "Entered Round 2", finalroundOneOption);
        } else if (notD) {
            generateMultipleChoiceOptions("Try to break the windows with a stool", "D1", roundOneOptionD, "Contemplate on the materials you have gained", "Entered Round 2", finalroundOneOption);
        } else {
            generateMultipleChoiceOptions("Contemplate on the materials you have gained", "Entered Round 2", finalroundOneOption);
        }
    }
}

function roundOne(){
    console.log("Entered Round 1")
    currentGameItemsArray = JSON.parse(localStorage.getItem("gameItemsArray"));
    currentRoundChoices = [];

    displayChoicesRoundOne();
}

function playGame1(){
    gameArea.innerHTML = "";

    gameSetUp(games[0].gameTitle);

    localStorage.setItem("gameArray", "[]");
    currentGameArray = JSON.parse(localStorage.getItem("gameArray")) || [];

    localStorage.setItem("gameItemsArray", "[]");

    generateNextText("You are a high school student who accidentally overslept during the last period of the day. You find yourself stuck in the classroom laboratory. It is dark outside, and you know that no one will be coming until Monday since you fell asleep on Friday night. You need to find a way out of the building as soon as possible. What do you want to do first?", roundOne);
}


// Page 1
// You are a high school student who accidentally overslept during the last period of the day. You find yourself stuck in the classroom laboratory. It is dark outside, and you know that no one will be coming until Monday since you fell asleep on Friday night. You need to find a way out of the building as soon as possible. What do you want to do first?

// You have four options:

// Look in the teacher's desk (2)
// Try the doors to the hallway (3)
// Go into the chemical storage room (4)
// Try to break the windows with a stool (5)
// If you have a Lighter and Chemicals in your inventory, go to page (6).

// Page 2
// You look through the messy teacher's desk, and after rummaging through all the drawers, you find a lighter in one of them. There is also another drawer that you can't open, which is locked with a four-digit code. You take the lighter and retreat from the desk, hoping to find a clue for the locked drawer. You return to the lab room and reconsider your other options.
// Add Lighter to inventory.
// Go back to page 1.

// Page 3
// You try the doors to the hallway and find that both of them are locked. This way won't work. You retreat back to the lab room and reconsider your other options.
// Go back to page 1.

// Page 4
// You go into the chemical storage room and find a number of chemicals. On one of the shelves, you see aluminum powder, iron oxide, sulfur, charcoal, and potassium nitrate. You collect all of the chemicals and keep them with you in case you need them later. You retreat back to the lab room and consider your other options. Clearly, you don't have what you need to get out of the lab room right now.
// Add Chemicals to inventory.
// Go back to page 1.

// Page 5
// You pick up one of the stools next to the lab table and throw it with all your might at one of the plexiglass windows. Unfortunately, you're a nerd who hasn’t seen the inside of a gym in years. The stool bounces off and nearly misses your head. This won’t work. You have to try something else. You retreat back to the lab room and consider your other options.
// Go back to page 1.

// --------------------------------------------------------------------------------------------------------

// Page 6
// You're fairly sure that some combination of the chemicals you have could blast the door and release you from the classroom. You also know that you need a code to unlock the locked drawer on the teacher's desk. What do you do first?

// You have four options:

// Try mixing the chemicals together (7)
// Look on the whiteboard (8)
// Look on the teacher's desk (9)
// Search the cabinets (10)

// Page 7
// You attempt to mix the chemicals together with absolutely no clue as to what you're doing and end up making a useless powder that only smells bad when burned. You're not sure what to do with this, so you retreat back to the laboratory and consider your other options.
// Go back to page 6.

// Page 8
// You go over to the whiteboard, where in big lettering it displays the procedures for dissecting a frog. This won’t help. You take a closer look and find a sticky note in the corner of the board that says "FIRE DRILL at 12:35." You enter this number into the locked drawer, but it doesn't open. You retreat back to the lab room and try again.
// Go back to page 6.

// Page 9
// You look on top of the teacher's desk and find several stacks of worksheets for students, a few books the teacher is currently reading, and a picture. After rifling through the stacks of paper and opening the books, you find nothing. You take a look at the picture of a young boy and read the caption: "My sweet baby boy, born in 1987." You enter this number into the lock for the locked drawer. It opens! Inside, you find a key. You pick up the key and try it on one of the doors leading to the hallway. Success! 
// You have made it out of the school. Congratulations!

// Page 10
// You open the cabinet and find an old textbook from the 1940s titled Homemade Ammunition. You flip to a page labeled “How to Make Homemade Gunpowder.” Luckily, you have all the chemicals needed to create both gunpowder and thermite. After carefully following the instructions, you manage to make the gunpowder and apply it to the wooden door leading to the hallway. You light it using the lighter you found earlier and step back, watching as the explosion shakes the room.

// With the door now blown open, you hurry through the hallway, making your way across the campus. You stop at the front gate, where you quickly mix the thermite and apply it to the heavy padlock. The thermite burns through the metal, and with a final hiss, the padlock melts away. The gate swings open, and you step outside into the night air, breathing a sigh of relief.

// But as you cross the campus, the distant sound of sirens grows louder. Looking over your shoulder, you see the flashing red and blue lights from police cars approaching. Panic sets in as you realize the neighbors must have heard the explosions and called the authorities. You try to make a run for it, but just as you reach the street, the flashing lights surround you. The police quickly apprehend you and arrest you for destruction of property and creating a dangerous situation.

// You’ve escaped the building, but unfortunately, you’ve been caught. Your daring escape has failed... uh oh!