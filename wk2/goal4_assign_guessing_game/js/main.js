/**
 * GUESSING GAME:
 *
 * Created By: Zachary Lincoln
 * Date: Jan 18, 2014
 * 
 * GUESSING GAME
 */

//Game variables
document.addEventListener('DOMContentLoaded', function(){

	var randNum = Math.floor((Math.random() * 10) + 1),
			el = {
				input: document.getElementById('input'),
				button: document.getElementsByTagName('button')[0],
				outputContainer: document.getElementById('output')
			},
			guessesRemaining = 3,
			outputMessage = null;

	function evalGuess(e){
		keycode = (e.keyCode) ? e.keyCode : null;
		if(keycode == 13 || keycode == null){
			var guess = parseInt(el.input.value);
			if(isNaN(guess) || (guess > 10 || guess < 1)){
				outputMessage = 'Please guess a number between 1 & 10';
			}else{
				if(guess == randNum){
					el.button.removeEventListener('click', evalGuess);
					el.input.removeEventListener('keydown', evalGuess);
					el.button.removeEventListener('keydown', evalGuess);
					outputMessage = 'You Win!!';
					updateInterface();
					return;
				}else if(guess > randNum){
					outputMessage = 'Too High - ';
				}else{
					outputMessage = 'Too Low - ';
				}
				guessesRemaining--;
				if(guessesRemaining == 0){
					el.button.removeEventListener('click', evalGuess);
					el.input.removeEventListener('keydown', evalGuess);
					el.button.removeEventListener('keydown', evalGuess);
					outputMessage += 'Game Over';
				}else{
					outputMessage += guessesRemaining+' Guesses Remaining';
				}
			}
			updateInterface();
		}
	}

	function updateInterface(){
		el.outputContainer.innerText = outputMessage;
	}

	el.button.addEventListener('click', evalGuess);
	el.input.addEventListener('keydown', evalGuess);
	el.button.addEventListener('keydown', evalGuess)

});