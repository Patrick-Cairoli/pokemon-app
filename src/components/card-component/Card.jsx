import React from 'react'
import './card.styles.css'

const Card = ({name, image, id, type}) => {
    return (
        <div className='card-container'>

            <div className='image-container'>
                 <img src={image}/>
            </div>

            <div className="card__title">
                <h2>{name}</h2>
            </div>

            <div className="stats__text">
                <p>{type}</p> 
            </div>
        </div>
    )
}

export default Card



