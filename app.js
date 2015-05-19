angular.module('search', ['ui.bootstrap']);

function searchCtrl($scope, $http) {
	$scope.selected = undefined;
	$http.get('sites.json').success(function(data) {
    	$scope.getSites = data;
    });
    $scope.opened = false;
    $scope.open = function() {
    	$scope.opened = true;
    }
    $scope.close = function() {
    	$scope.opened = false;
    }
}
