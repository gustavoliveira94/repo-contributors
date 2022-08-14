import React from 'react';

interface HeaderProps {
  title: string;
}

export const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className="App-header">
      <h2 className="title">{title}</h2>
    </header>
  );
};
