/**
 * Created by esoyke on 1/14/15.
 */
angular.module('app').controller('cardholderInfoCtrl', function($scope, cachedCardholderInfo){
    $scope.cardholderInfo = cachedCardholderInfo.query();
    //$scope.firstCardholder = cachedCardholderInfo.queryFirst();
    //$scope.firstCard = $scope.cardholderInfo[0];
})