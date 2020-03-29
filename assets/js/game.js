// var playerInfo.name = window.prompt("What is your robot's name");
// var playerHealth = 100;
// var playerAttack = 10;
// var playerMoney = 10;

// var enemyNames = ["Roborto", "Amy Android", "Robo Trmble"];
// // console.log(enemyNames);
// var enemyHealth = 50;
// var enemyAttack = 12;

// //You can also log multiple values at once like this
// // console.log(playerName, playerAttack, playerHealth);



// var fight = function(enemyName) {
//     while (playerHealth > 0 && enemyHealth > 0) {
//       // window.alert("Welcome to Robot Gladiators!");
//       // ask user if they'd liked to fight or run
//       var promptFight = window.prompt('Would you like FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');
  
//       // if user picks "skip" confirm and then stop the loop
//       if (promptFight === "skip" || promptFight === "SKIP") {
//         // confirm user wants to skip
//         var confirmSkip = window.confirm("Are you sure you'd like to quit?");
  
//         // if yes (true), leave fight
//         if (confirmSkip) {
//           window.alert(playerName + ' has decided to skip this fight. Goodbye!');
//           // subtract money from playerMoney for skipping
//           playerMoney = playerMoney - 10;
//           console.log("playerMoney", playerMoney)
//           break;
//         }
//       }
  
//       // remove enemy's health by subtracting the amount set in the playerAttack variable
//       enemyHealth = enemyHealth - playerAttack;
//       console.log(
//         playerName + ' attacked ' + enemyName + '. ' + enemyName + ' now has ' + enemyHealth + ' health remaining.'
//       );
  
//       // check enemy's health
//       if (enemyHealth <= 0) {
//         window.alert(enemyName + ' has died!');
  
//         // award player money for winning
//         playerMoney = playerMoney + 20;
  
//         // leave while() loop since enemy is dead
//         break;
//       } else {
//         window.alert(enemyName + ' still has ' + enemyHealth + ' health left.');
//       }
  
//       // remove players's health by subtracting the amount set in the enemyAttack variable
//       playerHealth = playerHealth - enemyAttack;
//       console.log(
//         enemyName + ' attacked ' + playerName + '. ' + playerName + ' now has ' + playerHealth + ' health remaining.'
//       );
  
//       // check player's health
//       if (playerHealth <= 0) {
//         window.alert(playerName + ' has died!');
//         // leave while() loop if player is dead
//         break;
//       } else {
//         window.alert(playerName + ' still has ' + playerHealth + ' health left.');
//       }
//     }
//   };




// // functiona to start a new game

// var startGame = function() {
//   // debugger;

//   playerHealth = 100;
//   playerAttack - 10;
//   playerMoney = 10;

//   // other logic remains the same


//   for(var i = 0; i < enemyNames.length; i++) {
//     if (playerHealth > 0) {
//       //let user know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
//     window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
//     // pick new enemy to fight based on the index of the enemyNames array
//     var pickedEnemyName = enemyNames[i];
//     // reset enemyHealth before starting new fight
//     enemyHealth = 50;
//     // use debugger to pause script from running and check what's going on at the moment in the code
//     // debugger;
//     // pass the pickedEnemyName variable's value int the fight function where it will assume the value of the enemyName parameter
//     fight(pickedEnemyName);
//                 //if player is still alive and we're not at the last enemy in the array
//                 if (playerHealth > 0 && i < enemyNames.length - 1) {
//                   shop();
//                 } 
//     }
//     else {
//       window.alert("You have lost your robot in battle! Game Over!");
//       break;
//     }

//   }

//       // after the loop ends, player is either out of health or enemies to fight, so run the endGame function
//       endGame();
//       // play again
//       startGame();
// }


// // function to end the entire game
// var endGame = function() {
//   // if player is still alive, player wins!
//   if (playerHealth > 0) {
//     window.alert("Great job, you've survived the game! You now have a score of" + playerMoney + ".");
//   }
//   else {
//     window.alert("You have lost your robot in battle.");
//   }

//   // window.alert("The game has now ended. Let's see how you did!");
//   var playAgainConfirm = window.confirm("Would you like to play again?");

//   if (playAgainConfirm) {
//     //restart the game
//     startGame();
//   }
//   else {
//     window.alert("Thank you for playing Robot Gladiators! Come back soon!");
//   }

// }



// // creating new shop function
// var shop = function() {
//   console.log("entered the shop");
// };


// //start the game when page loads
// startGame();






// ***STARTING FROM SCRATCH***

// Game States
// "WIN" - Player robot has defeated all enemy robots
//    * Fight all enemy robots
//    * Defeat each enemy robot
// "LOSE" - Player robot's health is zero or less

// var playerName = window.prompt("What is your Robot's name?");
// var playerHealth = 100;
// var playerAttack = 10;
// var playerMoney = 10;

// var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
// var enemyHealth = 50;
// var enemyAttack = 12;





