/**
 * Created by esoyke on 1/14/15.
 */
// currently mocked data
exports.getSearch = function(req, res){
    //Course.find({}).exec(function(err, collection){
    //    res.send(collection);
    //})
    var mockSearchList =
        [
            {
                "name":"John Doe",
                "account":"1234-5678-9012-3456"
            },
            {
                "name":"Jane Doe",
                "account":"1234-5678-9012-3457"
            }
        ];

    res.send(mockSearchList);
};
