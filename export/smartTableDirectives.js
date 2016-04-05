(function(){
  'use strict';

  angular.module('smart-table')
    .directive('stFilteredCollection', stFilteredCollection);
    function stFilteredCollection() {
      
         function linkFunction(scope, element, attr, ctrl) {

            scope.$watch(function () {
              return ctrl.getFilteredCollection();
            }, function (newValue, oldValue) {
              scope.stFilteredCollection = ctrl.getFilteredCollection();
            });
          }

        return {
          restrict: 'A',
          require: '^stTable',
          scope: {
            stFilteredCollection: '='
          },
          controller: 'stTableController',
          link: linkFunction
        };
    }
});
