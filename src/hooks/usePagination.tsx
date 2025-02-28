import { useEffect, useState } from 'react';
import { Pokemon } from '../models/Pokemon.model';

const usePagination = (items: Pokemon[], itemsPerPage: number = 20) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [currentItems, setCurrentItems] = useState<Pokemon[]>([]);	
    const totalPages = Math.ceil(items.length / itemsPerPage);

    useEffect(() => {
        const begin = (currentPage - 1) * itemsPerPage;
        const end = begin + itemsPerPage;
        setCurrentItems(items.slice(begin, end));
    }, [currentPage, items, itemsPerPage]);
 

    const goToNextPage = () => {
        setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
    };

    const goToPreviousPage = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    };

    const goToFirstPage = () => {
        setCurrentPage(1);
    };

    const goToLastPage = () => {
        setCurrentPage(totalPages);
    };

    const styles = {
        container: "flex items-center justify-between",
        infoText: "text-sm text-gray-500",
        buttonContainer: "flex items-center space-x-2",
        button: "inline-flex items-center px-3 py-1 border border-gray-300 text-sm rounded-md",
        disabledButton: "bg-gray-100 text-gray-400 cursor-not-allowed",
        enabledButton: "bg-white text-gray-700 hover:bg-gray-50",
        pageInfo: "text-sm text-gray-700",
    };

    const PaginationControls = () => (
        <div className={styles.container}>
            <div className={styles.infoText}>
                Mostrando {currentItems.length} de {items.length} Pokémon
            </div>
            <div className={styles.buttonContainer}>
                <button
                    onClick={goToFirstPage}
                    disabled={currentPage === 1}
                    className={`${styles.button} ${currentPage === 1 ? styles.disabledButton : styles.enabledButton}`}
                >
                    First
                </button>
                <button
                    onClick={goToPreviousPage}
                    disabled={currentPage === 1}
                    className={`${styles.button} ${currentPage === 1 ? styles.disabledButton : styles.enabledButton}`}
                >
                    Previous
                </button>
                <span className={styles.pageInfo}>
                    Página {currentPage} de {totalPages}
                </span>
                <button
                    onClick={goToNextPage}
                    disabled={currentPage === totalPages}
                    className={`${styles.button} ${currentPage === totalPages ? styles.disabledButton : styles.enabledButton}`}
                >
                    Next
                </button>
                <button
                    onClick={goToLastPage}
                    disabled={currentPage === totalPages}
                    className={`${styles.button} ${currentPage === totalPages ? styles.disabledButton : styles.enabledButton}`}
                >
                    Last
                </button>
            </div>
        </div>
    );

    return {
        currentItems,
        PaginationControls
    };
};

export default usePagination;