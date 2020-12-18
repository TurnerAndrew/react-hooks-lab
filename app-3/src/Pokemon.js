import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Pokemon = (props) => {
    const {name} = props.match.params
    const [pokemon, setPokemon] = useState({})

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/${name}`).then((res) => {
            setPokemon(res.data)
        })
    }, [name])

    return (
        <div>
            <p>{pokemon.name}</p>
            <img src={pokemon.sprites?.front_default} alt={pokemon.name}/>
        </div>
    )
}

export default Pokemon