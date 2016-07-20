angular.module('stockTracker')		

.directive("gamePlayerWorms", function() {
	return {
		restrict: 'E',
		templateUrl: Routing.generate('angular_templates', { name: 'game-player-worms'})
	};
});	