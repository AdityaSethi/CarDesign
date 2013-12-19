automobileApp.controller('LandingPageCtrl', function($scope, $location, localStorageService) {

	$scope.car = '';
	var carObj = {id : '', name : '', projectManager : '', remoteKey: '', onStar: '', abs: '', electronicStablity: '', segment: '', mileage: '1', textContent: '', costing : '', fuelType: '', phase : 'Concept'};
	
	$scope.addCar = function(){
    	carObj.id = localStorageService.data();
    	console.log(carObj);
		localStorageService.saveData(carObj);
	   	$scope.car = carObj;
	};

	$scope.redirectPage = function(idVal, phase){
		if(phase == 'Concept'){
			$location.path('PhaseInitiative/'+idVal);
		}
		else if(phase == 'Design'){
			$location.path('PhaseDesign/'+idVal);
		}
		else if(phase == 'Launch'){
			$location.path('LaunchPhase/'+idVal);
		}
	};

	$scope.cars = localStorageService.getAllData();


});
