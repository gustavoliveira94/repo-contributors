import { useState } from 'react';

import {
  contributors as reqContributors,
  contributorsProps,
} from 'data/usecases/contributors/contributors';

import { IContributors } from 'domain/usecases/contributors/contributors';

export const useContributors = () => {
  const [contributors, setContributors] = useState<IContributors>([]);
  const [loading, setLoading] = useState(false);

  const getContributors = async ({ repository, owner }: contributorsProps) => {
    setLoading(true);
    try {
      const { data } = await reqContributors({ repository, owner });

      setContributors(data);
      setLoading(false);
    } catch (e) {
      setLoading(false);
    }
  };

  return {
    getContributors,
    contributors,
    loading,
  };
};
