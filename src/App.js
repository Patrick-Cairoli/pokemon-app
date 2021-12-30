import React, {Component} from 'react'
import './App.css';
import Card from './components/card-component/Card';
import CardGrid from './components/card-grid-component/CardGrid';
import Header from './components/header-component/Header';
import {Search} from './components/search-component/search.jsx'
import './img/logo-header.png'


class App extends Component{
  constructor(){
    super()

    this.state = {
      pokemons: [],
      searchField: ''
    }
  // console.log(this.state.pokemons)
  // this.handleChange = this.handleChange.bind(this)  // no need to use bind if we implement handleChanche using an arrow function
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

  handleChange = e => {
    this.setState({searchField: e.target.value})
  }
 
  render() {  

    const { pokemons, searchField } = this.state

    const filteredPokemons = pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(searchField.toLowerCase()))

    return (
      <div className="App">
       {
         <>
         <Header/>
            <Search
              placeholder='search pokemons'
              handleChange={this.handleChange}
            />
            <CardGrid 
              pokemonInfo={filteredPokemons}
            />
         </>
       }
      </div>
    );
  }
}

export default App;
