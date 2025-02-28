import { useState, useEffect } from 'react';
import { Pokemon } from '../models/Pokemon.model';


const useAlphabetCounts = (pokemonList:Pokemon[]) => {
    const [alphabetCounts, setAlphabetCounts] = useState<Record<string, number>>({})


    useEffect(() => {
        const counts: Record<string, number> = {}
        pokemonList.forEach((pokemon) => {
          const firstLetter = pokemon.name.charAt(0).toLowerCase()
          counts[firstLetter] = (counts[firstLetter] || 0) + 1
        })
  
        setAlphabetCounts(counts)
    }, []);

    return alphabetCounts;
};

export default useAlphabetCounts;