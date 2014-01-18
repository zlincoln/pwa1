/*
- Zachary Lincoln
- Duel 3
- Sat 18, 2014
*/
document.addEventListener('DOMContentLoaded', function(){
	var player1 = {
		name: 'Kabal',
		health: 100,
		damage: 50,
		DOMContainer: document.querySelectorAll("#kabal p")[0]
	}

	var player2 = {
		name: 'Kratos',
		health: 100,
		damage: 50,
		DOMContainer: document.querySelectorAll('#kratos p')[0]
	}

	var playerArray = [player1,player2];

	function updateInterface(){
		var outcome = false;
		for(var i = 0; i < playerArray.length; i++){
			playerArray[i].DOMContainer.innerHTML = '<h4>'+playerArray[i].name+'</h4>'+'<span>'+playerArray[i].health+'</span>';
		}
		// outcome = winnerCheck(rounds, current_round);
	}

	function fight(){
		var rounds = 10,
				outcome = false,
				current_round = 0;

		alert(player1[0]+": "+player1[1]+" ** START ** "+player2[0]+": "+player2[1]);
		for(var i = 0; i < rounds; i++){
			current_round = i+1;
			player1[1] -= Math.floor(Math.random() * (player2[2] - (player2[2]/2)) + (player2[2]/2));
			player2[1] -= Math.floor(Math.random() * (player1[2] - (player1[2]/2)) + (player1[2]/2));
			outcome = winnerCheck(rounds, current_round);
			if(outcome.game_over){
				break;
			}else{
				alert(player1[0]+": "+player1[1]+" ** ROUND "+current_round+" ** "+player2[0]+": "+player2[1]);
			}
		}
		if(!outcome.winner){
			alert('Players Tied!');
		}else{
			alert(outcome.winner+" Wins!!");
		}
	}

	function winnerCheck(rounds, current_round){
		var outcome = {
			game_over: false,
			winner: false
		}
		if(rounds == current_round){
			outcome.game_over = true;
			if(player1[1] != player2[1]){
				outcome.winner = (player1[1] > player2[1]) ? player1[0] : player2[0];
			}
		}else{
			if(player1[1] <= 0 && player2[1] <=0){
				outcome.game_over = true;
			}else if(player1[1] <= 0 || player2[1] <= 0){
				outcome.game_over = true;
				outcome.winner = (player1[1] > player2[1]) ? player1[0] : player2[0];
			}
		}
		return outcome;
	}

	updateInterface();

	// fight();
});