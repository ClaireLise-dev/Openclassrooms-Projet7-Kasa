import { Link } from 'react-router-dom'
import logo from '../../assets/logo_blanc.svg'
import classes from './footer.module.css'
import routes from '../../config/routes'

function Footer() {
  let date = new Date()
  return (
    <div className={classes.Footer}>
      <Link to={routes.HOME}>
        <img src={logo} alt="logo" className={classes.Logo} />
      </Link>
      <div>© {date.getFullYear()} Kasa. All rights reserved</div>
    </div>
  )
}

export default Footer
