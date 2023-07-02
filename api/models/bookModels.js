const { Schema,model} = require('mongoose')

const Book = model('Book',new Schema({
    name:{
        type:String,
        required:true,
        },
    description:{
        type:String,
        required:true
        },
            images:{
                type:String
            },
        userId:{
            type:Schema.Types.ObjectId,
            required:true,
            ref:"users"
        }
    },{
        timestamps:true,
        autoIndex:true,
        autoCreate:true,
    }))

module.exports = Book
