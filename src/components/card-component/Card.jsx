import React from 'react'
import './card.styles.css'

const Card = ({name, image, id, type}) => {
    return (
        <div className='card-container'>
            <div className='image-container'>
                 <img src={image}/>
            </div>
        <h2>{name}</h2>
        <p>{type}</p> 
        </div>
    )
}

export default Card



