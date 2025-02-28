import { useState, useEffect } from "react"
import { getPokemonByName } from "../services/pokemonService"
import { PokemonDetail } from "../models/Pokemon.model"





export function usePokemonDetails(pokemonName: string | null) {
  const [pokemon, setPokemon] = useState<PokemonDetail | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    async function fetchPokemonDetail() {
      if (!pokemonName) {
        setPokemon(null)
        return
      }

      setIsLoading(true)
      setError(null)

      try {
        const response = await  getPokemonByName(pokemonName)
   
        setPokemon(response)
      } catch (err) {
        setError(err instanceof Error ? err : new Error("An unknown error occurred"))
        setPokemon(null)
      } finally {
        setIsLoading(false)
      }
    }

    fetchPokemonDetail()
  }, [pokemonName])

  return { pokemon, isLoading, error }
}

