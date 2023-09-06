import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
    return (
        <nav className='menu'>
            <Link to='/'>Home</Link>
            <span> | </span>
            <Link to='/product'>Produtos</Link>
        </nav>
    );
}
