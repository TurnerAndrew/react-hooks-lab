import React, {useState} from 'react'
import {Link} from 'react-router-dom'

const PokemonList = (props) => {
    return (
       <div>
           {props.list.map((pokemon) => {
               return (
                   <Link key={pokemon.url} to={`/pokemon/${pokemon.name}`}>
                       <p>{pokemon.name}</p>
                   </Link>
               )
           })}


       </div>

    )
}

export default PokemonList