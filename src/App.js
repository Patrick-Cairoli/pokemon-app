import React, {Component} from 'react'
import './App.css';
import Card from './components/card-component/Card';
import CardGrid from './components/card-grid-component/CardGrid';


class App extends Component{
  constructor(){
    super()

    this.state = {
      pokemons: [],
    }
  // console.log(this.state.pokemons)
  }
  componentDidMount(){

    const promises = [];

    for (let i = 1; i < 150; i++) {
      const url = `https://pokeapi.co/api/v2/pokemon/${i}`
      promises.push(fetch(url).then((res) => res.json()))
    }

    Promise.all(promises).then((results) => {
        const pokemon = results.map((data) =>({
          name: data.name,
          id: data.id,
          image: data.sprites.other.dream_world['front_default'],
          type: data.types.map((type) => type.type.name).join(', '),
        }))
        return pokemon
    }).then(pokemon => {
      this.setState({
        pokemons: pokemon
      })
    })
  }
 
  render() {  
    return (
      <div className="App">
       {
         <>
         <CardGrid pokemonInfo={this.state.pokemons}/>
         </>
       }
      </div>
    );
  }
}

export default App;
