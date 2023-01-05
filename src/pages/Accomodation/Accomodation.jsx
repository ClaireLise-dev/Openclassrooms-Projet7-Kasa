import { useParams } from "react-router";
import houses from '../../data/logements.json';
import Error from '../Error/Error';
import Slideshow from '../../components/slideshow/slideshow';
import Rating from '../../components/rating/rating'
import classes from './Accomodation.module.css'

function Accomodation() {
    
    const { id } = useParams();
    const house = houses.find((house) => house.id === id);
    if (!house) {
        return <Error />;
    }
    
    return (
    <>
        <Slideshow images={house.pictures} />
        <div className={classes.AccomodationInfosContainer}>
            <h1>{house.title}</h1>
            <Rating rating={house.rating}/>
        </div>
    </>
    

        )
}

export default Accomodation;