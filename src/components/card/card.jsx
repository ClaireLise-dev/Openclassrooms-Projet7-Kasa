import { NavLink } from 'react-router-dom';
import classes from './card.module.css';
import routes from '../../config/routes';

function Card(props){

    return (
        <div className={classes.Container}>
            <NavLink to={'accomodation/' + props.house.id} className={classes.Card} key={props.house.key}>
                <img className={classes.CardImg} src={props.house.cover} alt="" />
                <h2>{props.house.title}</h2>
            </NavLink>
        </div>
    );

}

export default Card;