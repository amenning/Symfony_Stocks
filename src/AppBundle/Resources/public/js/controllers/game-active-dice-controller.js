angular.module('stockTracker')

.controller("ActiveDiceController", ['ActiveDiceArray', 'FreezeDiceAction', function(ActiveDiceArray, FreezeDiceAction){
	this.diceValues = ActiveDiceArray.array;
	
	this.freezeDice = function(diceValue){
		FreezeDiceAction.freeze(diceValue);
	};
}]);