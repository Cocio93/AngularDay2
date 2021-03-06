var myApp = angular.module('DemoApp', []);

myApp.controller('CarController', [function () {
    var cars = [
      {id: 1, year: 1997, registered: new Date(1999, 3, 15), make: 'Ford', model: 'E350', description: 'ac, abs, moon', price: 3000}
      , {id: 2, year: 1999, registered: new Date(1996, 3, 12), make: 'Chevy', model: 'Venture', description: 'None', price: 4900}
      , {id: 3, year: 2000, registered: new Date(199, 12, 22), make: 'Chevy', model: 'Venture', description: '', price: 5000}
      , {id: 4, year: 1996, registered: new Date(2002, 3, 15), make: 'Jeep', model: 'Grand Cherokee', description: 'Air, moon roof, loaded', price: 4799}

    ];

    var self = this;
    self.cars = cars;
    self.title = "Cars Demo App";
    self.predicate = "year";
    self.reverse = false;
    self.nextId = 5;

  }]);
  
  myApp.controller('FeedbackController', ['$scope', function($scope) {
  var feedback={};
  $scope.locations = ["New York","Vancouver","Atlantis","Blackpool","Copenhagen"];
  $scope.satisfactionValues = ["Very satisfied","Satisfied","Didn't care","Dissatisfied"];
  $scope.emotions = ["Angry","Sad","Happy","Ambivalent"];

  $scope.feedback = {};
  $scope.feedback.name;
  $scope.feedback.gender;
  $scope.feedback.email;
  $scope.feedback.location;
  $scope.feedback.comments;
  $scope.feedback.satisfactionValue;
  $scope.feedback.selectedEmotions = [];//['Happy'];
  
  $scope.toggleSelect = function(value) {
      if ($scope.feedback.selectedEmotions.indexOf(value) > -1) {
          var index = $scope.feedback.selectedEmotions.indexOf(value);
          $scope.feedback.selectedEmotions.splice(index, 1);
      } else {
          $scope.feedback.selectedEmotions.push(value);
      } 
  };
  
  $scope.isChecked = function(value) {
      return ($scope.feedback.selectedEmotions.indexOf(value) > -1);
  };
  
  $scope.radioClicked= function(value) {
      $scope.feedback.satisfactionValue = value;
  };
  
  $scope.isRadioChecked = function(value) {
    return value === feedback.satisfactionValue;  
  };

}]);

