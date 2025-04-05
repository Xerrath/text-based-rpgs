function playGame3(){
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

// Title: The Astronaut's Odyssey

// Opening Scene:

// The camera pans over a vast, alien landscape. Strange, luminescent flora dot the terrain, casting an ethereal glow under a canopy of swirling stars. The silhouette of an astronaut appears, standing at the edge of a crater, gazing out into the unknown.

// Narrator (V.O.):
// "In the uncharted expanses of the universe, one astronaut ventures to a distant planet, seeking answers to questions that have eluded humankind for centuries. But every choice on this alien world could mean the difference between life and oblivion."

// Scene 1: The Arrival

// The astronaut, Captain Alex Rivers, steps out of a small, futuristic spacecraft. A holographic interface on his wrist blinks with data.

// Captain Rivers:
// "This is Captain Alex Rivers, reporting the successful landing on Planet X-37. Oxygen levels are sufficient, and I am proceeding with the mission."

// [Choice 1: Explore the Terrain or Investigate the Ruins]

// Explore the Terrain
// Alex decides to traverse the strange terrain, mapping and collecting samples. He encounters a shimmering lake with unusual properties.

// Narrator (V.O.):
// "What secrets lie beneath the surface of this mysterious lake? A decision must be made."

// [Choice: Dive into the Lake or Continue Mapping]

// Dive into the Lake: The waters reveal an underwater ecosystem teeming with life, leading to a hidden cave with ancient alien technology.
// Continue Mapping: Further exploration uncovers a valley with signs of a long-lost civilization.
// Investigate the Ruins
// Alex approaches the towering ruins of an ancient structure, covered in alien glyphs.

// Narrator (V.O.):
// "The walls whisper secrets of a civilization long gone. What knowledge do they hold?"

// [Choice: Attempt to Decipher the Glyphs or Search for Artifacts]

// Attempt to Decipher the Glyphs: The glyphs tell a story of a great cosmic event, offering clues to the planet's past.
// Search for Artifacts: Alex discovers a relic with unknown powers, setting off a chain of events that could alter his mission.
// Scene 2: The Encounter

// Regardless of the initial choice, Alex encounters an alien being, a guardian of the planet's secrets.

// Alien Guardian:
// "Traveler, your presence here is both a boon and a burden. Choose wisely, for your path will shape the fate of many."

// [Choice: Form an Alliance or Stand Alone]

// Form an Alliance
// The alien shares its knowledge, guiding Alex to a deeper understanding of the universe and his place within it.

// Stand Alone
// Alex relies on his instincts, navigating the challenges of the planet with determination and ingenuity.

// Closing Scene:

// As the sun sets on Planet X-37, Alex stands atop a hill, contemplating the journey that lies ahead.

// Narrator (V.O.):
// "In the vastness of space, every choice is a step toward destiny. What will your next step be?"

// The camera slowly pulls back, revealing the boundless universe, filled with infinite possibilities.

// End of Episode 1


