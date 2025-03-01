import { useState } from "react";
import { Pokemon } from "../models/Pokemon.model";
import AlphabetSummary from "./AlphabetSummaryProps";
import PokemonDetails from "./PokemonDetails";
import Searcher from "./Searcher";
import TableList from "./TableList";
import useAlphabetCounts from "../hooks/useAlphabetCounts";
import { usePokemonSearch } from "../hooks/usePokemonSearch";
import usePagination from "../hooks/usePagination";
import useResponsive from "../hooks/useResponsive";

interface PokemonExplorerProps {
  pokemonList: Pokemon[];
}
export function PokemonExplorer({ pokemonList}:PokemonExplorerProps) {
  const [selectedPokemon, setSelectedPokemon] = useState<string | null>(null)
  const alphabetCounts = useAlphabetCounts( pokemonList )
  const{searchTerm,setSearchTerm,suggestions}= usePokemonSearch(pokemonList)
  const {currentItems,PaginationControls} =usePagination(pokemonList, (window.innerWidth > 700 ? 10 : 3))
  const [filteredPokemon, setFilteredPokemon] = useState<Pokemon[]>([])  
  const windowSize = useResponsive();
 

  const searchPokemon = (pokemonName: string|undefined) => {
    if (!pokemonName){
      setFilteredPokemon([])
      return
    }
    const term=pokemonName.toLowerCase()
    const pokemon = pokemonList.filter((pokemon) => pokemon.name.toLowerCase()==term) // Limit to 5 suggestions
   
    if (pokemon) {
      setFilteredPokemon(pokemon)
    }else{
      setFilteredPokemon([])}
  }

  return (
  


        <div className="space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
        <Searcher onSelectPokemon={setSelectedPokemon} searchPokemon={searchPokemon} searchTerm={searchTerm} setSearchTerm={setSearchTerm} suggestions={suggestions} windowSize={windowSize} />
        <TableList pokemonList={searchTerm?filteredPokemon:currentItems} onSelectPokemon={setSelectedPokemon} windowSize={windowSize} />
        {!searchTerm && <PaginationControls />}
        </div>
        <div>
        <PokemonDetails pokemonName={selectedPokemon} windowSize={windowSize} />
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-4">Resumen Alfabético</h2>
        <AlphabetSummary alphabetCounts={alphabetCounts} windowSize={windowSize} />
      </div>
    </div>
   
  );
}