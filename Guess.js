var number = Math.round(Math.random() * 100 + 1) ;
var guess =  "";
while (guess != number) {
guess = prompt ("Guess a number between 1 and 100: ") ;
if (guess > number)
    alert ("you are too high");
else if (guess < number)
    alert ("you are too low");
else 
  alert ("Correct you win!");
}
