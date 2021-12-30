import React from 'react'
import headerImage from '../../img/logo-header.png'
import './header.styles.css'

function Header() {
    return (
        <div className='header'>
            <img src={headerImage} className='headerImg' alt="pokemon logo" />
        </div>
    )
}

export default Header
