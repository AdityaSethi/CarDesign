var automobileApp = angular.module('automobileApp', []);

automobileApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/PhaseInitiative/:id', {templateUrl: 'views/phaseInitiative.html', controller: 'PhaseInitiativeCtrl'});
    $routeProvider.when('/Overview', {templateUrl: 'views/overview.html', controller: 'OverviewCtrl'});
    $routeProvider.when('/LandingPage', {templateUrl: 'views/LandingPage.html', controller: 'LandingPageCtrl'});
    $routeProvider.when('/PhaseDesign/:id', {templateUrl: 'views/PhaseDesign.html', controller: 'PhaseDesignCtrl'});
    $routeProvider.when('/LaunchPhase/:id', {templateUrl: 'views/LaunchingPhase.html', controller: 'LaunchPhaseCtrl'});
    $routeProvider.when('/AddCar', {templateUrl: 'views/addCar.html', controller: 'AddCarCtrl'});
	$routeProvider.otherwise({ redirectTo: '/LandingPage' });    
}]);