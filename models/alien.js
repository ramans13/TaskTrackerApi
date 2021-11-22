const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({

    text : {
        type : String,
        required : true
    }
    ,

    day : {

        type : String,
        required : true


    },
     reminder : {
        type : Boolean,
        required: true,
        default : false
    }
} );

module.exports = mongoose.model("tasks",taskSchema);