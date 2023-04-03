import { useState, useEffect } from 'react'
import classes from './Home.module.css'
import houses from '../../data/logements.json'
import Card from '../../components/card/card'
import Banner from '../../components/banner/banner'

function Home() {
  const [accomodations, setAccomodations] = useState(houses)

  useEffect(() => setAccomodations(houses), [])
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className={classes.HomeContainer}>
      <Banner />
      <section className={classes.Gallery}>
        {accomodations.map((house) => (
          <Card key={house.id} house={house} />
        ))}
      </section>
    </main>
  )
}

export default Home
