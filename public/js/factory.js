angular.module('')
	.factory('factory', ['$http', function($http){

		return {
				get 	: function(){
					return $http.get('')
			}
		}

}]);