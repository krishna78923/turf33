var app = angular.module('myApp', []);

app.controller('myController',function($scope,$http){

  $scope.add= function(){
  	alert("Add method invoke");
  }

  $scope.getData=function(){
        
        $http({
        method:"GET",
        url:"https://turfapi.000webhostapp.com/turfJson.php?stable="+$scope.stablename
    }).then(function(response){
      $scope.races=response.data.records;
      if(!$scope.races || $scope.races.length==0){
      	console.log("Data Not Available");
      }
      else{
        console.log($scope.races.length);
    }
      
  },function(response){
      
  }); 
        
    }



});

app.controller('formInputController',function($scope,$http){



 $scope.test=function(){
        
        $http({
        method:"GET",
        url:"https://turfapi.000webhostapp.com/turfJson.php?stablename="+$scope.stablename+"&winner="+$scope.winner
    }).then(function(response){
      $scope.races=response.data.records;
      if(!$scope.races || $scope.races.length==0){
        console.log("Data Not Available");
      }
      else{
       console.log($scope.races.length);
          
    }
      
  },function(response){
      
  }); 
        
    }

    $scope.returnbtn=function (){
      window.location.href="index.html";
    }



});