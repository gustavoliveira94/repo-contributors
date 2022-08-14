import { useState } from 'react';

import {
  allRepositories,
  allRepositoriesProps,
} from 'data/usecases/search/repositories/repositories';

import { IallRepositories } from 'domain/usecases/repositories/allRepositories';

export const useSearchRepositories = () => {
  const [repositories, setRepositories] = useState<IallRepositories>();
  const [loading, setLoading] = useState(false);

  const searchRepositories = async ({ name, page }: allRepositoriesProps) => {
    setLoading(true);
    try {
      const { data } = await allRepositories({ name, page });

      setRepositories(data);
      setLoading(false);
    } catch (e) {
      setLoading(false);
    }
  };

  return {
    searchRepositories,
    repositories,
    loading,
  };
};
