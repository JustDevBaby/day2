(function () {
  'use strict';

  angular.module('myApp', [])
    .directive('simple',function(){
      return {
        restrict: 'EA',
        replace: true,
//        template: '<p>Simple</p>',
        templateUrl: 'simple.html',
        link: function(scope, element, attrs){
          if(attrs.title){
            debugger;
            console.info("Title = " + attrs.title);
            element.text(attrs.title);
          }
        }
      };
    });
}());
