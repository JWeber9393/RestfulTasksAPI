const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/RestulTasksdb', { useNewUrlParser: true })

const TaskSchema = new mongoose.Schema({
    title: {type: String},
    description: {type: String},
    completed: {type: Boolean}
}, { timestamps: true })

const task = mongoose.model('tasks', TaskSchema);

module.exports = task;