import React from 'react'
import {PokemonType} from '../types/Pokemon.types'
import { images } from './Post';

interface Props {
    pokemon: PokemonType;
}

const Pokemon:React.FC<Props> = ({pokemon}) => {
    const id = (parseInt(pokemon.id) > 9) ? "default" : pokemon.id;
    return (
        <div>
        <h1>{pokemon.name}</h1>
        <h2>{pokemon.ability}</h2>
        <img className = "detail" src={images[id]} />
       </div>)
}

export default Pokemon