import { useState } from "react";
import classes from './slideshow.module.css';
import arrowForward from '../../assets/arrow_forward_house.svg';
import arrowBack from '../../assets/arrow_back_house.svg';

function Slideshow (props) {
    let [currentImage, setCurrentImage] = useState(0);
    let length = props.images.length

    function nextImage() {
        setCurrentImage(currentImage === length - 1 ? 0 : currentImage + 1);
    }

    function previousImage() {
        setCurrentImage(currentImage === 0 ? length - 1 : currentImage - 1)

    }
    
    return (

        <div className={classes.SlideshowContainer}>
            <div className={classes.Slideshow}>
                <img className={classes.Image} src={props.images[currentImage]} alt={props.title}/>
            </div>
            <span className={classes.Counter}>
                { currentImage + 1 } / { length }
            </span>
            <button onClick={previousImage}>
                <img src={arrowBack} className={ length === 1 ? classes.ArrowBackNone : classes.ArrowBack }  alt="bouton précédent" />
            </button>
            <button onClick={nextImage}>
                <img src={arrowForward} className= {length === 1 ? classes.ForwardArrowNone : classes.ArrowForward} alt="bouton suivant" />
            </button>
        </div>

    )
}

export default Slideshow;