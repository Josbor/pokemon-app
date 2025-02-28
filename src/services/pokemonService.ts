import axios from 'axios';

const BASE_URL = 'https://pokeapi.co/api/v2/';

const pokemonApi = axios.create({
    baseURL: BASE_URL,
});

export const getPokemonByName = async (name: string) => {
    try {
        const response = await pokemonApi.get(`pokemon/${name}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching Pokemon by name:', error);
        throw error;
    }
};

export const getPokemonById = async (id: number) => {
    try {
        const response = await pokemonApi.get(`pokemon/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching Pokemon by ID:', error);
        throw error;
    }
};

export const getPokemonList = async (limit: number = 20, offset: number = 0) => {
    try {
        const response = await pokemonApi.get('pokemon', {
            params: {
                limit,
                offset,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching Pokemon list:', error);
        throw error;
    }
};

export const getPokemonAbility = async (abilityName: string) => {
    try {
        const response = await pokemonApi.get(`ability/${abilityName}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching Pokemon ability:', error);
        throw error;
    }
};

export const getPokemonType = async (typeName: string) => {
    try {
        const response = await pokemonApi.get(`type/${typeName}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching Pokemon type:', error);
        throw error;
    }
};