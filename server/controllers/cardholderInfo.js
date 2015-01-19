/**
 * Created by esoyke on 1/14/15.
 */
exports.getInfo = function(req, res) {

    var mockInfo =
        [
            {
                "primaryName" : "Jebediah Longnamenstein",
                "secondaryName" : "Jane Longnamenstein",
                "primaryPIID": "1234-5678-9012-3456",
                "secondaryPIID": "1234-5678-9012-3457",
                "internalStatus" : "Normal",
                "externalStatus" : "Normal",
                "openDate" : "07/12",
                "expDate" : "10/18",
                "addressLine1" : "123 Easy Street",
                "addressLine2" : "", //"Apt. 2",
                "city" : "St. Petersburg",
                "state" : "FL",
                "zip": "90210",
                "homePhone": "555-1212",
                "workPhone": "555-1213",
                "mobilePhone": "555-1214",
                "ssn": "123-45-6789",
                "dob": "11/5/1955",
                "authUsers": [
                    {
                        "authPIID": "1234-5678-9012-3458",
                        "authName": "Johnny Longnamenstein"
                    },
                    {
                        "authPIID": "1234-5678-9012-3459",
                        "authName": "Sally Longnamenstein"
                    }
                ],
                "other": [
                    "abc", "def", "ghi"
                ]
            }
        ];
    res.send(mockInfo);
}

