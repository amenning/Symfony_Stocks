angular.module('stockTracker')

.directive("gameRegistration", function() {
	return {
		restrict: 'E',
		templateUrl: Routing.generate('angular_templates', { name: 'game-registration'})
	};
});	