/**
 * Created by esoyke on 1/13/15.
 *
 * Factories to retrieve pending auths and recent posted transactions via REST service
 */

angular.module('app').factory('pendingTransaction', function($resource) {
    var TransactionResource = $resource('/api/pendingTransactions/:_id', {_id: "@id"}, {
        update: {method:'PUT', isArray:false}
    });
    return TransactionResource;
})

angular.module('app').factory('recentPostedTransaction', function($resource) {
    var TransactionResource = $resource('/api/postedTransactions/:_id', {_id: "@id"}, {
        update: {method:'PUT', isArray:false}
    });
    return TransactionResource;
})