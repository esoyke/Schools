/**
 * Created by esoyke on 1/14/15.
 */
angular.module('app').factory('cardholderInfo', function($resource) {
    var CardholderInfoResource = $resource('/api/cardholderInfo/:_id', {_id: "@id"}, {
        update: {method:'PUT', isArray:false}
    });
    return CardholderInfoResource;
})