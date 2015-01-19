/**
 * Created by esoyke on 1/13/15.
 */
angular.module('app').factory('cachedPendingTransactions', function(transaction){
    var transactionList;

    return {
        query: function() {
            if(!transactionList){
                transactionList = transaction.query();
            }
            return transactionList;
        }
    }
})