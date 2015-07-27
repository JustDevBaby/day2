(function () {
  'use strict';

  angular.module('myApp.directives', [])
    .directive('datePicker', function () {
      return {
        restrict: 'E',
        replace: true,
        template: '<input type="text" />',
        scope: {
          select: '&'
        },
        link: function(scope, element, attrs){
          var optionsObj = {};
          optionsObj.dateFormat = 'mm/dd/yy';
          optionsObj.onSelect = function(dateTxt, picker){
            if(scope.select){
              scope.$apply(function(){
                scope.select({date: dateTxt});
              });
            }
            debugger;
          }
          element.datepicker(optionsObj);
        }
      };
    });

}());
