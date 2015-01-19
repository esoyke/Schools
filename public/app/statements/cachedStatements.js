/**
 * Created by esoyke on 1/13/15.
 */
angular.module('app').factory('cachedStatements', function(statement){
    var statementList;

    return {
        query: function() {
            console.log('cachedStatements...')
            if(!statementList){
                statementList = statement.query();
            }
            return statementList;
        }
    }
})