import { useState, useEffect } from 'react';
import { Pokemon } from '../models/Pokemon.model';


const useAlphabetCounts = (pokemonList:Pokemon[]) => {
    const [alphabetCounts, setAlphabetCounts] = useState<Record<string, number>>({})


    useEffect(() => {
            const lettersPokemon: Record<string, number> = pokemonList.reduce((accumulator, pokemon) => {
            const firstLetter = pokemon.name.charAt(0).toLowerCase();
            if (accumulator[firstLetter]) {
            accumulator[firstLetter] += 1;
            } else {
            accumulator[firstLetter] = 1;
            }
            return accumulator;
        }, {} as Record<string, number>);

        setAlphabetCounts(lettersPokemon)
    }, [pokemonList]);

    return alphabetCounts;
};

export default useAlphabetCounts;