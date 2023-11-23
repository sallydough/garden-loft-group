import React from 'react'
import './gallery.css'
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css"

const images = [
  {
    original: "https://picsum.photos/id/129/1000/600/",
    thumbnail: "https://picsum.photos/id/129/250/150/",
  },
  {
    original: "https://picsum.photos/id/513/1000/600/",
    thumbnail: "https://picsum.photos/id/513/250/150/",
  },
  {
    original: "https://picsum.photos/id/838/1000/600/",
    thumbnail: "https://picsum.photos/id/838/250/150/",
  },
];

  
  class Gallery extends React.Component {
    render() {
      return <ImageGallery className='gallery-slide' 
      items={images}
      infinite={true}
      showThumbnails={false}
      autoPlay={true}
      showNav={false} />;
    }
  }

export default Gallery