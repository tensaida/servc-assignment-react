import React from 'react'
import {PokemonType} from '../types/Pokemon.types'
import { images } from './Post';

interface Props {
    pokemon: PokemonType;
}

const Pokemon:React.FC<Props> = ({pokemon}) => {
    return (
        <div>
        <h1>{pokemon.ability}</h1>
        <img className = "detail" src={images[pokemon.id]} />
       </div>)
}

export default Pokemon