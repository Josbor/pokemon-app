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

    return {
        currentPage,
        totalPages,
        currentItems,
        goToNextPage,
        goToPreviousPage,
        goToFirstPage,
        goToLastPage,
    };
};

export default usePagination;