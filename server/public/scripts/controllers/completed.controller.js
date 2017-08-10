myApp.controller('CompletedController', function(UserService, $http) {
  console.log('CompletedController created');
  var cc = this;
  cc.userService = UserService;
  cc.userObject = UserService.userObject;
  //call getCompletes function to pull tasks from DB
getCompletes();

// getCompletes function
function getCompletes() {
$http.get('/completed').then(function(response) {
console.log(response);
cc.tasks = response.data
});
}});
