const mongoose=require('mongoose');
const Schema=mongoose.Schema;

let Candidat=new Schema({
    codeInscription:{type:String},
    email:{type:String},
    mdp:{type:String}
}, {
    collection:'candidats'
})
module.exports=mongoose.model('Candidat',Candidat);