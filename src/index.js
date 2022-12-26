import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import routes from '../src/config/routes'
import './index.css';

import Home from '../src/pages/Home/Home';
import About from '../src/pages/About/About';
import Accomodation from '../src/pages/Accomodation/Accomodation';
import Error from '../src/pages/Error/Error'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path={routes.HOME} element={<Home />} />
        <Route path={routes.ABOUT} element={<About />} />
        <Route path={routes.ACCOMODATION} element={<Accomodation />} />
        <Route path={routes.ERROR} element={<Error />} />
      </Routes>
    </Router>
  </React.StrictMode>
);


