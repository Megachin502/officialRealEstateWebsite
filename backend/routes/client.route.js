const router = require('express').Router()
let Client = require('../models/client.model')

//GET
router.route('/').get((req, res) => {
    Client.find().then(clients => res.json(clients)).catch(err => res.status(400).json('GET error client.route:' + err))
})

//GET /:id
router.route('/:id').get((req, res) => {
    Client.findById(req.params.id).then(client => res.json(client)).catch(err => res.status(400).json('GET /:id error client.route:' + err))
})

router.route('/add').post((req, res) => {
    const email = req.body.email
    const name = req.body.name
    const phoneNumber = req.body.phoneNumber
    const notes = req.body.notes
    const newClient = new Client({ email, name, phoneNumber, notes })

    newClient.save().then(() => res.json('Client added')).catch(err => res.status(400).json('POST /add error client.route:' + err))
})
module.exports = router