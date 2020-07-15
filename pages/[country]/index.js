import { useEffect } from 'react'
import axios from 'axios'
import Thumbnail from "../../components/Thumbnail"
import Link from "next/link"

const Home = ({ shows }) => {
  const renderShows = () => shows.map(({ show }, index) =>
    (<li key={index}><Thumbnail imageUrl={show.image?.medium} caption={show.name}/></li>))

  return (
    <div>
      <Link href={'/about'}>About </Link>
      <ul>{renderShows()}</ul>

    </div>
  )
}
Home.getInitialProps = async (context) => {
  const { query } = context
  const { data } = await axios.get(`http://api.tvmaze.com/schedule?country=${query.country}`)
  return {
    shows: data
  }
}

export default Home