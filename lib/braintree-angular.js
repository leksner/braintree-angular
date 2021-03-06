// Everything that's not easily unit testable goes in this file

var braintreeWeb = require('braintree-web')
var braintreeFactory = require('./braintree-factory')
var braingular = window.angular.module('braintree-angular', [])

braingular.factory('$braintree', [
  '$http',
  braintreeFactory(braintreeWeb)
])

braingular.directive('braintreeDropin', function () {
  return {
    restrict: 'AEC',
    scope: {
      options: '='
    },
    template: '<div id="bt-dropin"></div>',
    controller: ['$scope', '$braintree', function ($scope, $braintree) {
      var options = $scope.options || {}
      options.container = 'bt-dropin'

      $braintree.setupDirective('dropin', options)
    }]
  }
})

braingular.directive('braintreePaypal', function () {
  return {
    restrict: 'AEC',
    scope: {
      options: '='
    },
    template: '<div id="bt-paypal"></div>',
    controller: ['$scope', '$braintree', function ($scope, $braintree) {
      var options = $scope.options || {}
      options.container = 'bt-paypal'

      $braintree.setupDirective('paypal', options)
    }]
  }
})

module.exports = braingular
