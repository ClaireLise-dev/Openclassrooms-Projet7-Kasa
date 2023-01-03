import { useParams } from "react-router";
import houses from '../../data/logements.json'
import Error from '../Error/Error';
import Slideshow from '../../components/slideshow/slideshow'

function Accomodation() {
    
    const { id } = useParams();
    const house = houses.find((house) => house.id === id);
    if (!house) {
        return <Error />;
    }
    
    return (

        <Slideshow images={house.pictures} />

        )
}

export default Accomodation;