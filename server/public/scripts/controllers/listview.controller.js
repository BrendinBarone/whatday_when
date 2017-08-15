myApp.controller('ListViewController', function(UserService, $http) {
      console.log('ListViewController created');
      var lvc = this;
      lvc.userService = UserService;
      lvc.userObject = UserService.userObject;
      // todays date
      var today = moment().calendar();
      console.log(today);
      lvc.today = today;

      // tomorrows date
      var tomorrow = moment().add(1, 'days').calendar('dddd');
      console.log(tomorrow);
      lvc.tomorrow = tomorrow;

      // yesterdays date
      var yesterday = moment().subtract(1, 'days').calendar('dddd');;
      console.log(yesterday);
      lvc.yesterday = yesterday;

      //call gettasks function to pull tasks from DB
      getTasks();

      // getTasks function (function declaration)
      function getTasks() {
        $http.get('/tasks').then(function(response) {
          console.log(response.data);
          lvc.tasks = response.data;
          console.log("listview object", lvc.tasks);
        })
      };

      // remove Tasks function (function expression)
      lvc.deleteTask = function(id) {
        console.log('calling delete function, id = ', id);
        $http.delete('/tasks/' + id).then(function(response) {
          getTasks();
          console.log('delete worked', response);
          alert('Task has been deleted');
        })
      };

      // update Tasks function
      lvc.completeTask = function(id) {
        console.log('calling complete function, id = ', id);
        $http.put('/tasks/' + id).then(function(response) {
          getTasks();
          console.log('complete worked', response);
          alert('Task has been completed');
        })
      };
    });
