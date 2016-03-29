angular.module('apres')
	.config(['$routeProvider', function($routeProvider){
			$routeProvider
			.when('/', {
				templateUrl : '/html/index.html',
				controller	: 'controlHome'
			})
			.when('/snow', {
				templateUrl	: '/html/snow.html',
				controller	: 'controlSnow'
			})
			.when('/apres', {
				templateUrl	: '/html/apres.html',
				controller	: 'controlApres'
			})
	}])