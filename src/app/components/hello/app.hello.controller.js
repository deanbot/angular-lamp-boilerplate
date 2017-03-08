angular.module('app.hello')
  .controller('HelloCtrl', HelloCtrl);

function HelloCtrl() {
  var vm = this;
  activate();

  // log current weather data
  function activate() {
    vm.title = "Hello World";
  }
}