/**
 * Created by esoyke on 1/13/15.
 */
angular.module('app').controller('statementListCtrl', function($scope, cachedStatements, cachedPendingTransactions, cachedPostedTransactions){
    $scope.statements = cachedStatements.query();
    $scope.pendingTransactions = cachedPendingTransactions.query();
    $scope.postedTransactions = cachedPostedTransactions.query();
    //TODO just sort by date
    //$scope.sortOptions = [{value: "title", text: "Sort By Title"},
    //    {value: "statementDate", text: "Sort By Statement Date"}];
    //$scope.sortOrder = $scope.sortOptions[0].value;
})