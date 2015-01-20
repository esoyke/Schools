/**
 * Created by esoyke on 1/13/15.
 */
angular.module('app').factory('cachedPendingTrans', function(pendingTransaction){
    var pendingTransactionList;

    return {
        query: function() {
            if(!pendingTransactionList){
                pendingTransactionList = pendingTransaction.query();
            }
            return pendingTransactionList;
        }
    }
})