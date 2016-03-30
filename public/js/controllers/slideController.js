function slideController($scope, $http, $location, $rootScope, userService, $routeParams) {
	function load(){
		userService.get().then(function (res) {
			$scope.todos = res.data;
			$scope.index = -1;
			$scope.todos.forEach(function (todo, index){
				if (todo._id == $routeParams.id){
					$scope.index = index;
					return;
				}
			});
		});
	}
	load();

	$scope.classPage = 'profil';
	

	

	//==================== click profil ================
	$(document).ready(function() {
	$(".btn-pref .btn").click(function () {
	    $(".btn-pref .btn").removeClass("btn-primary").addClass("btn-default");
	    //$(".tab").addClass("active"); // instead of this do the below 
	    $(this).removeClass("btn-default").addClass("btn-primary");   
	});
	});
}
