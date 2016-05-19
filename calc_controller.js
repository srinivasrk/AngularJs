var myapp = angular.module("calc",[]);

myapp.controller('calc_controller',function($scope){
	$scope.num1=4;
	$scope.num2=4;
	$scope.add = function(){
		var num1_int = parseInt($scope.num1);
		var num2_int = parseInt($scope.num2);
		window.alert(num1_int+num2_int);
	}
	
});

