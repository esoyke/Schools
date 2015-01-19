angular.module('app').controller('mvNavBarLoginCtrl', function ($scope, $http, mvIdentity, mvNotifier, mvAuth, $location) {
    $scope.identity = mvIdentity;
    $scope.signin = function(username, password){
        mvAuth.authenticateUser(username, password).then(function(success){
            if(success){
                mvNotifier.notify('Logged in');
            }
            else{
                mvNotifier.notify('Username/Password invalid');
            }
        });
    }

    $scope.signout = function(){
        mvAuth.logoutUser().then(function(){
            $scope.username = "";
            $scope.password = "";
            mvNotifier.notify('You are logged out');
            $location.path('/');
        })
    }

    // EBS DEV ONLY
    $scope.username = 'soykes@yahoo.com';
    $scope.password = 'esoyke1';
});