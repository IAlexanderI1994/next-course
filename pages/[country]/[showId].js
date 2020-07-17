import React, { useEffect } from 'react'
import axios from 'axios'
import { ThumbnailStyles } from "../../components/Thumbnail/styles"



export const getServerSideProps = async () => {

  const { data: show } = await axios.get(`http://api.tvmaze.com/shows/1?embed=cast`)


  return { props: show }

}
const ShowDetails = (props) => {

  const { name, image } = props

  return (
    <div className={'show-details'}>
      <div className="show-details__poster" style={{ backgroundImage: `url(${image.original})` }}>
        <h1>{name} </h1>
      </div>
      <style jsx>{
        `.show-details__poster {
          height: 200px;
          background-size: cover;
       }
      `
      }</style>

    </div>
  )
}
export default ShowDetails