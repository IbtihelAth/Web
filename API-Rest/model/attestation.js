const mongoose=require('mongoose');
const Schema=mongoose.Schema;

let Attestation=new Schema({
    id:{type:String}
}, {
    collection:'attestations'
})
module.exports=mongoose.model('Attestation',Attestation);