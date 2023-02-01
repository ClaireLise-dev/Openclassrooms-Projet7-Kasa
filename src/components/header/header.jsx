import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo_orange.svg'
import classes from './header.module.css'
import routes from '../../config/routes'

function Header() {
  return (
    <div className={classes.Header}>
      <NavLink to={routes.HOME}>
        <img src={logo} alt="Logo" className={classes.Logo} />
      </NavLink>

      <nav className={classes.Nav}>
        <NavLink
          to={routes.HOME}
          className={({ isActive }) => (isActive ? classes.active : undefined)}
        >
          Accueil
        </NavLink>
        <NavLink
          to={routes.ABOUT}
          className={({ isActive }) => (isActive ? classes.active : undefined)}
        >
          A Propos
        </NavLink>
      </nav>
    </div>
  )
}

export default Header
