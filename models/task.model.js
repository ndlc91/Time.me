const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const taskSchema = new Schema({
    taskID: Schema.Types.ObjectId,
    title: String,
    description: String,
    time: Number
});

const Task = mongoose.model('Task', clientSchema);

module.exports = Task;