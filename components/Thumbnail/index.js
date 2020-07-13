import React from 'react'
import { ThumbnailStyles } from "./styles"
import Link from "next/link"

const Thumbnail = ({ imageUrl, caption }) => {

  return (
    <div className={'thumbnail'}>
      <Link href={'/us/5617'}>
        <a >
          <img src={imageUrl} className={'thumbnail__image'}/>
          <div className={'thumbnail__caption'}>{caption}</div>
        </a>

      </Link>
      <style jsx>{ThumbnailStyles}</style>
    </div>
  )
}

export default Thumbnail