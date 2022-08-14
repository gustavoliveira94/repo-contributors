/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react';

import {
  Repository,
  Search,
  Pagination,
  Header,
} from 'presentation/components';

import { useSearchRepositories } from 'presentation/hooks/useSearchRepositories';

export const Home: React.FC = () => {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(0);

  const { repositories, searchRepositories, loading } = useSearchRepositories();

  useEffect(() => {
    if (page >= 1) {
      searchRepositories({ name: search, page });
    }
  }, [page]);

  return (
    <div className="App">
      <Header title="Search Repository" />

      <Search
        searchRepositories={searchRepositories}
        setSearch={setSearch}
        search={search}
      />

      {loading ? (
        <>
          <p>Loading...</p>
          <br />
        </>
      ) : (
        <>
          {repositories && repositories?.total_count >= 1 ? (
            <p>
              <b>Total repositories:</b> {repositories?.total_count}
            </p>
          ) : null}

          <br />
          <br />

          {repositories?.items.map(({ full_name, description }) => {
            return (
              <Repository full_name={full_name} description={description} />
            );
          })}
        </>
      )}

      <Pagination
        page={page}
        setPage={setPage}
        hasRepositories={!!repositories?.items?.length}
      />
    </div>
  );
};
