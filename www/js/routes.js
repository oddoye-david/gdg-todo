angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
      
        
    .state('tabsController.addTodo', {
      url: '/add',
      views: {
        'tab1': {
          templateUrl: 'templates/addTodo.html',
          controller: 'addTodoCtrl'
        }
      }
    })
        
      
    
      
        
    .state('tabsController.viewTodos', {
      url: '/view',
      views: {
        'tab2': {
          templateUrl: 'templates/viewTodos.html',
          controller: 'viewTodosCtrl'
        }
      }
    })
        
      
    
      
    .state('tabsController', {
      url: '/page1',
      abstract:true,
      templateUrl: 'templates/tabsController.html'
    })
      
    ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/page1/add');

});