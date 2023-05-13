const mongoose=require('mongoose');
const Schema=mongoose.Schema;

let Stat=new Schema({
    description:{type:String}
}, {
    collection:'stats'
})
module.exports=mongoose.model('Stat',Stat);