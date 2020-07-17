var myapp3=angular.module("myApp3",[]);


myapp3.controller("menuController", function($scope,$http){
    
   const param = new URLSearchParams(window.location.search);
    
   
    $scope.getMenu=function(){
        
        $http({
        method:"GET",
        url:"http://localhost:8080/FinalYearProject/ordermanzer/restaurantJson1.php?restaurant="+param.get('restaurant').toString()
    }).then(function(response){
      $scope.menuRecords=response.data.records;
        console.log($scope.menuRecords);
      
  },function(response){
      
  }); 
        
    }

  


  
    
});