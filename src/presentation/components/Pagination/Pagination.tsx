import React from 'react';

interface PaginationProps {
  hasRepositories: boolean;
  setPage: (page: number) => void;
  page: number;
}

export const Pagination: React.FC<PaginationProps> = ({
  hasRepositories,
  setPage,
  page: pages,
}) => {
  const page = pages === 0 ? pages + 1 : pages; // Page starts in 0

  return hasRepositories ? (
    <div>
      {page > 1 ? (
        <>
          <button type="button" onClick={() => setPage(page - 1)}>
            Anterior
          </button>{' '}
          |{' '}
        </>
      ) : null}
      <button type="button" onClick={() => setPage(page + 1)}>
        Próximo
      </button>
    </div>
  ) : null;
};