var fight = function(enemy) {
  while (playerInfo.health > 0 && enemy.health > 0) {
    // ask user if they'd liked to fight or run
    var promptFight = window.prompt('Would you like FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');
    promptFight = promptFight.toLowerCase();
    // if user picks "skip" confirm and then stop the loop
    if (promptFight === "skip" || promptFight === "SKIP") {
      // confirm user wants to skip
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");

      // if yes (true), leave fight
      if (confirmSkip) {
        window.alert(playerInfo.name + ' has decided to skip this fight. Goodbye!');
        // subtract money from playerInfo.money for skipping
        playerInfo.money = Math.max(0, playerInfo.money - 10);
        console.log("playerInfo.money", playerInfo.money)
        // break;
        return true;
      }

      else {
        // window.alert("test message");
        // break;
        return false;
      }
    }
    

    // remove enemy's health by subtracting the amount set in the playerAttack variable
    // enemyHealth = Math.max(0, enemyHealth - playerInfo.attack); 
    var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
    enemy.health = Math.max(0, enemy.health - damage);
    console.log(
      playerInfo.name + ' attacked ' + enemy.name + '. ' + enemy.name + ' now has ' + enemy.health + ' health remaining.'
    );

    // check enemy's health
    if (enemy.health <= 0) {
      window.alert(enemy.name + ' has died!');
      // award player money for winning
      playerInfo.money = playerInfo.money + 20;
      // leave while() loop since enemy is dead
      break;
    } else {
      window.alert(enemy.name + ' still has ' + enemy.health + ' health left.');
    }

    // remove players's health by subtracting the amount set in the enemyAttack variable
    // playerInfo.health = Math.max(0, playerInfo.health - enemyAttack) ;
    var damage = randomNumber(enemy.attack - 3, enemy.attack);
    playerInfo.health = Math.max(0, playerInfo.health - damage);
    console.log(
      enemy.name + ' attacked ' + playerInfo.name + '. ' + playerInfo.name + ' now has ' + playerInfo.health + ' health remaining.'
    );

    // check player's health
    if (playerInfo.health <= 0) {
      window.alert(playerInfo.name + ' has died!');
      // leave while() loop if player is dead
      break;
    } else {
      window.alert(playerInfo.name + ' still has ' + playerInfo.health + ' health left.');
    }
  } 

} 







//function to start a new game
var startGame = function() {

  //reset player stats
  playerInfo.reset();

  // playerInfo.health = 100;
  // playerInfo.attack = 10;
  // playerInfo.money = 10;

    // This is the place where we call the functions
    for (var i = 0; i < enemyInfo.length; i++) {
    //debugger;
      if(playerInfo.health > 0) {
        window.alert("Welcome to Battleboths! Round " + (i + 1));
        // debugger;
        var pickedEnemyObj = enemyInfo[i];
        pickedEnemyObj.health = randomNumber(40, 60);
        //call the fight function with enemy robot
        fight(pickedEnemyObj);


          //if we are not at the last enemy in the array
          if(playerInfo.health > 0 && i < enemyInfo.length - 1) {
            var storeConfirm = window.confirm("The fight is over, visit the store before next round?");
            // if yes, take them to the store() function
            if (storeConfirm) {
              shop();
            }

          }

      } 

      else {
        window.alert("You have lost your robot in battle. Game Over!");
        break;
      }

    }

    //play again
    // startGame();
    endGame();
};



// function to end the game
var endGame = function() {
  //if player is still alive, player wins
  if (playerInfo.health > 0) {
    window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + ".");
  }
  else {
    window.alert("You have lost your robot in battle.");
  }
  // window.alert("The game has now ended. Let's see how you did!");

  var playAgainConfirm = window.confirm("Would you like to play again?");
  if (playAgainConfirm) {
    //restart the game
    startGame();
  } else {
    window.alert("Thank you for playing Robot Gladiators! Come back soon!");
  }

};




//shop function start
var shop = function() {
  //ask player what they'd lile to do 
  var shopOptionPrompt = window.prompt("Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter 1 for  REFILL, 2 for UPGRADE or 3 to LEAVE.");
  shopOptionPrompt = parseInt(shopOptionPrompt);
  switch (shopOptionPrompt) {
    case 1: //new case
      playerInfo.refillHealth();
      break;

    case 2:  //new case
    // case "upgrade":
      playerInfo.upgradeAttack();
      break;

      case 3: //new case
      // case "leave":
        window.alert("Leaving the store");
        //do nothing, so function will end
        break;
      
      default: 
        window.alert("You did not pick a valid option. Try again!");

      //call shop() again to force player to pick a valid option
      shop();
      break;

  }
};



//function to generate a random numeric value
var randomNumber = function(min, max) {
  var value = Math.floor(Math.random() * (max - min +1) + min);

  return value;
}


var getPlayerName = function() {
  var name = "";

// ***************************************
// ADD LOOP HERE WITH PROMPT AND CONDITION
// ***************************************

while (name === "" || name === null) {
  name = prompt("What is your robot's name?");
  }
  console.log("Your robot's name is " + name);
  return name;
};





var playerInfo = {
  name: getPlayerName(),
  health: 100,
  attack: 10,
  money: 10,
  reset: function() {
    this.health = 100;
    this.money = 10;
    this.attack = 10;
  },

  refillHealth: function() {
    if (this.money >=7) {
      this.health +=20;
      this.money -=7;
    } 
    else {
      window.alert("You don't have enough money!");
    }
  },

  upgradeAttack: function() {
    if (this.money >=7) {
      window.alert("Upgrading player's attach by 6 for 7 dollars.");
      this.attack +=6;
      this.money -= 7;
    }
    else {
      window.alert("You don't have enough money!");
    }

  }

};


var enemyInfo = [
  {
    name: "Roborto",
    attack: randomNumber(10, 14),
    shield: {
      type: "wood",
      strenght: 10
    }

  },
  {
    name: "Amy Android",
    attack: randomNumber(10, 14)
  },
  {
    name: "Robo Truble",
    attack: randomNumber(10, 14)
  }
];



//startGame call
startGame();


