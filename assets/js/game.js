var playerName = window.prompt("What is your robot's name");
var playerHealth = 10;
var playerAttack = 50;

//You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
    // Alert users that they are starting the round
    window.alert("Welcome to Robot Gladiators!");

    // Subtract the value of 'playerAttack' from the value of the 'enemyHealth' and use that result to update the value in the 'enemyHealth' variable
enemyHealth = enemyHealth - playerAttack
    // Log a resulting message to the console so we know that it worked.
console.log(
    playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
);

//check enemy's health
if (enemyHealth <= 0) {
    window.alert(enemyName + " has died!");
}
else {
    window.alert(enemyName + " still has " + enemyHealth + "health left.");
}

    // Subtract the value of 'enemyAttack' from the value of the 'playerHealth' and use that result to update the value in the 'playerhealth' variable.
playerHealth = playerHealth - enemyAttack
    // Log a reulting message to the console so we know that it worked.
    console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.")

};


// create function
function fight() {
    window.alert("Welcome to Robot Gladiators!");
}

var playerHealth = 100
// check to see if the value of playerhealth variable is greater than 0
if (playerHealth > 0) {
    console.log("Your player is still alive");
}

var playerHealth = 10;

if(playerHealth === 0) {
    console.log("This will not run.");
}
else {
    console.log("This will run instead");
}

// execute function
fight();