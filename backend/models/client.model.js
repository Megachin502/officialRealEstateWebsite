const mongoose = require('mongoose')
const Schema = mongoose.Schema

const clientSchema = new Schema({
    email: { type: String, unique:true },
    name: { type: String, required: true },
    phoneNumber: { type: String },
    notes: { type: String }
}, { timestamps: true })

const Client = mongoose.model('Client', clientSchema)

module.exports = Client