angular.module('apres')
	.factory('factorySnow', ['$http', function($http){

		return {
				get 	: function(){
					return $http.get('')
			}
		}

}]);