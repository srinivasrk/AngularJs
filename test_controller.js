var myApp = angular.module('myApp',[]);

function test($scope){
	$scope.a=10;
	$scope.b=220;
}
function test1($scope){
	$scope.a=120;
	$scope.b=20;
}
myApp.controller('testcontroller',test);
myApp.controller('testcontroller1',test1);

