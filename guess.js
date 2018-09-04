//initialize answer generate random number between 0 and 1, convert to interger with round up
var Answer = Math.round(Math.random()*100);
// initialize Turns veriable, set to 0
var Turns=0;
// initialize boolean variable correct, set to value False
var Correct=false;
// Add one to veriable Turns
Turns++;
// Keep looping untill correct is set to true
while (Correct==false) {
//initialize Guess, set value to user input, telling user what to input
    var Guess = prompt("Guess my integer (between 0 and 100)!");
    // check if guess is equal to answer
    if (Guess == Answer) {
    //if equal say "correct" and number of turns
        alert("CORRECT! You guessed it in "+Turns+" turns.");
        // set correct equal to true to get out of our "while loop"
        Correct = true;
    }
    //check if guess is greater then answer
    else if (Guess > Answer) {
    // give feedbeck: go lower
        alert("Hint: Try a lower number!");
    }
    // chceck if guess is lower than answer
    else if (Guess < Answer) {
    //give feedback: go higher
        alert("Hint: Try a higher number!");
    }
    // Add one turn to variable turn
    Turns++;
}
// end the game
alert("Thank you for playing.");
