import React from 'react';
import { Route, Routes } from 'react-router-dom';
import routes from '../src/config/routes'
import './index.css';

import Home from '../src/pages/Home/Home';
import About from '../src/pages/About/About';
import Accomodation from '../src/pages/Accomodation/Accomodation';
import Error from '../src/pages/Error/Error';
import Layout from '../src/HOC/layout'


  
function App(){ 
    return(   
        <div className='App'>
            <Layout>
                <Routes>
                    <Route exact path={routes.HOME} element={<Home />} />
                    <Route exact path={routes.ABOUT} element={<About />} />
                    <Route exact path= 'accomodation/:id' element={<Accomodation />} />
                    <Route path={routes.ERROR} element={<Error />} />
                </Routes>
            </Layout>
        </div> 
    )
}

export default App;
  
