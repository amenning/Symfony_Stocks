angular.module('stockTracker')

.directive("gameLogin", function() {
	return {
		restrict: 'E',
		templateUrl: Routing.generate('angular_templates', { name: 'game-login'})
	};
});	