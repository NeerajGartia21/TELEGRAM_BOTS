const mongoose = require('mongoose');
const {Schema}=mongoose;

const userSchema = new Schema({
    chatId:{
        type:String,
    },
    urls:[{
        type:String
    }]
})

module.exports = mongoose.model('User',userSchema)