const mongoose=require('mongoose');
const Schema=mongoose.Schema;

let Cycle=new Schema({
    nom:{type:String},
    description:{type:String},
    periode:{type:String}
}, {
    collection:'cycles'
})
module.exports=mongoose.model('Cycle',Cycle);