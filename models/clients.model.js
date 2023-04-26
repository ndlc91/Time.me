const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const clientSchema = new Schema({
    name: String,
    tasks: [
        {
            taskID: Schema.Types.ObjectId,
            title: String,
            description: String,
            time: Number,
        }]
});

const Client = mongoose.model('Client', clientSchema);

module.exports = Client;