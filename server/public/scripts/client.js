var myApp = angular.module('myApp', ['ngRoute', 'ngMaterial', 'checklist-model']);

myApp.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('orange')
      .primaryPalette('deep-orange')
      .accentPalette('orange')
      .warnPalette('orange')
      .backgroundPalette('deep-orange');
  });
/// Routes ///
myApp.config(function($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix('');
  console.log('myApp -- config')
  $routeProvider
    .when('/home', {
      templateUrl: '/views/templates/home.html',
      controller: 'LoginController as lc',
    })
    .when('/register', {
      templateUrl: '/views/templates/register.html',
      controller: 'LoginController as lc'
    })
    .when('/user', {
      templateUrl: '/views/templates/user.html',
      controller: 'UserController as uc',
      resolve: {
        getuser : function(UserService){
          return UserService.getuser();
        }
      }
    })
    .when('/listview', {
      templateUrl: '/views/templates/listview.html',
      controller: 'ListViewController as lvc',
      resolve: {
        getuser : function(UserService){
          return UserService.getuser();
        }
      }
    })
    .when('/form', {
      templateUrl: '/views/templates/form.html',
      controller: 'FormController as fc',
      resolve: {
        getuser : function(UserService){
          return UserService.getuser();
        }
      }
    })
    .when('/completed', {
      templateUrl: '/views/templates/completed.html',
      controller: 'CompletedController as cc',
      resolve: {
        getuser : function(UserService){
          return UserService.getuser();
        }
      }
    })
    .otherwise({
      redirectTo: 'home'
    });
});
