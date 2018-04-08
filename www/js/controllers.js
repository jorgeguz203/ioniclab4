angular.module('app.controllers', [])
  
.controller('pageCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
	$scope.vibrate = function () {
        navigator.vibrate(200);
  };

    $scope.toast = function () {
        window.plugins.toast.show("Hey", 'short', 'center');
  };

    $scope.torch = function () {
      window.plugins.flashlight.toggle(
           function() {}, // optional success callback
           function() { alert("I do not have a flashlight"); }, // optional error callback
           {intensity: 0.3} // optional as well
      );
  };

    $scope.soundalert = function () {
        navigator.notification.beep(3);
  };

}])

 