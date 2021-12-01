import { useState } from 'react'
import axios from 'axios'

export default function ClientOnboardForm() {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [notes, setNotes] = useState('')
    function onSubmit(e) {
        e.preventDefault()
        const client = { email: email, name: name, phoneNumber: phoneNumber, notes: notes }
        //console.log(listing)
        axios.post("http://localhost:5000/clients/add/", client).then(res => {
            console.log(res.data)
            setEmail('')
            setName('')
            setPhoneNumber('')
            setNotes('')
        }).catch(err => {
            window.alert('Unsuccesful')
            console.log(err.response)
        })
    }
    return (
        <div>
            <div className="container">
                <h3>Client Onboarding (Has no practical use besides posting to database)</h3>
                <form onSubmit={onSubmit}>
                    <label>Email: </label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    <label>Name: </label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                    <label>Phone Number: </label>
                    <input type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                    <label>Notes: </label>
                    <textarea type="text" value={notes} onChange={(e) => setNotes(e.target.value)} />
                    <input type="submit" value="Submit" />
                </form>
            </div>


        </div>
    )
}