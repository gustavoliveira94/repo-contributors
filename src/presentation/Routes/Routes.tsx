import React from 'react';
import { BrowserRouter, Routes as Router, Route } from 'react-router-dom';

import { Home, Contributors } from 'presentation/pages';

export const Routes = () => {
  return (
    <>
      <BrowserRouter>
        <Router>
          <Route path="/" element={<Home />} />
          <Route
            path="/contributors/:owner/:repository"
            element={<Contributors />}
          />
        </Router>
      </BrowserRouter>
    </>
  );
};
