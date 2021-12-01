const router = require('express').Router()
let Listing = require('../models/listing.model')

//GET
router.route('/').get((req, res) => {
    Listing.find().then(listings => res.json(listings)).catch(err => res.status(400).json('GET error listing.route:' + err))
})

//POST /add
router.route('/add').post((req, res) => {
    const dateListed = Date.parse(req.body.dateListed)
    const propertyType = req.body.propertyType
    const price = Number(req.body.price)
    const address = req.body.address
    const city = req.body.city
    const numBathrooms = Number(req.body.numBathrooms)
    const numBedrooms = Number(req.body.numBedrooms)
    const yearBuilt = Number(req.body.yearBuilt)
    const lotSize = Number(req.body.lotSize)
    const notes = req.body.notes
    const newListing = new Listing({ dateListed, propertyType, price, address, city, numBathrooms, numBedrooms, yearBuilt, lotSize, notes })

    newListing.save().then(() => res.json('Listing added')).catch(err => res.status(400).json('POST /add error listing.route:' + err))
})

//GET /:id
router.route('/:id').get((req, res) => {
    Listing.findById(req.params.id).then(listing => res.json(listing)).catch(err => res.status(400).json('GET /:id error listing.route:' + err))
})

//DELETE /:id
router.route('/:id').delete((req, res) => {
    Listing.findByIdAndDelete(req.params.id).then(() => res.json('Listing deleted')).catch(err => res.status(400).json('DELETE /:id error listing.route:' + err))
})

//POST /update/:id
router.route('/update/:id').post((req, res) => {
    Listing.findById(req.params.id).then(listing => {
        listing.dateListed = Date.parse(req.body.dateListed)
        listing.propertyType = req.body.propertyType
        listing.price = Number(req.body.price)
        listing.address = req.body.address
        listing.city = req.body.city
        listing.numBathrooms = Number(req.body.numBathrooms)
        listing.numBedrooms = Number(req.body.numBedrooms)
        listing.yearBuilt = Number(req.body.yearBuilt)
        listing.lotSize = Number(req.body.lotSize)
        listing.notes = req.body.notes

        listing.save().then(() => res.json('Listing updated')).catch(err => res.status(400).json('POST /update/:id findById error listing.route:' + err))
    }).catch(err => res.status(400).json('POST /update/:id error listing.route:' + err))
})

module.exports = router