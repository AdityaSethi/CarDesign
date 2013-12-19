automobileApp.controller('PhaseInitiativeCtrl', function($routeParams, $scope, localStorageService) {

	$scope.car = $routeParams.id
          ? localStorageService.getData($routeParams.id)
          : new Car();
          
    $scope.selectViewState = 'edit';      
    $scope.phaseButtonVisiblity = true;     
    $scope.selectView = "views/overviewPhaseInitiative.html";
    
    $scope.viewSelectionInitiative = function(selectView){
    	$scope.selectView = selectView;
    };

    $scope.editClick = function(){
    	$scope.selectViewState = 'edit';
    	if($scope.selectView == "views/overviewView.html"){
    		$scope.selectView = "views/overviewPhaseInitiative.html";
    	}
    	else{
    		$scope.selectView = "views/MoreDetails.html";
    	}    
    };

    $scope.viewClick = function(){
    	$scope.selectViewState = 'view';
    	if($scope.selectView == "views/overviewPhaseInitiative.html"){
    		$scope.selectView = "views/overviewView.html";
    	}
    	else{
    		$scope.selectView = "views/MoreDetailsView.html";
    	}      
    };
});
