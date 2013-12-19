automobileApp.controller('PhaseDesignCtrl', function($routeParams, $scope, localStorageService) {

	$scope.car = $routeParams.id
          ? localStorageService.getData($routeParams.id)
          : new Car();
  $scope.selectViewState = 'edit';
  $scope.phaseButtonVisiblity = false;
  $scope.launchPhaseButton = true;
  $scope.selectView = "views/detailsPhaseDesign.html";

    $scope.viewSelectionInitiativeDesign = function(selectView){
      $scope.selectView = selectView;
    };

    $scope.editClick = function(){
      $scope.selectViewState = 'edit';
      if($scope.selectView == "views/overviewView.html"){
        $scope.selectView = "views/overviewPhaseInitiative.html";
      }
      else if($scope.selectView == "views/MoreDetailsView.html"){
        $scope.selectView = "views/MoreDetails.html";
      }
      else if($scope.selectView == "views/moreDetailsPhaseDesignView.html"){
        $scope.selectView = "views/moreDetailsPhaseDesign.html";
      }
      else if($scope.selectView == "views/detailsPhaseDesignView.html"){
        $scope.selectView = "views/detailsPhaseDesign.html";
      }   
    };

    $scope.viewClick = function(){
      $scope.selectViewState = 'view';
      if($scope.selectView == "views/overviewPhaseInitiative.html"){
        $scope.selectView = "views/overviewView.html";
      }
      else if($scope.selectView == "views/MoreDetails.html"){
        $scope.selectView = "views/MoreDetailsView.html";
      }
      else if($scope.selectView == "views/moreDetailsPhaseDesign.html"){
        $scope.selectView = "views/moreDetailsPhaseDesignView.html";
      }
      else if($scope.selectView == "views/detailsPhaseDesign.html"){
        $scope.selectView = "views/detailsPhaseDesignView.html";
      }      
    };        
});
