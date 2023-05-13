const mongoose=require('mongoose');
const Schema=mongoose.Schema;

let Test=new Schema({
    Id:{type:String},
    numero:{type:String}
}, {
    collection:'tests'
})
module.exports=mongoose.model('Test',Test);