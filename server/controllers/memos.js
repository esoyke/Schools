/**
 * Created by esoyke on 1/19/15.
 */
// currently mocked data
exports.getMemos = function(req, res){
    var mockMemos =
        [
            {
                "date":"1/4/2015",
                "description":"PAYMENT $43.00"
            },
            {
                "date":"1/1/2015",
                "description":"AUTH - MA AND PA KETTLE INDUSTRIES"
            },
            {
                "date":"12/17/2014",
                "description":"AUTH - TARGET STORES 00452697"
            },
            {
                "date":"12/10/2014",
                "description":"PAYMENT $150.00"
            },
            {
                "date":"12/05/2014",
                "description":"LATE FEE $15.00"
            },
        ];

    res.send(mockMemos);
};
