angular.module('stockTracker')

.directive("stockTrackerSetup", function() {
	return {
		restrict: 'E',
		templateUrl: Routing.generate('angular_templates', { name: 'stock-tracker-setup'})
	};
});	