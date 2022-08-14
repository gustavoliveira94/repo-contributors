/* eslint-disable camelcase */
import React from 'react';

import { IContributor } from 'domain/models/contributor/contributor';

import './styles.css';

export const Contributor: React.FC<
  Pick<IContributor, 'avatar_url' | 'login' | 'html_url' | 'contributions'>
> = ({ login, avatar_url, html_url, contributions }) => {
  return (
    <div className="contributor">
      <img width={200} height={200} src={avatar_url} alt="avatar" />
      <p>
        <b>Name:</b> {login}
      </p>
      <p>
        <b>Profile:</b>{' '}
        <a href={html_url} target="__blank">
          {html_url}
        </a>
      </p>
      <p>
        <b>Contributions:</b> {contributions}
      </p>
    </div>
  );
};
