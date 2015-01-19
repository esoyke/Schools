var mongoose = require('mongoose');

var courseSchema = mongoose.Schema({
    title: {type:String, required:'{PATH} is required!'},
    featured: {type:Boolean, required:'{PATH} is required!'},
    published: {type:Date, required:'{PATH} is required!'},
    tags: [String],
    price: {type:Number, required:'{PATH} is required!'}
});
var Course = mongoose.model('Course', courseSchema);

function createDefaultCourses(){
    Course.find({}).exec(function(err, collection){
        if(collection.length ===0){
            Course.create({title: 'C# for Sociopaths', featured: true, published: new Date('1/1/2013'), tags: ['C#'], price: '22.99'});
            Course.create({title: 'C# for Boneheads', featured: true, published: new Date('3/10/2014'), tags: ['C#'], price: '19.95'});
            Course.create({title: 'Designing the Perfect Page', featured: true, published: new Date('3/10/2010'), tags: ['Design'], price: '34.99'});
            Course.create({title: 'Integrating Business Blather into your Vocab', featured: false, published: new Date('5/1/2012'), tags: ['Business'], price: '22.99'});
            Course.create({title: 'Sleep Your Way to the Top!', featured: false, published: new Date('7/21/2011'), tags: ['Business', 'Career'], price: '19.69'});
            Course.create({title: 'NSA Hacking Tips', featured: true, published: new Date('9/2/2013'), tags: ['Hacking'], price: '42.90'});
        }
    })
}

exports.createDefaultCourses = createDefaultCourses;