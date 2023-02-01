import Star from '../../assets/Star.svg'
import EmptyStar from '../../assets/EmptyStar.svg'
import classes from './rating.module.css'

function Rating(props) {
  let ratingTab = []

  for (let i = 0; i < props.rating; i++) {
    ratingTab.push(
      <img key={i} className={classes.Star} src={Star} alt="Star" />
    )
  }
  for (let j = ratingTab.length; j < 5; j++) {
    ratingTab.push(
      <img key={j} className={classes.Star} src={EmptyStar} alt="Empty Star" />
    )
  }

  return (
    <div className={classes.Rating}>
      <span>{ratingTab}</span>
    </div>
  )
}

export default Rating
