
var app =angular.module("myApp",[]);

app.controller("personController",function($scope,$http){
    $scope.urlImagefirstname="";


    $scope.checkFirstName = function(){
          if($scope.regfirstname==""){
        $scope.urlImagefirstname="http://localhost:8080/FinalYearProject/ordermanzer/images/restaurant/cross.png";
    }
    else if($scope.regfirstname!=""){
         $scope.urlImagefirstname="http://localhost:8080/FinalYearProject/ordermanzer/images/restaurant/tick.png";
    }
    
    }
    
    
    $scope.getPersons=function(){
        $http({
        method:"GET",
        url:"http://localhost:8080/persons/personJson.php?person="+$scope.person
    }).then(function(response){
        $scope.records=response.data.records;
        $scope.status=response.data.status;
        $scope.message=response.data.message;
        
    },function(response){
        
    });
    }

    $scope.insertCustomer=function(){
      
        var  request = "http://localhost:8080/FinalYearProject/ordermanzer/personJsonv2.php?firstname="+$scope.regfirstname+"&lastname="+$scope.reglastname+"&email="+$scope.regemail+"&phone="+$scope.regphone+"&street="+$scope.regstreet+"&city="+$scope.regcity+"&dob="+$scope.regdob+"&zip="+$scope.regzip+"&pass="+$scope.regpass ;
        
        $http.get(
        request
        ).then(function(response){
            $scope.mydata=response.data.records;
            console.log($scope.mydata);
        });
        
        $scope.regbin="Successfully Registered";
        

    }

    
});


app.controller('restaurantController',function($scope,$http){

   

    $scope.getRestaurant= function(){

        if($scope)

        $http({
            method:"GET",
            url : "http://localhost:8080/FinalYearProject/ordermanzer/restaurantJson1.php?name="+$scope.Rname
        }).then(function(response){
        $scope.restoRecords=response.data.records;
        $scope.restoStatus=response.data.status;
        $scope.restoMessage=response.data.message;

        },function(response){

        });
    }
    
    

    



});


