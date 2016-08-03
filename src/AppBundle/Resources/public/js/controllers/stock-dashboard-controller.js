angular.module('stockTracker')		
	
.controller("DashboardController", [
	'GameAction',
	'GameState',
	'$http',
	function(GameAction, GameState, $http){
		
		this.setGame = function(type){
			switch(type){
				case "newStock":
					GameState.newGame();
					GameAction.setStatus('roll', true);
					GameAction.setStatus('gameSetup', false);
					GameAction.setStatus('playerSetup', true);
					GameAction.setStatus('gameActive', true);
					break;
				case "savedStock":
					GameState.newGame();
					GameAction.setStatus('roll', true);
					GameAction.setStatus('gameSetup', false);
					GameAction.setStatus('playerSetup', true);
					GameAction.setStatus('gameActive', true);
					break;
			};
		};
	}
]);	