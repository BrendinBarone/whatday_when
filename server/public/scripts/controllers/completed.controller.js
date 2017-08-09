myApp.controller('CompletedController', function(UserService) {
  console.log('CompletedController created');
  var cc = this;
  cc.userService = UserService;
  cc.userObject = UserService.userObject;
});
