import { useState } from "react";
import { useSearchMoviesQuery } from "../../redux/moviesApi";
import useDebounce from "./useDebounce";

const useSearchMovies = () => {
    const [searchItem, setSearchItem] = useState("");
    const debouncedSearchValue = useDebounce(searchItem, 1000);
    const { data, error, isLoading } = useSearchMoviesQuery(debouncedSearchValue);

    return {
        setSearchItem,
        debouncedSearchValue,
        data,
        error,
        isLoading,
    };
};

export default useSearchMovies;
