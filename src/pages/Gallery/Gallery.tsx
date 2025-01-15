import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { GalleryStyled } from "./Gallery.styled";

const Gallery = ({ siteDetails }: any) => {
  const history = useHistory();
  const myObject = history.location.state as any;

  const [images, setImages] = useState<any[]>([]);

  useEffect(() => {
    const images = myObject?.gallery?.map((img: any, idx: any) => {
      return {
        id: idx,
        src: img,
        alt: `Image ${idx + 1}`,
      };
    });
    setImages(images);
  }, [myObject]);

  return (
    <GalleryStyled>
      <h1>Gallery</h1>
      <p>
        Do consectetur proident proident id eiusmod deserunt consequat <br />{" "}
        pariatur ad ex velit do Lorem reprehenderit.
      </p>
      <div className="gallery-grid">
        {images.map((image) => (
          <div key={image.id} className="gallery-item">
            <img src={image.src} alt={image.alt} className="gallery-image" />
          </div>
        ))}
      </div>
    </GalleryStyled>
  );
};

export default Gallery;
