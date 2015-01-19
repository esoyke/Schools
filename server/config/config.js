var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
    development:{
        db: 'mongodb://localhost/multivision',
        rootPath: rootPath,
        port: process.env.PORT || 3030
    },
    production:{
        db: 'mongodb://esoyke:multivision@ds035750.mongolab.com:35750/multivision',
        rootPath: rootPath,
        port: process.env.PORT || 80
    }
}