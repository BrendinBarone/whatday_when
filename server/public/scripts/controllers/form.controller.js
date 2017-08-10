myApp.controller('FormController', function(UserService, $http) {
  console.log('FormController created');
  var fc = this;
  fc.userService = UserService;

//Check boxes
fc.checkboxModel = {
value1 : false,
value2 : false,
value3 : false,
value4 : false,
value5 : false,
value6 : false,
value7 : false  
}
});
