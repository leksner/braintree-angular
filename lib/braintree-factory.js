function braintreeFactory (braintree) {
  return function braintreeAngular ($http) {
    var $braintree = {}

    $braintree.clientToken = null

    Object.keys(braintree).forEach(function (key) {
      $braintree[key] = braintree[key]
    })

    $braintree.setClientToken = function (token) {
      $braintree.clientToken = token;
    }

    $braintree.buildClient = function () {
      return (new braintree.api.Client({clientToken: $braintree.clientToken}))
    }

    $braintree.setupDirective = function (type, options) {
      if ($braintree.clientToken) {
        braintree.setup($braintree.clientToken, type, options)
      } else {
        console.error('braintree client token is not set')
      }
    }

    return $braintree
  }
}

module.exports = braintreeFactory
