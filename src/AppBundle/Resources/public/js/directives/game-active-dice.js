angular.module('stockTracker')	

.directive("gameActiveDice", function() {
	return {
		restrict: 'E',
		templateUrl: Routing.generate('angular_templates', { name: 'game-active-dice'})
	};
});	