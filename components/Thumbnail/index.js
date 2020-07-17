import React from 'react'
import { ThumbnailStyles } from "./styles"
import Link from "next/link"

const Thumbnail = ({ imageUrl, caption, href, as }) => {

  return (
    <div className={'thumbnail'}>
      <Link href={href} as={as}>
        <a>
          <img src={imageUrl} className={'thumbnail__image'}/>
          <div className={'thumbnail__caption'}>{caption}</div>
        </a>

      </Link>
      <style jsx>{ThumbnailStyles}</style>
    </div>
  )
}

export default Thumbnail