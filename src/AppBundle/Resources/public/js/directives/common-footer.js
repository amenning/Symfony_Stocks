angular.module('stockTracker')			

.directive("commonFooter", function() {
	return {
		restrict: 'E',
		templateUrl: Routing.generate('angular_templates', { name: 'common-footer' })
	};
});