const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Must Provide Name'],
        trim: true,
    },
    completed: {
        type: Boolean,
        default: false,
    }
},{timestamps:true})

module.exports = mongoose.model('Task', taskSchema)