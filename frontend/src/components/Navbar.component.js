import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav>
            <div>
                <ul>
                    <li>
                        <Link to='/'>Listings</Link>
                    </li>
                    <li>
                        <Link to='/agentpanel'>Agent Panel</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}