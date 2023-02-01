import { useState } from 'react'
import classes from './slideshow.module.css'
import arrowForward from '../../assets/arrow_forward_house.svg'
import arrowBack from '../../assets/arrow_back_house.svg'

function Slideshow(props) {
  let [currentImage, setCurrentImage] = useState(0)
  let length = props.images.length

  function nextImage() {
    setCurrentImage(currentImage === length - 1 ? 0 : currentImage + 1)
  }

  function previousImage() {
    setCurrentImage(currentImage === 0 ? length - 1 : currentImage - 1)
  }

  return (
    <div className={classes.SlideshowContainer}>
      <div className={classes.Slideshow}>
        <img
          className={classes.Image}
          src={props.images[currentImage]}
          alt={props.title}
        />
      </div>
      <span className={classes.Counter}>
        {currentImage + 1} / {length}
      </span>
      <img
        src={arrowBack}
        onClick={previousImage}
        className={length === 1 ? classes.ArrowBackNone : classes.ArrowBack}
        alt="bouton précédent"
      />
      <img
        src={arrowForward}
        onClick={nextImage}
        className={
          length === 1 ? classes.ArrowForwardNone : classes.ArrowForward
        }
        alt="bouton suivant"
      />
    </div>
  )
}

export default Slideshow
