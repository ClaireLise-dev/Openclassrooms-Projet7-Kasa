import { useParams } from "react-router";
import houses from '../../data/logements.json';
import Error from '../Error/Error';
import Slideshow from '../../components/slideshow/slideshow';
import Rating from '../../components/rating/rating';
import classes from './Accomodation.module.css';
import Tags from '../../components/tags/tags';
import Dropdown from '../../components/dropdown/dropdown'

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
            <div className={classes.AccomodationInfos}>
                <div className={classes.InfosLocation}>
                    <h1>{house.title}</h1>
                    <p>{house.location}</p>
                    <Tags tags={house.tags}/>
                </div>
                <div className={classes.InfosHost}>
                    <div className={classes.Host}>
                        <div className={classes.Name}>{house.host.name}</div>
                        <img src={house.host.picture} alt='Nom propriétaire' />
                    </div>
                    <Rating key={house.id} rating={house.rating} />
                </div>
            </div>
        </div>
        <div className={classes.DropdownContainerAccomodation}>
            <div className={classes.DropdownItemAccomodation}><Dropdown  title='Description' content={house.description} /> </div>
            <div className={classes.DropdownItemAccomodation}><Dropdown  title='Equipements' content={house.equipments.map((infos) => (
              <li key={house.id}>{infos}</li>
            ))} />
            </div>
        </div>
    </>
    

        )
}

export default Accomodation;