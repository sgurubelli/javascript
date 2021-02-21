var number = Math.round(Math.random() * 100 + 1) ;
var guess = prompt ("Guess a number between 1 and 100: ") ;

if (guess > number)
    console.log ("you are to high");
else if (guess < number)
    console.log ("you are to low");
else {
  console.log ("Correct you win!");

}
