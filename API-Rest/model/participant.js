const mongoose=require('mongoose');
const Schema=mongoose.Schema;

let Participant=new Schema({
    cin:{type:String},
    nom:{type:String},
    prenom:{type:String},
    entreprise:{type:String},
    direction:{type:String}
}, {
    collection:'participants'
})
module.exports=mongoose.model('Participant',Participant);