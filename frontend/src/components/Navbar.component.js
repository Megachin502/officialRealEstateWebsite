import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
            <div>
                <h1 className='navbar-brand padding underline'>Real Estate Listings Management Website<code> by Elvis Lam</code></h1>
                <div className='container-fluid'>
                    <ul className='navbar-nav'>
                        <li className='nav-item'>
                            <Link to='/' className='nav-link'>Listings</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/agentpanel' className='nav-link'>Agent Panel</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/requirementschecklist' className='nav-link'>Requirements Checklist</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}