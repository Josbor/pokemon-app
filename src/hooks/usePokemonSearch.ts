import { useState, useEffect } from "react"
import { Pokemon } from "../models/Pokemon.model"

export function usePokemonSearch(pokemonList: Pokemon[]) {
  const [searchTerm, setSearchTerm] = useState("") // Search
  const [suggestions, setSuggestions] = useState<Pokemon[]>([])


  // Update suggestions when search term changes
  useEffect(() => {
    if (!searchTerm) {
      setSuggestions([])
      return
    }
  
    const term = searchTerm.toLowerCase()
    const matchedPokemon = pokemonList.filter((pokemon) => pokemon.name.toLowerCase().includes(term)).slice(0, 5) // Limit to 5 suggestions

    setSuggestions(matchedPokemon)
  }, [searchTerm, pokemonList])

  return {
    searchTerm,
    setSearchTerm,
    suggestions,
  }
}

