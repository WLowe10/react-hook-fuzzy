import { useMemo, useState } from "react";
import FuzzySearch from "fuzzy-search";
import type { Options as FuzzyOptions } from "fuzzy-search";

type FuzzyReturnType<T> = {
    results: Array<T>,
    term: string,
    search: (query: string) => void,
};

type OptionsType = { allOnEmpty?: boolean, sort?: boolean, caseSensitive?: boolean };

export const useFuzzy = <T extends object>(items: Array<T>, keys: Array<string>, options?: OptionsType): FuzzyReturnType<T> => {
    const fuzzyOptions = { sort: options?.sort, caseSensitive: options?.caseSensitive };
    const [term, setTerm] = useState<string>("");
    const fuzzy = useMemo(() => new FuzzySearch(items, keys, fuzzyOptions), [items, keys, options]);

    const handleSearch = (query: string) => {
        setTerm(query);
    };

    const results: Array<T> = options?.allOnEmpty == false && !term ? [] : fuzzy.search(term);

    return {
        results: results,
        search: handleSearch,
        term: term
    };
};