
import React from 'react'

export const GalleryView = (props:any) => {
  const {imageList} = props;
  return (
    <div>
      <img src={imageList} alt="" />
    </div>
  )
}
