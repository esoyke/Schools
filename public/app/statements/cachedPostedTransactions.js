/**
 * Created by esoyke on 1/13/15.
 */
angular.module('app').factory('cachedPostedTransactions', function(recentPostedTransaction){
    var transactionList;

    return {
        query: function() {
            if(!transactionList){
                transactionList = recentPostedTransaction.query();
            }
            return transactionList;
        }
    }
})