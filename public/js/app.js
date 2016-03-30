function config($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'views/main.html',
			controller: 'mainController'
		})
		.when('/about', {
			templateUrl: 'views/about.html',
			controller: 'mainController'
		})
		.when('/profil', {
			templateUrl: 'views/profil.html',
			controller: 'mainController'
		})
		.when('/redirection_recherche', {
			templateUrl: 'views/redirection_recherche.html',
			controller: 'mainController'
		})
		.when('/test', {
			templateUrl: 'views/test.html'
		})
		.when('/profil/:id', {
			templateUrl: 'views/profil1.html',
			controller: 'slideController'
		})
		.when('/info', {
			templateUrl: 'views/info.html',
			controller: 'mainController'
		})
		.when('/recherche', {
			templateUrl: 'views/recherche.html',
			controller: 'mainController'
		})
		.otherwise({
			redirectTo: '/'
		});
}

function run($rootScope, $location) {
	var path = function () {
		return $location.path();
	};
	$rootScope.$watch(path, function (newVal, oldVal) {
		$rootScope.activetab = newVal;
	});
}
angular.module('app', ['ngRoute', 'ngAutocomplete', 'flow'])
	.config(config)
	.controller('mainController', mainController)
	.controller('slideController', slideController)
	.service('userService', userService)
	/*.factory('', )*/
	.config(['flowFactoryProvider', function (flowFactoryProvider) {
		flowFactoryProvider.defaults = {
			target: '/upload',
			permanentErrors: [404, 500, 501]
		};
		// You can also set default events:
		flowFactoryProvider.on('catchAll', function (event) {
			console.log('catchAll', arguments);
		});
		// Can be used with different implementations of Flow.js
		// flowFactoryProvider.factory = fustyFlowFactory;
	}])
	.run(run);
	