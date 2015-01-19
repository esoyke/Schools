/**
 * Created by esoyke on 1/14/15.
 */
angular.module('app').factory('cachedCardholderInfo', function(cardholderInfo){
    var cardholderInfo2;

    return {
        query: function() {
            console.log('cachedCardholderInfo...')
            if(!cardholderInfo2){
                cardholderInfo2 = cardholderInfo.query();
            }
            return cardholderInfo2;
        }
    }
})