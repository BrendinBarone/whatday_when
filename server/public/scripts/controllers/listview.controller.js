myApp.controller('ListViewController', function(UserService, $http) {
  console.log('ListViewController created');
  var lvc = this;
  lvc.userService = UserService;
  lvc.userObject = UserService.userObject;

  // todays date
  lvc.today = moment().calendar();
  lvc.todayDate = moment().format('MM/DD/YYYY');

  // tomorrows date
  lvc.tomorrow = moment().add(1, 'days').format('dddd');
  lvc.tomorrowDate = moment().add(1, 'days').format('MM/DD/YYYY');

  // twoDays date
  lvc.twoDays = moment().add(2, 'days').format('dddd');
  lvc.twoDaysDate = moment().add(2, 'days').format('MM/DD/YYYY');

  // threeDays date
  lvc.threeDays = moment().add(3, 'days').format('dddd');
  lvc.threeDaysDate = moment().add(3, 'days').format('MM/DD/YYYY');

  // fourDays date
  lvc.fourDays = moment().add(4, 'days').format('dddd');
  lvc.fourDaysDate = moment().add(4, 'days').format('MM/DD/YYYY');

  // fiveDays date
  lvc.fiveDays = moment().add(5, 'days').format('dddd');
  lvc.fiveDaysDate = moment().add(5, 'days').format('MM/DD/YYYY');

  // sixDays date
  lvc.sixDays = moment().add(6, 'days').format('dddd');
  lvc.sixDaysDate = moment().add(6, 'days').format('MM/DD/YYYY');

  lvc.todayFunc = function() {
    var obj = {
      dateChange: lvc.todayDate
    };
    console.log('today', obj.dateChange);
    getTasks(obj);
  }

  lvc.tomorrowFunc = function() {
    var obj = {
      dateChange: lvc.tomorrowDate
    };
    console.log('tomorrow', obj.dateChange);
    getTasks(obj);
  }

  lvc.twoDaysFunc = function() {
    var obj = {
      dateChange: lvc.twoDaysDate
    };
    console.log('blah', obj.dateChange);
    getTasks(obj);
  }
  lvc.threeDaysFunc = function() {
    var obj = {
      dateChange: lvc.threeDaysDate
    };
    console.log('three', obj.dateChange);
    getTasks(obj);
  }
  lvc.fourDaysFunc = function() {
    var obj = {
      dateChange: lvc.fourDaysDate
    };
    console.log('four', obj.dateChange);
    getTasks(obj);
  }
  lvc.fiveDaysFunc = function() {
    var obj = {
      dateChange: lvc.fiveDaysDate
    };
    console.log('five', obj.dateChange);
    getTasks(obj);
  }
  lvc.sixDaysFunc = function() {
    var obj = {
      dateChange: lvc.sixDaysDate
    };
    console.log('six', obj.dateChange);
    getTasks(obj);
  }

  //call gettasks function to pull tasks from DB
  startList();

  function startList() {
    $http.get('/tasks').then(function(response) { //get request in disguise
      console.log(response.data);
      lvc.tasks = response.data;
      console.log("listview object", lvc.tasks);
    })
  };

  // getTasks function (function declaration)
  function getTasks(obj) {
    $http.post('/tasks', obj).then(function(response) { //get request in disguise
      console.log(response.data);
      lvc.tasks = response.data;
      console.log("listview object", lvc.tasks);
    })
  };

  // remove Tasks function (function expression)
  lvc.deleteTask = function(id) {
    console.log('calling delete function, id = ', id);
    $http.delete('/tasks/' + id).then(function(response) {
      getTasks(obj);
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
    })
  };
});
