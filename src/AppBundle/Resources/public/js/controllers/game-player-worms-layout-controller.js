angular.module('stockTracker')

.controller("PlayerWormsLayoutController", ['GameAction', function(GameAction){
	this.gameStatus = GameAction.status;
}]);
	