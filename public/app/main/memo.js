/**
 * Created by esoyke on 1/19/15.
 */
angular.module('app').factory('memo', function($resource) {
    var MemosResource = $resource('/api/memos/:_id', {_id: "@id"}, {
        update: {method:'PUT', isArray:false}
    });
    return MemosResource;
})