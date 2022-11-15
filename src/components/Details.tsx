import React from 'react'
import { useParams } from 'react-router-dom'
import {PostType} from '../types/Post.types'
import {Link} from "react-router-dom"
import { getOne } from '../api/pokemons.api'
import { useState, useEffect } from 'react'
import Pokemon from '../components/Pokemon'

function Details() {

    const { id } = useParams();

    const [pokemon, setPokemon] = useState<Pokemon>()
    const [error, setError] = useState({})
  
    interface Pokemon {
        id: string;
        ability: string;
    }
    
    if (id == undefined) {
        return (
            <h1>Not Found</h1>
        )
    }

    useEffect(() => {
      getOne(id).then((values) => {
        setPokemon({id: id, ability: values.data.abilities[0].ability.name});
        // console.log(values.data.abilities[0].ability.name);
      })
    });

    if (pokemon == undefined) {
        return (
            <h1>Not Found</h1>   
        )    
    }

    return (
        <Pokemon pokemon={pokemon} />
    )
}

export default Details