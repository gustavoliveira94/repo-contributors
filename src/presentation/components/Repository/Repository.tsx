/* eslint-disable camelcase */
import React from 'react';
import { Link } from 'react-router-dom';

import { IRepositories } from 'domain/models/repositories/repositories';

export const Repository: React.FC<
  Pick<IRepositories, 'full_name' | 'description'>
> = ({ full_name, description }) => {
  return (
    <>
      <p>
        <b>Name:</b> <Link to={`/contributors/${full_name}`}>{full_name}</Link>
      </p>
      <p>
        <b>Description:</b> {description}
      </p>
      <br />
    </>
  );
};
