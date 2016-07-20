angular.module('stockTracker')		
	
.controller("GameBodyController", [
	'GameAction',
	function(GameAction){
		this.gameStatus = GameAction.status;
	}
]);	