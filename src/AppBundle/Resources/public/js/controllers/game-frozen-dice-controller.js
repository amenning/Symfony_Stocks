angular.module('stockTracker')

.controller("FrozenDiceController", ['FrozenDiceArray', function(FrozenDiceArray){
	this.diceValues = FrozenDiceArray.array;
	this.frozenStatus = FrozenDiceArray.frozenStatus;
}]);
