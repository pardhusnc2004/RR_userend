import {Link} from 'react-router-dom'
import React, { useState } from 'react';

export function Nav() {
    
    return (
        <nav class="navbar bg-warning">
            <Link to='/' className='navbar-brand mx-2' style={{fontWeight: "bolder"}}>RR</Link>
            <div className='nav'>
                <Link to='/' className='nav-link text-dark'>Item List</Link>
                
            </div>
        </nav>
    )
}