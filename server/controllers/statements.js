/**
 * Created by esoyke on 1/13/15.
 */
// currently mocked data
exports.getStatements = function(req, res){
    //Course.find({}).exec(function(err, collection){
    //    res.send(collection);
    //})
    var mockStatementList =
        [
            {
             "date":"1/1/2015",
             "newBalance":"125.90",
             "minPaymentDue":"15.00",
             "dueDate":"1/15/2015",
             "pastDue":"0.00"
            },
            {
             "date":"12/1/2015",
             "newBalance":"22.90",
             "minPaymentDue":"10.00",
             "dueDate":"1/15/2015",
             "pastDue":"0.00"
            },
            {
             "date":"11/1/2015",
             "newBalance":"750.90",
             "minPaymentDue":"70.00",
             "dueDate":"1/15/2015",
             "pastDue":"0.00"
            }
        ];

    res.send(mockStatementList);
};
