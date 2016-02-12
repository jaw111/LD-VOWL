require('jquery-ui');

slider.$inject = ['$rootScope'];

function slider($rootScope) {

  return {
    restrict: 'AE',
    scope: {
      value: "=model"
    },
    link: function (scope, element, attrs) {

      var setModel = function (value) {
        scope.model = value;
      };

      $(element).slider({
        range: false,
        value: scope[attrs.model],
        min: parseInt(attrs.min),
        max: parseInt(attrs.max),
        step: parseInt(attrs.step),
        slide: function (event, ui) {
          scope.$apply(function () {
            scope.value = parseInt(ui.value);
            $rootScope.$broadcast(attrs.model + '-changed', ui.value);
          });
        }
      });
    }
  };

}

export default slider;