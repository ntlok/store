import React from 'react';
import { Route, Routes as RoutesRRD } from 'react-router-dom';
import { Home } from '../../pages/Home/Home';
import { Page } from '../../pages/Page';

export const Routes = (): JSX.Element => (
  <RoutesRRD>
    <Route element={<Home />} path="/" />
    <Route element={<Page />} path="/page" />
  </RoutesRRD>
);
