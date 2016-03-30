// MAIN CONTROLLER
function mainController($scope, $http, $location, $rootScope, userService) {
	$scope.op1 = 1;
	$scope.classPage = 'log';
	
	var ageFrom = 18;
	var ageTo = 65;
	
		var onChangeAge = function (data) {
		ageFrom = data.from;
		ageTo = data.to;
		$scope.$apply();
	};
	
	
	var tailleFrom = 155;
	var tailleTo = 190;
	
		var onChangeTaille = function (data) {
		tailleFrom = data.from;
		tailleTo = data.to;
		$scope.$apply();

	};
	
	$("#range").ionRangeSlider({
		hide_min_max: true,
		keyboard: true,
		min: 18,
		max: 99,
		from: 18,
		to: 65,
		type: 'double',
		step: 1,
		prefix: "",
		grid: true,
		onChange: onChangeAge,
		onFinish: onChangeAge
	});

	$("#range1").ionRangeSlider({
		hide_min_max: true,
		keyboard: true,
		min: 140,
		max: 240,
		from: 155,
		to: 190,
		type: 'double',
		step: 1,
		prefix: "",
		grid: true,
		onChange: onChangeTaille,
		onFinish: onChangeTaille
	});

	
	$scope.selectTaille = function(user){
		return (user.taille < tailleTo && user.taille > tailleFrom);
	}
	
	
	$scope.selectAge = function(user){
		var birth = new Date(user.date);
		var now = new Date();
		var age = now.getFullYear() - birth.getFullYear();
		
		return (age < ageTo && age > ageFrom);
	}


	function load() {
		userService.get().then(function (res) {
			$scope.todos = res.data;
		});
	}

	function findUser() {
		userService.get().then(function (res) {
			$scope.users = res.data;
		});
	}
	$scope.add = function () {
		var data = {};


		data.sexe = $scope.sexes[$scope.sexe];
		data.image = $scope.imageStrings[0];
		data.ville = $scope.ville;
		data.date = $scope.date;
		data.pseudo = $scope.pseudo;
		data.email = $scope.email;
		data.mdp = $scope.mdp;
		data.statut = $scope.statut;
		data.attentes = $scope.attentes;
		data.avez = $scope.avez;
		data.enfants = $scope.enfants;
		data.taille = $scope.taille;
		data.silhouette = $scope.silhouette;
		data.cheveux = $scope.cheveux;
		data.couleurchvx = $scope.couleurchvx;

		data.qualite01 = $scope.qualite01;
		data.qualite02 = $scope.qualite02;
		data.qualite03 = $scope.qualite03;
		data.qualite04 = $scope.qualite04;
		data.qualite05 = $scope.qualite05;

		data.manie01 = $scope.manie01;
		data.manie02 = $scope.manie02;
		data.manie03 = $scope.manie03;
		data.manie04 = $scope.manie04;
		data.manie05 = $scope.manie05;
		data.manie06 = $scope.manie06;

		data.interets01 = $scope.interets01;
		data.interets02 = $scope.interets02;
		data.interets03 = $scope.interets03;
		data.interets04 = $scope.interets04;
		data.interets05 = $scope.interets05;
		data.interets06 = $scope.interets06;

		data.musique01 = $scope.musique01;
		data.musique02 = $scope.musique02;
		data.musique03 = $scope.musique03;
		data.musique04 = $scope.musique04;
		data.musique05 = $scope.musique05;
		data.musique06 = $scope.musique06;
		data.musique07 = $scope.musique07;
		data.musique08 = $scope.musique08;
		data.musique09 = $scope.musique09;
		data.musique010 = $scope.musique010;
		data.musique011 = $scope.musique011;

		data.film01 = $scope.film01;
		data.film02 = $scope.film02;
		data.film03 = $scope.film03;
		data.film04 = $scope.film04;
		data.film05 = $scope.film05;
		data.film06 = $scope.film06;
		data.film07 = $scope.film07;
		data.film08 = $scope.film08;

		data.travail01 = $scope.travail01;
		data.travail02 = $scope.travail02;
		data.travail03 = $scope.travail03;
		data.travail04 = $scope.travail04;
		data.travail05 = $scope.travail05;
		data.travail06 = $scope.travail06;

		data.passeTemps01 = $scope.passeTemps01;
		data.passeTemps02 = $scope.passeTemps02;
		data.passeTemps03 = $scope.passeTemps03;
		data.passeTemps04 = $scope.passeTemps04;
		data.passeTemps05 = $scope.passeTemps05;

		userService.create(data);

	}
	$scope.update = function (todo) {
		userService.update(todo._id, todo).then(function (res) {
			load();
		});
	}
	$scope.delete = function (todo) {
		userService.delete(todo._id).then(function (res) {
			load();
		});
	}
	//============ Connection ==============
	$scope.connection = function (){
	    if ($scope.userEmail == 'yoan@wild.fr' && $scope.userMdp =="1234"){
	        $location.path ('/recherche');
	    }
	    else {
	        $scope.connection = 1;
	    }
	}
	// ----------- pageProfil ----------- 

	$scope.pageProfil = function (id){
		//todoService.create(id);
		$location.path('/profil/' + id); 
	}

	//----------- Modal ---------------
$scope.infoProfil = function (id){
    userService.get().then(function (res) {
        $scope.todos = res.data;
        $scope.index = -1;
        $scope.todos.forEach(function (todo, index){
            if (todo._id == id){
                $scope.index = index;
                return;
            }
        });
    });
}
	// -----------  Views  --------------
	$scope.page = function () {

		$scope.op1 += 1;
	}

	$scope.precedent = function () {
		$scope.op1 -= 1;
	}
	var self = this;
	self.register = function () {
		// Register the new user
	};
	load();
//==================== click profil ================
    $(document).ready(function() {
    $(".btn-pref .btn").click(function () {
        $(".btn-pref .btn").removeClass("btn-primary").addClass("btn-default");
        //$(".tab").addClass("active"); // instead of this do the below 
        $(this).removeClass("btn-default").addClass("btn-primary");
    });
    });

	//  ------------   Flow   -----------
	$scope.imageStrings = [];
	// datas.images = [];
	// datas.push($scope.datas);
	$scope.processFiles = function (files) {
		angular.forEach(files, function (flowFile, i) {
			var fileReader = new FileReader();
			fileReader.onload = function (event) {
				var uri = event.target.result;
				$scope.imageStrings[i] = uri;
				// var image = new Object();
				// image["image"] = $scope.imageStrings[i];
				// datas.images.push(image);
				// console.log(datas);
				// console.log($scope.datas);
			};
			fileReader.readAsDataURL(flowFile.file);
		});
	};
	$scope.EMAIL_REGEXP = /[a-z0-9!#$%&'*+=?^_‘{|}~-]+(?:\.[a-z0-9!#$%&'*+=?^_‘{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
}