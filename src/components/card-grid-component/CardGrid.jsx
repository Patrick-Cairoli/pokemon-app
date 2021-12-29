import React from 'react'
import Card from '../card-component/Card'
import './card-grid.styles.css'

const CardGrid = (props) => {
    return (
        <div className='card-grid'>
            {props.pokemonInfo.map(pokemon => (
      <Card key={pokemon.id} name={pokemon.name} image={pokemon.image} type={pokemon.type}/>
        ))}
        </div>
    )
}

export default CardGrid





