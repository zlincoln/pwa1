var player1name = 'Kabal',
		player1health = 100,
		player1damage = 50;

var player2name = 'Kratos',
		player2health = 100,
		player2damage = 50;

function fight(){
	var rounds = 10,
			outcome = false,
			current_round = 0;

	alert(player1name+": "+player1health+" ** START ** "+player2name+": "+player2health);
	for(var i = 0; i < rounds; i++){
		current_round = i+1;
		player1health -= Math.floor(Math.random() * (player2damage - (player2damage/2)) + (player2damage/2));
		player2health -= Math.floor(Math.random() * (player1damage - (player1damage/2)) + (player1damage/2));
		outcome = winnerCheck();
		if(outcome.game_over){
			break;
		}else{
			alert(player1name+": "+player1health+" ** ROUND "+current_round+" ** "+player2name+": "+player2health);
		}
	}
	if(!outcome.winner){
		alert('Players Tied!');
	}else{
		alert(outcome.winner+" Wins!!");
	}
}

function winnerCheck(){
	var outcome = {
		game_over: false,
		winner: false
	}
	if(player1health <= 0 && player2health <=0){
		outcome.game_over = true;
	}else if(player1health <= 0 || player2health <= 0){
		outcome.game_over = true;
		outcome.winner = (player1health > player2health) ? player1name : player2name;
	}
	return outcome;
}

fight();