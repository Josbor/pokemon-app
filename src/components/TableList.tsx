import React from 'react';
import { Pokemon } from '../models/Pokemon.model';

interface TableListProps {
    pokemonList: Pokemon[];
    onSelectPokemon: (name: string) => void
}

const styles = {
    cell: "py-2 px-4 border-b border-gray-200",
    header: "py-2 px-4 border-b border-gray-200 bg-gray-100",
    tableContainer: "overflow-x-auto",
    table: "min-w-full bg-white"
};

const TableList: React.FC<TableListProps> = ({ pokemonList, onSelectPokemon }) => {
    return (
        <div className={styles.tableContainer}>
            <table className={styles.table}>
                <thead>
                    <tr>
                        {['ID', 'Name'].map((header) => (
                            <th key={header} className={styles.header}>
                                {header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {pokemonList.map(({ name },id) => (
                        <tr key={id} onClick={() => onSelectPokemon(name)}>
                            <td className={styles.cell}>{id}</td>
                            <td className={styles.cell}>{name}</td>
                           
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TableList;