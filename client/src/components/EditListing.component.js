import { useEffect, useState } from 'react'
import DatePicker from 'react-datepicker'
import axios from 'axios'
import { useParams, Link } from 'react-router-dom'

export default function EditListing() {
    //Create listing form stuff
    const cities = ['Surrey', 'Langley', 'Vancouver', 'Burnaby', 'Richmond', 'Coquitlam', 'New Westminster', 'Delta']
    const propertyTypes = ['Residential', 'Commercial', 'Industrial', 'Raw land', 'Special use']
    const [dateListed, setDateListed] = useState(new Date())
    const [propertyType, setPropertyType] = useState(propertyTypes[0])
    const [price, setPrice] = useState(0)
    const [address, setAddress] = useState('')
    const [city, setCity] = useState(cities[0])
    const [numBathrooms, setNumBathrooms] = useState(0)
    const [numBedrooms, setNumBedrooms] = useState(0)
    const [yearBuilt, setYearBuilt] = useState(0)
    const [lotSize, setLotSize] = useState(0)
    const [notes, setNotes] = useState('')
    const { id } = useParams()

    function onSubmit(e) {
        e.preventDefault()
        const listing = { dateListed: dateListed, propertyType: propertyType, price: price, address: address, city: city, numBathrooms: numBathrooms, numBedrooms: numBedrooms, yearBuilt: yearBuilt, lotSize: lotSize, notes: notes }
        //console.log(listing)
        axios.post("/listings/update/" + id, listing).then(res => console.log(res.data)).catch(err => console.log(err.response))
        window.location = '#/agentpanel'
    }
    useEffect(() => {
        axios.get('/listings/' + id).then(res => {
            setDateListed(new Date(res.data.dateListed))
            setPropertyType(res.data.propertyType)
            setPrice(res.data.price)
            setAddress(res.data.address)
            setCity(res.data.city)
            setNumBathrooms(res.data.numBathrooms)
            setNumBedrooms(res.data.numBedrooms)
            setYearBuilt(res.data.yearBuilt)
            setLotSize(res.data.lotSize)
            setNotes(res.data.notes)
        })
    }, [id])

    //Return
    return (
        <div className="padding">
            <Link to='/agentpanel'>Cancel</Link>
            <h3>Edit Listing: {address}</h3>
            <form onSubmit={onSubmit}>
                <div className="col-md-2">
                    <label className="form-label">Date listed: </label>
                    <DatePicker selected={dateListed} onChange={setDateListed} className="form-control" />
                </div>
                <div className="col-md-2">
                    <label className="form-label">Property type: </label>
                    <select required value={propertyType} onChange={(e) => setPropertyType(e.target.value)} className="form-control">
                        {propertyTypes.map((propertyType) => <option key={propertyType} value={propertyType}>{propertyType}</option>)}
                    </select>
                </div>
                <div className="col-md-2">
                    <label className="form-label">Price ($): </label>
                    <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required className="form-control" />
                </div>
                <div className="col-md-3">
                    <label className="form-label">Address: </label>
                    <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} required className="form-control" />
                </div>
                <div className="col-md-2">
                    <label className="form-label">City: </label>
                    <select required value={city} onChange={(e) => setCity(e.target.value)} className="form-control">
                        {cities.map((city) => <option key={city} value={city}>{city}</option>)}
                    </select>
                </div>
                <div className="row">
                    <div className="col-md-2">
                        <label className="form-label">Number of bathrooms: </label>
                        <input type="number" value={numBathrooms} onChange={(e) => setNumBathrooms(e.target.value)} required className="form-control" />
                    </div>
                    <div className="col-md-2">
                        <label className="form-label">Number of bedrooms: </label>
                        <input type="number" value={numBedrooms} onChange={(e) => setNumBedrooms(e.target.value)} required className="form-control" />
                    </div>
                    <div className="col-md-2">
                        <label className="form-label">Year built: </label>
                        <input type="number" value={yearBuilt} onChange={(e) => setYearBuilt(e.target.value)} required className="form-control" />
                    </div>
                    <div className="col-md-2">
                        <label className="form-label">Lot size (sqft): </label>
                        <input type="number" value={lotSize} onChange={(e) => setLotSize(e.target.value)} required className="form-control" />
                    </div>

                </div>
                <div className="row">
                    <label className="form-label">Notes: </label>
                    <textarea type="text" value={notes} onChange={(e) => setNotes(e.target.value)} className="form-control" />
                </div>
                <div className="row-md-2 navButton">
                    <input type="submit" value="Edit Listing" className="btn btn-secondary navButton" />
                </div>
            </form>
        </div >
    )
}