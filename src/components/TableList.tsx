import { FC, useState } from 'react';
import { Pokemon } from '../models/Pokemon.model';
import { useEffect } from 'react';

interface TableListProps {
    pokemonList: Pokemon[];
    onSelectPokemon: (name: string) => void;
    windowSize: { width: number; height: number };
}
interface FormattedPokemon extends Pokemon {
    image: string;
}
const styles = {
    cell: "  border-b border-gray-200",
    header: "py-2  border-b border-red-500 bg-red-50 text-justify rounded-sm",
    tableContainer: "overflow-x-auto mt-4 rounded-lg",
    table: "min-w-full bg-gray-50  ",
    pokemonImage:''
};

const TableList: FC<TableListProps> = ({ pokemonList, onSelectPokemon }) => {
    const [formattedPokemonList, setFormattedPokemonList] = useState<FormattedPokemon[]>([]);
 

    useEffect(() => {
        const fetchPokemonImages = async () => {
            const updatedPokemonList = await Promise.all(
                pokemonList.map(async (pokemon) => {
                    const response = await fetch(pokemon.url);
                    const data = await response.json();
                    return { ...pokemon, image: data.sprites.front_default };
                })
            );
            setFormattedPokemonList(updatedPokemonList);
        };

        fetchPokemonImages();
    }, [pokemonList]);
    
    return (
        pokemonList.length > 0 ?
        
        <div className={styles.tableContainer}>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th className={`${styles.header} pl-2  md:pl-10  !text-center md:!text-justify'}`}>ID</th>
                        <th className={`${styles.header} pl-2  md:pl-20 `}>Name</th>
                        <th className={`${styles.header} !text-center`}>Image</th>
                    </tr>
                </thead>
                <tbody>
                    {formattedPokemonList.map(({ name,url,image }:FormattedPokemon) => (
                        <tr className='h-20 hover:bg-gray-100 !cursor-pointer' key={ url.split('/')[6]} onClick={() => onSelectPokemon(name)}>
                            <td className={`${styles.cell}  pl-2 md:pl-10 w-2/12 `}>{url.split('/')[6]}</td>
                            <td className={`${styles.cell} w-6/12  pl-2 md:pl-20 text-sm md:text-lg`}>{name}</td>
                            <td className={`${styles.cell} flex justify-center`}><img className={styles.pokemonImage} src={image} alt="name" />
                            </td>
                           
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
         :
         <div className="text-center py-10">
           <h2 className="text-xl font-semibold">No se encontraron resultados</h2>
           <p>Intenta con otro término de búsqueda.</p>
         </div>
         
     
    );
};

export default TableList;