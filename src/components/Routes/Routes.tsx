import React from 'react';
import { Route, Routes as RoutesRRD } from 'react-router-dom';
import { Home } from '../../pages/Home/Home';

export const Routes = (): JSX.Element => (
  <RoutesRRD>
    <Route element={<Home />} path="/" />
  </RoutesRRD>
);
