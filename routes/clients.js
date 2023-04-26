const router = require('express').Router();
let Client = require('../models/clients.model');

//Get list of clients
router.route('/').get((req, res) => {
    Client.find()
        .then(clients => res.json(clients))
        .catch(err => res.status(400).json('Error: ' + err));
});

//Add a client
router.route('/add').post((req, res) => {
    const name = req.body.name;

    const newClient = new Client({ name: name });

    newClient.save()
        .then(() => res.json('Client added'))
        .catch(err => res.status(400).json('Error: ' + err));
})

//Delete Client
router.route('/deleteClient').post((req, res) => {

    const name = req.body.name;
    const _id = req.body._id;

    const deletedClient = {
        name: name,
        _id: _id
    };

    const deleteClient = Client.findOneAndDelete(deletedClient);

    deleteClient.exec()
        .then(() => res.json('Client deleted'));

});

module.exports = router;