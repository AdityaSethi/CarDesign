automobileApp.controller('DesignPhaseDetailsCtrl', function($routeParams, $scope, localStorageService) {

	var csrObj = {};

	$scope.updateLaunchPhase = function(remote, onstar, abs, elec){
		carObj.remoteKey = remote;
		carObj.onStar = onstar;
		carObj.abs = abs;
		carObj.electronicStablity = elec;
	};

});