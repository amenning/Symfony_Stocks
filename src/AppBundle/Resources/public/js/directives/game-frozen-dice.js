angular.module('stockTracker')		

.directive("gameFrozenDice", function() {
	return {
		restrict: 'E',
		templateUrl: Routing.generate('angular_templates', { name: 'game-frozen-dice'})
	};
});	