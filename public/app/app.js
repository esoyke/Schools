angular.module('app', ['ngResource', 'ngRoute']);
// fuuuuu I misspelled ngResource and ngRoute as ng-resource and ng-route!
angular.module('app').config(function($routeProvider, $locationProvider){
    var routeRoleChecks = {
        admin: {auth: function(mvAuth) {
            return mvAuth.authorizeCurrentUserForRoute('admin')
        }},
        user: {auth: function(mvAuth) {
            return mvAuth.authorizeAuthenticatedUserForRoute()
        }}
    }

    $locationProvider.html5Mode(true);
    $routeProvider
        .when('/staticLeftbar', {templateUrl: '/partials/main/staticLeftbar',
            controller: 'cardholderInfoCtrl'
        })
        .when('/', {templateUrl: '/partials/main/main', controller: 'mvMainCtrl'})
        .when('/admin/users', {templateUrl: '/partials/admin/user-list',
            controller: 'mvUserListCtrl', resolve: routeRoleChecks.admin
        })
        .when('/signup', {templateUrl: '/partials/account/signup',
            controller: 'mvSignupCtrl'
        })
        .when('/profile', {templateUrl: '/partials/account/profile',
            controller: 'mvProfileCtrl', resolve: routeRoleChecks.user
        })
        .when('/courses', {templateUrl: '/partials/courses/course-list',
            controller: 'mvCourseListCtrl'
        })
        .when('/courses/:id', {templateUrl: '/partials/courses/course-details',
            controller: 'mvCourseDetailCtrl'
        })
        .when('/activityStatements', {templateUrl: '/partials/tabs/activityStatements',
            controller: 'statementListCtrl'
        })
        .when('/searchCardholder', {templateUrl: '/partials/tabs/searchCardholder',
            controller: 'searchCardholderCtrl'
        })
        .when('/memos', {templateUrl: '/partials/tabs/memos',
            controller: 'memoCtrl'
        })
        .when('/underConstruction', {templateUrl: '/partials/tabs/underConstruction',
            controller: 'memoCtrl'
        })
        //.when('/staticLeftbar', {templateUrl: '/partials/tabs/staticLeftbar',
        //    controller: 'mvMainCtrl'
        //})
    ;

    $routeProvider
        .when('/test', {templateUrl: '/partials/test'});
});

angular.module('app').run(function($rootScope, $location){
    $rootScope.$on('$routeChangeError', function(evt, current, previous, rejection) {
        if(rejection === 'not authorized'){
            $location.path('/');
        }

    })
});