/**
 * Created by esoyke on 1/13/15.
 */
angular.module('app').factory('transaction', function($resource) {
    var TransactionResource = $resource('/api/pendingTransactions/:_id', {_id: "@id"}, {
        update: {method:'PUT', isArray:false}
    });
    return TransactionResource;
})