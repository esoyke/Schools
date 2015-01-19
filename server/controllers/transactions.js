/**
 * Created by esoyke on 1/13/15.
 */
// currently mocked data
exports.getPendingTransactions = function(req, res){
    //Course.find({}).exec(function(err, collection){
    //    res.send(collection);
    //})
    var mockTransactionList =
        [
          {
            date:"12/5/2015", 
            description:"Leftys Fireworks Stand", 
            merchantDetails:"Leftys Fireworks, Greenhills, GA", 
            amount:"86.15"
          },
          {
            date:"12/15/2015", 
            description:"Publix liquors", 
            merchantDetails:"Publix St. Petersburg 727-555-1212",
            amount:"26.85"
          }
        ];

    res.send(mockTransactionList);
};

exports.getPostedTransactions = function(req, res){
    //Course.find({}).exec(function(err, collection){
    //    res.send(collection);
    //})
    var mockTransactionList =
        [
          {
            date:"12/5/2015", 
            description:"Amoco Gas", 
            merchantDetails:"Amoco Gas, Tampa FL 813-555-1212",
            amount:"43.50"
          },
          {
            date:"12/10/2015", 
            description:"JC Penney", 
            merchantDetails:"JC Penney store 123",
            amount:"22.90"
          },
          {
            date:"12/15/2015", 
            description:"PAYMENT- Thank You", 
            merchantDetails:"Payment",
            amount:"42.99"
          }
        ];

    res.send(mockTransactionList);
};

