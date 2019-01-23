"use strict";

// Declare Wins, our HP, Grant's HP
let player = undefined;
let userHp = 40;
let grantHp = 10;
let uWin = 0;
let gWin = 0;


// Prompt the User
let input = prompt("Wanna play?");

//No
if (input === "no") {
  console.log("Fine. Later Gator.")
}
//Yes - Ask For Name
if (input === "yes") {
    player = prompt("Name?");


// While Loop
    while (gWin < 1 && uWin < 3) {
    // Remove Health  
      if (userHp > 0 && grantHp > 0) {
        userHp -= Math.floor(Math.random() * 2) + 1;
        grantHp -= Math.floor(Math.random() * 2) + 1;
    //State Remaining Health    
        console.log(`${player}'s Health: ${userHp}`);
        console.log(`Grant's Health: ${grantHp}`);
      } 
    //Check health
      else if (grantHp <= 0){
        uWin += 1;
        console.log(`Your score is ${uWin} wins`);
    //Reset  
        grantHp = 10;
      }
      else {
        gWin += 1;
      }
    }
  }

if (uWin === 3) {
  //We Win
  console.log(`${player} wins!`);
} else {
  //Grant Wins
  console.log(`Grant wins. Loser.`);
}

