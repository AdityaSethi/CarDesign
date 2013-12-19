automobileApp.controller('MoreDetailsPhaseInitiativeCtrl', function($scope, $location, $routeParams, localStorageService) {

	var carObj = {};

	$scope.nextPhase = function(pm, cost){
		carObj.idVal = $routeParams.id;
		carObj.pm = pm;
		carObj.cost = cost;
		if($scope.car.id != '' && $scope.car.name != ''){
			localStorageService.updatePhase(carObj);
			$scope.overViewComplete = false;
			$location.path('PhaseDesign/'+$scope.car.id);
		}
		else{
			$scope.overViewComplete = true;
		}
	}

 });