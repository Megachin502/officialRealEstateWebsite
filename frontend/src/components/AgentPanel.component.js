import { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import axios from 'axios'
import Listings from './Listings.component'
import { useLocation } from 'react-router-dom'

export default function AgentPanel() {
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
    const location = useLocation().pathname

    function onSubmit(e) {
        e.preventDefault()
        const listing = { dateListed: dateListed, propertyType: propertyType, price: price, address: address, city: city, numBathrooms: numBathrooms, numBedrooms: numBedrooms, yearBuilt: yearBuilt, lotSize: lotSize, notes: notes }
        //console.log(listing)
        axios.post("http://localhost:5000/listings/add/", listing).then(res => console.log(res.data)).catch(err => console.log(err.response))
        window.alert(`${address}\nListed`)
        setDateListed(new Date())
        setPropertyType(propertyTypes[0])
        setPrice(0)
        setAddress('')
        setCity(cities[0])
        setNumBathrooms(0)
        setNumBedrooms(0)
        setYearBuilt(0)
        setLotSize(0)
        setNotes('')
    }


    //Return
    return (
        <div>
            {/*Create listing form*/}
            <div>
                <h3>Create New Listing</h3>
                <form onSubmit={onSubmit}>
                    <div>
                        <label>Date listed: </label>
                        <DatePicker selected={dateListed} onChange={setDateListed} />
                    </div>
                    <div>
                        <label>Property type: </label>
                        <select required value={propertyType} onChange={(e) => setPropertyType(e.target.value)}>
                            {propertyTypes.map((propertyType) => <option key={propertyType} value={propertyType}>{propertyType}</option>)}
                        </select>
                    </div>
                    <div>
                        <label>Price ($): </label>
                        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />
                    </div>
                    <div>
                        <label>Address: </label>
                        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} required />
                    </div>
                    <div>
                        <label>City: </label>
                        <select required value={city} onChange={(e) => setCity(e.target.value)}>
                            {cities.map((city) => <option key={city} value={city}>{city}</option>)}
                        </select>
                    </div>
                    <div>
                        <label>Number of bathrooms: </label>
                        <input type="number" value={numBathrooms} onChange={(e) => setNumBathrooms(e.target.value)} required />
                    </div>
                    <div>
                        <label>Number of bedrooms: </label>
                        <input type="number" value={numBedrooms} onChange={(e) => setNumBedrooms(e.target.value)} required />
                    </div>
                    <div>
                        <label>Year built: </label>
                        <input type="number" value={yearBuilt} onChange={(e) => setYearBuilt(e.target.value)} required />
                    </div>
                    <div>
                        <label>Lot size (sqft): </label>
                        <input type="number" value={lotSize} onChange={(e) => setLotSize(e.target.value)} required />
                    </div>
                    <div>
                        <label>Notes: </label>
                        <input type="text" value={notes} onChange={(e) => setNotes(e.target.value)} />
                    </div>
                    <div>
                        <input type="submit" value="Create Listing" />
                    </div>
                </form>
            </div>
            {/*Get listings*/}
            <Listings location={location} />
        </div>
    )
}