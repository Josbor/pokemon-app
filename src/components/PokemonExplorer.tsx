import { useEffect, useState } from "react";
import { Pokemon } from "../models/Pokemon.model";
import AlphabetSummary from "./alphabetSummaryProps";
import PokemonDetails from "./pokemonDetails";
import Searcher from "./searcher";
import TableList from "./TableList";
import useAlphabetCounts from "../hooks/useAlphabetCounts";
import { usePokemonSearch } from "../hooks/usePokemonSearch";
import usePagination from "../hooks/usePagination";

interface PokemonExplorerProps {
  pokemonList: Pokemon[];
}
export function PokemonExplorer({ pokemonList}:PokemonExplorerProps) {
  const [selectedPokemon, setSelectedPokemon] = useState<string | null>(null)
  const alphabetCounts = useAlphabetCounts( pokemonList )
  const{searchTerm,setSearchTerm,suggestions}= usePokemonSearch(pokemonList)
  const {currentItems,PaginationControls} =usePagination(pokemonList)
  const [filteredPokemon, setFilteredPokemon] = useState<Pokemon[]>([])  
 
  useEffect(() => {
    if(!searchTerm|| selectedPokemon!==searchTerm){
      setFilteredPokemon([])
      return}
    setFilteredPokemon(pokemonList.filter((pokemon) => pokemon.name.toLowerCase().includes(selectedPokemon?.toLowerCase() || '')))
  },[searchTerm])

  return (
        <div className="space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
        <Searcher onSelectPokemon={setSelectedPokemon} searchTerm={searchTerm} setSearchTerm={setSearchTerm} suggestions={suggestions} />
        <TableList pokemonList={filteredPokemon.length?filteredPokemon:currentItems} onSelectPokemon={setSelectedPokemon} />
        <PaginationControls />
        </div>
        <div>
          <PokemonDetails pokemonName={selectedPokemon} />
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-4">Resumen Alfabético</h2>
        <AlphabetSummary alphabetCounts={alphabetCounts} />
      </div>
    </div>
    
    

  );
}