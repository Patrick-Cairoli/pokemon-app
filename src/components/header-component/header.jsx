import React from 'react'
import headerImage from '../../img/logo-header.png'
import './header.styles.css'
import pokeball from '../../img/poke-ball.png'

function Header() {
    return (
        <div className='header'>
            <img src={pokeball} alt="" className='pokeball' />
            <img src={headerImage} className='headerImg' alt="pokemon logo" />
            <img src={pokeball} alt="" className='pokeball-left' />
        </div>
    )
}

export default Header
