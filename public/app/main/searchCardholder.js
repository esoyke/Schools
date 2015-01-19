/**
 * Created by esoyke on 1/14/15.
 */
angular.module('app').factory('searchCardholder', function($resource) {
    var searchCardholderResource = $resource('/api/searchCardholder/:_id', {_id: "@id"}, {
        update: {method:'PUT', isArray:false}
    });
    return searchCardholderResource;
})