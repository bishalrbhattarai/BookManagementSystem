const { Schema,model} = require('mongoose')

const User = model('User',new Schema({
    name:{
        type:String,
        required:true,
        },
        email:{
            type: String,
            required:true,
            unique:true,
        },
        password:{
        type:String,
        required:true,
        },
          type:{
                required:true,
                type:String,
                enum:["Admin","Normal"],
                default:"Normal"
            }
    },{
        timestamps:true,
        autoIndex:true,
        autoCreate:true,
    }))

module.exports = User
