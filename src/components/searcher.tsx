import { FC, useEffect, useRef, useState } from 'react';
import { Pokemon } from '../models/Pokemon.model';

const styles = {
    container: "flex items-center justify-center p-4 bg-gray-100",
    input: "border border-gray-300 rounded-lg p-2 w-full",
    button: "bg-blue-500 text-white p-2 rounded-lg ml-2",
    suggestionsContainer: "absolute bg-white border border-gray-300 rounded-lg mt-2 w-full z-10",
    suggestionItem: "p-2 cursor-pointer hover:bg-gray-400 "
};

interface SearcherProps {
    searchTerm:string,
    setSearchTerm: (value: string) => void;
    suggestions: Pokemon[];
    onSelectPokemon: (name: string) => void;
}

const Searcher: FC<SearcherProps> = ({ searchTerm,setSearchTerm,suggestions,onSelectPokemon }) => {
    const [open, setOpen] = useState(false)
    const popoverRef = useRef<HTMLDivElement>(null)
        const handleSuggestionClick = (name:string) => {
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
            <button className={styles.button}>Search</button>
            
        </div>
        {open && suggestions.length > 0 && (
            <div className={styles.suggestionsContainer}>
                {suggestions.map(({name}, index) => (
                    <div
                    key={index}
                    className={styles.suggestionItem}
                    onClick={() => handleSuggestionClick(name)}
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
