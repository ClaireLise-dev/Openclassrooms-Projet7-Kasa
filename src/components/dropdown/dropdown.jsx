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
                <img className={show ? classes.ArrowUp : classes.Arrow} src={arrow} onClick={ShowChange} alt='fleche'/>
            </div>
            {show && (
                    <div className={classes.DropdownContent}><p>{props.content}</p></div>
                )}
        </>
        )

}

export default Dropdown;