angular.module('stockTracker')

.directive("gameBody", function() {
	return {
		restrict: 'E',
		templateUrl: Routing.generate('angular_templates', { name: 'game-body'})
	};
});	