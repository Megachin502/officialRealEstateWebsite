import { Link } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react'

const Listing = props => (
    <tr>
        <td>{props.listing.dateListed.substring(0, 10)}</td>
        <td>{props.listing.propertyType}</td>
        <td>${props.listing.price}</td>
        <td>{props.listing.address}</td>
        <td>{props.listing.city}</td>
        <td>{props.listing.numBathrooms}</td>
        <td>{props.listing.numBedrooms}</td>
        <td>{props.listing.yearBuilt}</td>
        <td>{props.listing.lotSize} sqft</td>
        <td>{props.listing.notes}</td>
        <td>
            {props.location === '/agentpanel' ? <div><Link to={'/edit/' + props.listing._id}>edit</Link> | <button type="button" onClick={() => props.deleteListing(props.listing._id)}>delete</button></div> : null}
        </td>
    </tr>
)

export default function Listings(props) {
    const [listings, setListings] = useState([])
    useEffect(() => {
        axios.get('/listings').then(res => setListings(res.data)).catch(err => console.log(err))
    })

    function deleteListing(id) {
        axios.delete('/listings/' + id).then(res => console.log(res.data))
        setListings(listings.filter(el => el._id !== id)) //_id automatically created from mongodb for each element
    }


    return (
        <div className="padding">
            <br />
            <h3>{props.location === '/agentpanel' ? 'Posted' : 'Available'} Listings</h3>
            <table className='table'>
                <thead className='thead-light'>
                    <tr>
                        <th>Date listed</th>
                        <th>Property type</th>
                        <th>Price</th>
                        <th>Address</th>
                        <th>City</th>
                        <th>Bathrooms</th>
                        <th>Bedrooms</th>
                        <th>Year built</th>
                        <th>Lot size</th>
                        <th>Notes</th>
                    </tr>
                </thead>
                <tbody>
                    {listings.map(currentListing => <Listing listing={currentListing} deleteListing={deleteListing} key={currentListing._id} location={props.location} />).reverse()}
                </tbody>
            </table>
        </div>
    )
}