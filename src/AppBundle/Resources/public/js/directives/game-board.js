angular.module('stockTracker')

.directive("gameBoard", function() {
	return {
		restrict: 'E',
		templateUrl: Routing.generate('angular_templates', { name: 'game-board'})
	};
});	