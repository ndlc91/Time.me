const router = require('express').Router();
let Client = require('../models/clients.model');


//Get Client
router.route('/:id').get((req, res) => {
    Client.findById(req.params.id)
        .then(client => res.json(client))
        .catch(err => res.status(400).json('Error: ' + err));
});

//Update Client
router.route('/:id/updateClient').post((req, res) => {

    console.log('request made it');

    const name = req.body.name;
    const _id = req.body._id;
    const filter = { _id: _id };

    const client = { name: name };

    const newClient = Client.findByIdAndUpdate(filter, client, { returnOriginal: false });

    newClient.exec()
        .then(client => res.json(client))
        .catch(err => res.status(400).json('Error: ' + err));
});


//Add Task
router.route('/task/addtask').post((req, res) => {
    const title = req.body.title;
    const description = req.body.description;
    const time = req.body.time;
    const _id = req.body._id;

    const filter = { _id: _id };

    const newTask = {
        title: title,
        description: description,
        time: time
    };

    console.log('The request made it');

    console.log(_id, newTask);

    const update = { $push: { tasks: newTask } };

    const newClient = Client.findOneAndUpdate(filter, update, { returnOriginal: false });

    newClient.exec()
        .then(task => res.json(task))
        .catch(err => console.log(err));
});

//Update Task
router.route('/:id/task/:taskID/updateTask').post((req, res) => {
    const clientID = req.body.clientID;
    const title = req.body.title;
    const description = req.body.description;
    const time = req.body.time;
    const _id = req.body._id;

    const filter = {
        _id: clientID, 'tasks._id': _id
    };

    Client.findOneAndUpdate(filter, {
        $set: {
            "tasks.$.title": title,
            "tasks.$.description": description,
            "tasks.$.time": time
        }
    }, function (err, doc) {
        if (err) {
            console.log(err);
        } else {
            console.log(doc);
        }
    })
        .then(task => res.json(task))
        .catch(err => console.log(err));
})



//Delete Task
router.route('/:id/task/:taskID/deleteTask').post((req, res) => {

    console.log('we made it to the delete task function on the backend');
    const clientID = req.body.clientID;
    const title = req.body.title;
    const description = req.body.description;
    const time = req.body.time;
    const _id = req.body._id;

    const filter = {
        _id: clientID
    };

    Client.findOneAndUpdate(filter,
        { $pull: { tasks: { _id: _id } } },
        { new: true },
        function (err, doc) {
            if (err) {
                console.log(err);
            } else {
                console.log(doc);
            }
        })
        .then(task => res.json(task))
        .catch(err => console.log(err));
})




module.exports = router;