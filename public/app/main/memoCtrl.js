/**
 * Created by esoyke on 1/19/15.
 */
angular.module('app').controller('memoCtrl', function($scope, cachedMemo){
    $scope.memos = cachedMemo.query();

})