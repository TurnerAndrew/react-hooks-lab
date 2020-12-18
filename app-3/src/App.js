import './App.css';
import React, {useState, useEffect} from 'react'
import axios from 'axios'
import PokemonList from './PokemonList'

function App() {
  const [list, setList] = useState([])

  useEffect (() => {
    axios.get('https://pokeapi.co/api/v2/pokemon').then(res => {
      setList(res.data.results)}, [])
    })
  

  return (
    <div className="App">
      <PokemonList list={list}/>
    </div>
  );
}

export default App;
