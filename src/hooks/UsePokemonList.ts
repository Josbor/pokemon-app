import { useState, useEffect } from 'react';
import { Pokemon, PokemonListResponse } from '../models/Pokemon.model';
import { getPokemonList } from '../services/pokemonService';



const usePokemonList = () => {
    const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPokemonList = async () => {
            try {
                setLoading(true);
                const countResponse = await getPokemonList(1);
                const {count}: PokemonListResponse = await countResponse
                const {results} = await getPokemonList(count);
                setPokemonList(results);
            } catch {
                setError('Failed to fetch Pokemon list');
            } finally {
                setLoading(false);
            }
        };

        fetchPokemonList();
    }, []);

    

    return { pokemonList, loading, error };
};

export default usePokemonList;