import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router} from 'react-router-dom';
// import App from '../src/app'
import './index.css';
import { Route, Routes } from 'react-router-dom';
import routes from '../src/config/routes'
import Home from '../src/pages/Home/Home';
import About from '../src/pages/About/About';
import Accomodation from '../src/pages/Accomodation/Accomodation';
import Error from '../src/pages/Error/Error';
import Layout from '../src/HOC/layout'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Router>
  
                <Layout>
                    <Routes>
                        <Route exact path={routes.HOME} element={<Home />} />
                        <Route exact path={routes.ABOUT} element={<About />} />
                        <Route exact path= {routes.ACCOMODATION} element={<Accomodation />} />
                        <Route path={routes.ERROR} element={<Error />} />
                    </Routes>
                </Layout>


      </Router>
  </React.StrictMode>
)