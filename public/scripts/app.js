console.log('JS sourced');

// Define `app` as angular module use ngRoute
var app = angular.module('routeApp', ['ngRoute']);


// Define client-side routes
app.config(function($routeProvider) {
	$routeProvider.when('/', {
		template: 'views/partials/phoenix.html',
		controller: 'PhoenixController as pc'
	}).when('/wc', {
		template: 'views/partials/wolverine.html',
		controller: 'WolverineController as wc'
	}).when('/qc', {
		templateUrl: 'views/partials/quicksilver.html',
		controller: 'QuicksilverController as qc'
	})
});

// PhoenixController
app.controller('PhoenixController', PhoenixController);

// WolverineController
app.controller('WolverineController', WolverineController);

// QuicksilverController
app.controller('QuicksilverController', QuicksilverController);

function PhoenixController() {
	console.log('PhoenixController is loaded');
}

function WolverineController() {
	console.log('WolverineController is loaded');
}

function QuicksilverController() {
	console.log('QuicksilverController is loaded');
}
