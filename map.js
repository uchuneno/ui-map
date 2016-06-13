function onGoogleReady() {
	angular.bootstrap(document.getElementsByTagName('body')[0], ['MyApp']);
}


angular.module('MyApp',['ui.map'])
.controller('MainCtrl', function ($scope, $http){

	$http.get('map.geojson')
	.success(function (data) {
		$scope.jsonDat = data.res;
		console.log('Checking the result',angular.toJson($scope.jsonDat));
	})

	$scope.mapOptions = {
		center: new google.maps.LatLng(-1.2094458,118.5776462),
		zoom: 5,

	};
	$scope.addMarker = function (event, params) {
		new google.maps.Marker({
			map: $scope.MyMap,
			position: params[0].latlng
		});
		//map.data.addGeoJson(map.geojson);
	
	}

});