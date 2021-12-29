import React from 'react'
import './card.styles.css'

const Card = ({name, image, id, type}) => {
    return (
        <div className='card-container'>
        <h1>{name}</h1>
         <img src={image}/>
        <p>{type}</p> 
        </div>
    )
}

export default Card



