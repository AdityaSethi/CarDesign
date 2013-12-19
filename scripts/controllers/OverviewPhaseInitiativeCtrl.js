automobileApp.controller('OverviewPhaseInitiativeCtrl', function($scope, $routeParams, localStorageService) {

	var idVal = $scope.car.id;
	var carObj = {};
	
	$scope.updateData = function(name, segment){
		carObj.idVal = idVal;
		carObj.name = name;
		carObj.segment = segment;
		console.log(segment);
		localStorageService.updateData(carObj);
	}

	$scope.clear = function(){
		localStorageService.clearData();
	}

 });