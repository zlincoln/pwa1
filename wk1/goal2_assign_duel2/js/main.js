/*
- Zachary Lincoln
- Duel 1
- Sat 11, 2014
*/

var player1 = ['Kabal', 100, 50];

var player2 = ['Kratos', 100, 50];

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

fight();