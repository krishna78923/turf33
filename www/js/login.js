var login = angular.module('myApp2', []);

login.controller('loginController' , function($scope,$http){
    $scope.usercheck=false;
    
    $scope.logincheck=function(){
        $http({
        method:"GET",
        url:"http://localhost:8080/FinalYearProject/ordermanzer/personJson.php?email="+$scope.email+"&pass="+$scope.pass
    }).then(function(response){
        $scope.records=response.data.records;
        $scope.status=response.data.status;
        $scope.message=response.data.message;
            console.log($scope.records.isUserAlreadyPresent);
            
            if($scope.records.isUserAlreadyPresent==true){
                $scope.usercheck=true;
                $scope.redirect();
            }
            else{
               alert("Please Register");
            }
            
            
            
        
    },function(response){
        
    });
    }
    
    $scope.redirect=function(){
        
        window.location.href="http://localhost:8080/FinalYearProject/ordermanzer/uiRestaurant2.html"
    }
    
    
    
    
    
    
});