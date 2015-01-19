angular.module('app').controller('mvMainCtrl', function($scope, cachedCardholderInfo){//}, mvCachedCourses, cachedStatements, cachedCardholderInfo){
    //$scope.myVar = "Hello Angular";
    //$scope.courses = mvCachedCourses.query();
    //$scope.statements = cachedStatements.query();
    $scope.cardholderInfo = cachedCardholderInfo.query();
//TODO get rid of this controller
});