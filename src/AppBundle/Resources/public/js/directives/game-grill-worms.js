angular.module('stockTracker')

.directive("gameGrillWorms", function() {
	return {
		restrict: 'E',
		templateUrl: Routing.generate('angular_templates', { name: 'game-grill-worms'})
	};
});