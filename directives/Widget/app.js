(function () {
  'use strict';

  angular.module('myApp',[])
    .controller('MainCtrl',['$scope', function($scope){
      $scope.start = 5;
      $scope.stop = 95;
      $scope.current = 5;
    }])
    .directive('rncSliderRange',[function(){
      return {
        restrict: 'A',
        require: "?ngModel",
        link: function(scope, element, attr, ngModel){
          var initialized = false;
          if(!ngModel){
            return;
          }

          setTimeout(function(){
            initialized = element.slider()
              .on('slide', function(ev, ui){
                console.info("Slider changed: " + ui.value);
                scope.$apply(function(){
                  scope.current = ui.value;
                });
              });
            element.slider({min: scope.start});
            element.slider({max: scope.stop});
          });

          ngModel.$render = function(val){
            if(!initialized){
              return;
            }
            element.slider("enabled");
          }
        }
      };
    }]);

}());
