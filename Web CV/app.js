
var app = angular.module('cvApp', []);

app.controller('mainController', function($scope, $log, $http, $cacheFactory) {

	$http.get("cv_en.json", { cache: true })
		.then(function(response) {
			var rawData = JSON.stringify(response.data);
			$scope.sections = JSON.parse(rawData);
			//$log.info( $scope.sections ); // Array

			$scope.skills = Object.keys($scope.sections[5].skills);

			for(var i = 0; i < $scope.sections.length; i++){
				$log.info( $scope.sections[i].sectionName );
				if( $scope.sections[i].sectionName === "Personal Info" ){
					$log.log("Personal");
				}
			}

		});



});
