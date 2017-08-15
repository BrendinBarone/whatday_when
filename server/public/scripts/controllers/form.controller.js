myApp.controller('FormController', function(UserService, $http) {
  console.log('FormController created');
  var fc = this;
  fc.userService = UserService;
  fc.results = {};
  fc.results.taskname = '';
  fc.results.time = '';
  fc.results.notes = '';
  fc.results.date = [];


  console.log(fc.results);
  //top date
  fc.top = moment().format('dddd') + ', ' + moment().format('MMM Do');

  // todays date
  fc.today = moment().format('dddd');
  fc.todayDate = moment().format('MM/DD/YYYY');

  // tomorrows date
  fc.tomorrow = moment().add(1, 'days').format('dddd');
  fc.tomorrowDate = moment().add(1, 'days').format('MMM Do');

  // twoDays date
  fc.twoDays = moment().add(2, 'days').format('dddd');
  fc.twoDaysDate = moment().add(2, 'days').format('MMM Do');

  // threeDays date
  fc.threeDays = moment().add(3, 'days').format('dddd');
  fc.threeDaysDate = moment().add(3, 'days').format('MMM Do');

  // fourDays date
  fc.fourDays = moment().add(4, 'days').format('dddd');
  fc.fourDaysDate = moment().add(4, 'days').format('MMM Do');

  // fiveDays date
  fc.fiveDays = moment().add(5, 'days').format('dddd');
  fc.fiveDaysDate = moment().add(5, 'days').format('MMM Do');

  // sixDays date
  fc.sixDays = moment().add(6, 'days').format('dddd');
  fc.sixDaysDate = moment().add(6, 'days').format('MMM Do');


  // submitForm();
  // Post Tasks function (function expression)
  fc.submitForm = function() {
    fc.results.formattedtime = moment(fc.results.time).format('h:mm:ss a');
    console.log("results:", fc.results);
    $http.post('/form', fc.results)
    .then(function(response) {
      console.log("response:", response);
    });
  }
});
