import React from 'react';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import classes from './layout.module.css'

function Layout(props){
    return (
        <>
            <div className={classes.GeneralContainer}>
                <Header />
                    {props.children}
            </div>
           <Footer />
        </>
    )
}

export default Layout;