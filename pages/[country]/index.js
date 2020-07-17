import axios from 'axios'
import Thumbnail from "../../components/Thumbnail"
import Link from "next/link"

const Home = ({ shows, country }) => {
  const renderShows = () => shows.map(({ show }, index) =>
    (<li key={index}><Thumbnail
      imageUrl={show.image?.medium}
      href={'/[country]/[showId]'}
      as={`/${country}/${show.id}`}
      caption={show.name}/></li>))

  return (
    <div>
      <Link href={'/about'}>About </Link>
      <ul>{renderShows()}</ul>

    </div>
  )
}
Home.getInitialProps = async (context) => {
  const { query: { country = 'us' } } = context
  const { data: shows } = await axios.get(`http://api.tvmaze.com/schedule?country=${country}`)
  return {
    shows,
    country
  }
}

export default Home