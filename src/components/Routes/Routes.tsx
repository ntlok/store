import React from "react";
import { Route, Routes  } from "react-router-dom";
import { Home } from "../../pages/Home/Home";
import { Page } from "../../pages/Page";

export const Routex = (): JSX.Element => (
  <Routes>
    <Route element={<Home />} path="/" />
    <Route element={<Page />} path="/page" />
  </Routes>
);
