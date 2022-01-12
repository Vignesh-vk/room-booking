const mongoose = require('mongoose')

const loginSchema = mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true,
        minlength:7,
        validate(value){
            if(value.toLowerCase().includes('password')){
                throw new Error('Enter valid email')
            }
        }
    }
});

module.exports = mongoose.model('Login',loginSchema)