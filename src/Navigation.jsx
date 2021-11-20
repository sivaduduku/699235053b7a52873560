import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    useRoutes,
  } from "react-router-dom";

import ContryComponent from './CountryComponent';
import ContryWeatherComponent from './CountryWeatherComponent';

const Navigation = () => {
    let routes = useRoutes([
      { path: "/", element: <ContryComponent /> },
      { path: "weatherDetails", element: <ContryWeatherComponent /> },
      // ...
    ]);
    return routes;
  };

export default Navigation;