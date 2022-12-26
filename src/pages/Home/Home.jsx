import classes from './Home.module.css'

function Home() {
    return (
        <main className={classes.HomeContainer}>
            <div className={classes.Hero}>
                <h1>Chez vous, partout et ailleurs.</h1>
            </div>
        </main>
    )
}

export default Home