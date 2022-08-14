import React from 'react';

import { allRepositoriesProps } from 'data/usecases/search/repositories/repositories';

interface SearchProps {
  searchRepositories: ({ name }: allRepositoriesProps) => void;
  setSearch: (name: string) => void;
  search: string;
}

export const Search: React.FC<SearchProps> = ({
  searchRepositories,
  setSearch,
  search,
}) => {
  return (
    <>
      <input onChange={(name: any) => setSearch(name.target.value)} />
      <button
        type="button"
        onClick={() => searchRepositories({ name: search, page: 1 })}
        disabled={!search?.length}
      >
        Buscar
      </button>
      <br />
      <br />
    </>
  );
};
