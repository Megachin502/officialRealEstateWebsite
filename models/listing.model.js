const mongoose = require('mongoose')
const Schema = mongoose.Schema

const listingSchema = new Schema({
    dateListed: { type: Date, required: true },
    propertyType: { type: String, required: true },
    price: { type: Number, required: true },
    address: { type: String, required: true, unique: true },
    city: { type: String, required: true },
    numBathrooms: { type: Number, required: true },
    numBedrooms: { type: Number, required: true },
    yearBuilt: { type: Number, required: true, maxlength: 4 },
    lotSize: { type: Number, required: true },
    notes: { type: String }
}, { timestamps: true })

const Listing = mongoose.model('Listing', listingSchema)

module.exports = Listing