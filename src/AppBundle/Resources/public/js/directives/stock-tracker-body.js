angular.module('stockTracker')

.directive("stockTrackerBody", function() {
	return {
		restrict: 'E',
		templateUrl: Routing.generate('angular_templates', { name: 'stock-tracker-body'})
	};
});	