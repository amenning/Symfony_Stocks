angular.module('stockTracker')

.directive("gamePlayerOptions", function() {
	return {
		restrict: 'E',
		templateUrl: Routing.generate('angular_templates', { name: 'game-player-options'})
	};
});	