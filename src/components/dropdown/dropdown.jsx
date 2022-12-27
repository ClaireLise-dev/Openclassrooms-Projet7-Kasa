import { useState } from 'react';
import classes from './dropdown.module.css';
import arrow from '../../assets/arrow.svg'

function Dropdown(props){

    const [show, setShow] = useState(false);

    const ShowChange = () => {
        setShow(!show);
        console.log(show)
    };
    
      return (
        <>
            <div className={classes.Dropdown}>
                <div className={classes.DropdownTitle}>{props.title}</div>
                <img className={show ? classes.arrowUp : classes.arrow} src={arrow} onClick={ShowChange} alt='fleche'/>
            </div>
            {show && (
                    <div className={classes.DropdownContent}>{props.content}</div>
                )}
        </>
        )

}

export default Dropdown;