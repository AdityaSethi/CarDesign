automobileApp.controller('MoreDetailsDesignPhaseCtrl', function($scope, $location, $routeParams, localStorageService) {

	var carObj = {};

	$scope.launchPhase = function(textData, fuel, mileage){
		console.log(textData);
		carObj.idVal = $routeParams.id;
		carObj.textContent = textData;
		carObj.fuelType = fuel;
		carObj.mileage = mileage;
		if(fuel == ''){
			$scope.fuelEntryComplete = true;
		}
		else{
			localStorageService.updateLaunchPhase(carObj);
			$location.path('LaunchPhase/'+$scope.car.id);
		}
	};

 });