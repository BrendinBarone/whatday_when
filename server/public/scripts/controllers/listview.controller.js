myApp.controller('ListViewController', function(UserService, $http) {
  console.log('ListViewController created');
  var lvc = this;
  lvc.userService = UserService;
  lvc.userObject = UserService.userObject;
  // todays date
  var today = new Date();
   document.getElementById('date').innerHTML= today.toDateString();

   //call gettasks function to pull tasks from DB
getTasks();

// getTasks function
function getTasks() {
$http.get('/tasks').then(function(response) {
console.log(response);
lvc.tasks = response.data
});
}});
