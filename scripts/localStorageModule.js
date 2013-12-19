automobileApp.factory('localStorageService', function($rootScope) {  

  var cars = [];
  $rootScope.carId = cars.length;
  return {
      setLocalStorage : function(cars){
          if(typeof cars ==='undefined'){
            if(localStorage.getItem("carList") ===null){
              cars = [];
            }
            else{
              cars = JSON.parse(localStorage.getItem("carList")); // get value from localstorage
            }
          } 
          else{
            console.log('length'+cars.length);
          }  
      },

      saveData : function(car) {
         console.log(car);
         console.log(cars);
         cars.push(car); // pushing the json object in array in angular $scope variable
         localStorage.setItem("carList", JSON.stringify(cars)); // saving array in html5 local storage
         this.setLocalStorage(cars);
      },

      clearData : function(){
        console.log('preparing to clear'); 
        cars = [];
        localStorage.setItem("carList", JSON.stringify(cars)); 
        console.log('cleared');
        // clear all value in particular storage variable in HTML5 localstorage
      },

      getAllData : function(){
        cars = JSON.parse(localStorage.getItem("carList")) || cars;
        return cars;
      },

      getData : function(id){
          cars = JSON.parse(localStorage.getItem("carList")); // get value from localstorage
          for(var i = 0; i < cars.length; i++){
            if(id == cars[i].id) return cars[i];
          }
      },

      updateData : function(car){
          cars = JSON.parse(localStorage.getItem("carList")); // get value from localstorage
          for(var i = 0; i < cars.length; i++){
            if(car.idVal == cars[i].id){
              cars[i].name = car.name;
              cars[i].segment = car.segment;
              localStorage.setItem('carList' , JSON.stringify(cars));
            }
          }
          console.log(cars);
      },

      updatePhase : function(car){
          cars = JSON.parse(localStorage.getItem("carList")); // get value from localstorage
          for(var i = 0; i < cars.length; i++){
            if(car.idVal == cars[i].id){
              cars[i].projectManager = car.pm;
              cars[i].costing = car.cost;
              cars[i].phase = 'Design';
              localStorage.setItem("carList", JSON.stringify(cars)); 
            }
          }
          console.log(cars);
      },

      updateLaunchPhase : function(car){
          cars = JSON.parse(localStorage.getItem("carList")); // get value from localstorage
          console.log(car);
          for(var i = 0; i < cars.length; i++){
            if(car.idVal == cars[i].id){
              cars[i].textContent = car.textContent;
              cars[i].fuelType = car.fuelType;
              cars[i].mileage = car.mileage;
              cars[i].phase = 'Launch';
              localStorage.setItem("carList", JSON.stringify(cars)); 
            }
          }
          console.log(cars);
      },

      updateFeatures : function(car){
          cars = JSON.parse(localStorage.getItem("carList")); // get value from localstorage
          console.log(car);
          for(var i = 0; i < cars.length; i++){
            if(car.idVal == cars[i].id){
              cars[i].remoteKey = car.remoteKey;
              cars[i].onStar = car.onStar;
              cars[i].abs = car.abs;
              cars[i].electronicStablity = car.electronicStablity;
              cars[i].phase = 'Launch';
              localStorage.setItem("carList", JSON.stringify(cars)); 
            }
          }
          console.log(cars);
      },



      data: function(){
        $rootScope.carId = cars.length+1
        return $rootScope.carId;
      }
  };
});