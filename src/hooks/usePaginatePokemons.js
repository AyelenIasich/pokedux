import { useState, useMemo } from "react";

export const usePaginatedPokemons = (pokemons, itemsPerPage = 5) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = useMemo(
    () => Math.ceil(pokemons.length / itemsPerPage),
    [pokemons, itemsPerPage]
  );

  const getCurrentPagePokemons = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return pokemons.slice(startIndex, endIndex);
  }, [currentPage, pokemons, itemsPerPage]);

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };
  return {
    currentPage,
    totalPages,
    getCurrentPagePokemons,
    handleNextPage,
    handlePreviousPage,
  };
};
