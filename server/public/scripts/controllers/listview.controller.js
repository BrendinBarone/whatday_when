myApp.controller('ListViewController', function(UserService) {
  console.log('ListViewController created');
  var lvc = this;
  lvc.userService = UserService;
  lvc.userObject = UserService.userObject;
});
