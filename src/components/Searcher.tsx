import {  useEffect, useRef, useState } from 'react';
import { Pokemon } from '../models/Pokemon.model';
import { Eraser, Search } from 'lucide-react';

const styles = {
    container: "flex items-center justify-center p-4 bg-red-50 rounded-lg",
    input: "border border-red-700 rounded-lg p-2 w-full",
    button: "bg-red-500 text-white p-2 rounded-lg ml-2",
    clearButton: " bg-orange-800 text-white p-2 rounded-lg ml-2",
    suggestionsContainer: "absolute bg-white border border-red-700 rounded-lg mt-2 w-full z-10",
    suggestionItem: "p-2 cursor-pointer hover:bg-red-300 "
};

interface SearcherProps {
    searchTerm:string,
    setSearchTerm: (value: string) => void;
    suggestions: Pokemon[];
    onSelectPokemon: (name: string) => void;
    windowSize: { width: number; height: number };
    searchPokemon:(value: string) => void
}

const Searcher = ({ searchTerm,setSearchTerm,suggestions,onSelectPokemon,searchPokemon }:SearcherProps) => {
    const [open, setOpen] = useState(false)
    const popoverRef = useRef<HTMLDivElement>(null)
        const handleSuggestionClick = (name:string) => {
            searchPokemon(name)
            setSearchTerm(name)
            onSelectPokemon(name)
            setOpen(false)
    };
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
          if (popoverRef.current && !popoverRef.current.contains(event.target as Node)) {
            setOpen(false)
          }
        }
    
        document.addEventListener("mousedown", handleClickOutside)
        return () => {
          document.removeEventListener("mousedown", handleClickOutside)
        }
      }, [])
    
    const clear=()=>{
        setSearchTerm('')
        searchPokemon('')
        setOpen(false)
    }  
    return (
        <div className="flex flex-col sm:flex-row gap-2">
          <div className="relative flex-1" ref={popoverRef}>

        <div className={styles.container}>
            <input
                type="text"
                placeholder="Search for a Pokémon..."
                className={styles.input}
                value={searchTerm}
                onChange={({target})=>{setSearchTerm(target.value)
                    setOpen(target.value.length > 0)}}
                />

            <button className={styles.button} onClick={()=>{searchPokemon(searchTerm) ;setOpen(false);onSelectPokemon(searchTerm)}}><Search /></button>
            <button className={styles.clearButton} onClick={clear}><Eraser /></button>
            
        </div>
        {open && suggestions.length > 0 && (
            <div className={styles.suggestionsContainer}>
                {suggestions.map(({name}, index) => (
                    <div
                    key={index}
                    className={styles.suggestionItem}
                    onClick={() => handleSuggestionClick(name) }
                    >
                        {name}
                    </div>
                ))}
            </div>
        )}
       
        </div>
        </div>
    );
};

export default Searcher;
