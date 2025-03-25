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