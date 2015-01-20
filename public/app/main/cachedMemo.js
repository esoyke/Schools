/**
 * Created by esoyke on 1/19/15.
 */
angular.module('app').factory('cachedMemo', function(memo){
    var memoList;

    return {
        query: function() {
            console.log('cachedMemos...')
            if(!memoList){
                memoList = memo.query();
            }
            return memoList;
        }
    }
})