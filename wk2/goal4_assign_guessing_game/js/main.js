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
			gameOver = false;

	function evalGuess(e){
		keycode = (e.keyCode) ? e.keyCode : null;
		if(keycode == 13 || keycode == null){
			console.log('heyo');
		}
	}

	document.querySelector('button').addEventListener('click', evalGuess);
	document.querySelector('input').addEventListener('keydown', evalGuess);

});