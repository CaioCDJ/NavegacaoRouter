import './Menu.css';
import React from 'react';
import { Link } from 'react-router-dom';

export default props => {
    return(
        <aside className='Menu'>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Inicio</Link>
                    </li>
                    <li>
                        <Link to="/param/123">#01</Link>
                    </li>
                    <li>
                        <Link to="/param/legal">#02</Link>
                    </li>                    
                    <li>
                        <Link to="/about">Sobre</Link>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}