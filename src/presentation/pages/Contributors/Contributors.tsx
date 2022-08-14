/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useContributors } from 'presentation/hooks/useContributors';

import { Contributor, Header } from 'presentation/components';

import './styles.css';

export const Contributors: React.FC = () => {
  const params = useParams();

  const { contributors, getContributors } = useContributors();

  useEffect(() => {
    getContributors({
      repository: `${params?.repository!}`,
      owner: `${params?.owner!}`,
    });
  }, []);

  return (
    <>
      <Header title="Contributors" />

      <div className="content">
        {contributors.map(
          ({ login, avatar_url, contributions, html_url, id }) => {
            return (
              <Contributor
                key={id}
                login={login}
                avatar_url={avatar_url}
                contributions={contributions}
                html_url={html_url}
              />
            );
          },
        )}
      </div>
    </>
  );
};
