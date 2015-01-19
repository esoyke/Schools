/**
 * Created by esoyke on 1/13/15.
 */
angular.module('app').factory('statement', function($resource) {
    var StatementResource = $resource('/api/statements/:_id', {_id: "@id"}, {
        update: {method:'PUT', isArray:false}
    });
    return StatementResource;
})