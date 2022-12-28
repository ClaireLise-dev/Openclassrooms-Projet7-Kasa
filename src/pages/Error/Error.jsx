import { Link } from "react-router-dom";
import classes from './Error.module.css';
import routes from '../../config/routes'

function Error() {
    return (

        <main className={classes.ErrorContainer}>
            <div className={classes.ErrorText}>
                <h1>404</h1>
                <p> Oups! La page que vous demandez n'existe pas</p>
            </div>
            <div className={classes.Link}>
                <Link to={routes.HOME}>Retourner à la page d'accueil</Link>
            </div>
        </main>

    )
}

export default Error