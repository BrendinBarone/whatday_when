myApp.controller('FormController', function(UserService) {
  console.log('FormController created');
  var fc = this;
  fc.userService = UserService;

});
