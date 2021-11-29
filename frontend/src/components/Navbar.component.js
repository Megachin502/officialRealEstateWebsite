import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className='navbar-dark bg-dark navbar-expand-lg'>
            <h1 className='navbar-brand'>Real Estate Listings Management Website by Elvis Lam</h1>
            <div>
                <ul className='navbar-nav mr-auto'>
                    <li className='navbar-item'>
                        <Link to='/' className='nav-link'>Listings</Link>
                    </li>
                    <li className='navbar-item'>
                        <Link to='/agentpanel' className='nav-link'>Agent Panel</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}