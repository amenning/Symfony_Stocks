angular.module('stockTracker')

.controller("GameHeaderController", ['GameAction', function(GameAction){
	this.name = GameAction.status;
}]);