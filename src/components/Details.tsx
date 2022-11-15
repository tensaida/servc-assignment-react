import React from 'react'
import { useParams } from 'react-router-dom'
import {PostType} from '../types/Post.types'
import {Link} from "react-router-dom"
import { getOne, getList } from '../api/pokemons.api'
import { useState, useEffect } from 'react'
import Pokemon from '../components/Pokemon'

interface Pokemon {
    id: string;
    name: string;
    ability: string;
}

let getDetail = async function(id: string): Promise<Pokemon> {
    const ability = (await getOne(id)).data.abilities[0].ability.name;
    const numId = parseInt(id);
    const name = (await getList(numId - 1, 1)).data.results[0].name;
    return {
        id, name, ability
    }
}

function Details() {

    const { id } = useParams();

    const [pokemon, setPokemon] = useState<Pokemon>()
    const [error, setError] = useState({})

    
  
    
    
    if (id == undefined) {
        return (
            <h1>Loading...</h1>
        )
    }

    useEffect(() => {
        getDetail(id).then(value => setPokemon(value))
    });
  

    if (pokemon == undefined) {
        return (
            <h1>Loading...</h1>   
        )    
    }

    return (
        <Pokemon pokemon={pokemon} />
    )
}

export default Details