myApp.controller('FormController', function(UserService, $http) {
  console.log('FormController created');
  var fc = this;
  fc.userService = UserService;
  //top date
  var top = moment().format('dddd');
  console.log(top);
  fc.top = top;

  // todays date
  var today = moment().format('dddd');
  console.log(today);
  fc.today = today;

  // tomorrows date
  var tomorrow = moment().add(1, 'days').format('dddd');
  console.log(tomorrow);
  fc.tomorrow = tomorrow;

  // twoDays date
  var twoDays = moment().add(2, 'days').format('dddd');
  console.log(twoDays);
  fc.twoDays = twoDays;

  // threeDays date
  var threeDays = moment().add(3, 'days').format('dddd');
  console.log(threeDays);
  fc.threeDays = threeDays;

  // fourDays date
  var fourDays = moment().add(4, 'days').format('dddd');
  console.log(fourDays);
  fc.fourDays = fourDays;

  // fiveDays date
  var fiveDays = moment().add(5, 'days').format('dddd');
  console.log(fiveDays);
  fc.fiveDays = fiveDays;

  // sixDays date
  var sixDays = moment().add(6, 'days').format('dddd');
  console.log(sixDays);
  fc.sixDays = sixDays;

  //Check boxes
  fc.checkboxModel = {
    value1: false,
    value3: false,
    value4: false,
    value5: false,
    value6: false,
    value7: false
  }

  // Post Tasks function
  function submitForm(id) {
    $http.post('/form/' + id).then(function(response) {
      console.log("response:", response);
      console.log("id:", id);
      fc.tasks = response.data
    });
  }
});
