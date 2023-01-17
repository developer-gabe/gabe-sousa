import React, { useRef } from 'react'
import { useState } from 'react'
import './image-grid.css'
import image1 from '../../../images/DSC00540.jpg' 
import image2 from '../../../images/DSC00331.jpg'
import image3 from '../../../images/DSC01000.jpg'
import image4 from '../../../images/DSC01636.jpg'
import image5 from '../../../images/DSC08010.jpg' 
import image6 from '../../../images/DSC05161.jpg' 
import image7 from '../../../images/DSC08001.jpg' 
import image8 from '../../../images/DSC04844.jpg' 
import image9 from '../../../images/tall.jpg' 

const ImageGrid = () => {
  const [images] = useState([
    { id: 1, src: image1 },
    { id: 2, src: image2 },
    { id: 3, src: image3 },
    { id: 4, src: image4 },
    { id: 5, src: image5},
    { id: 6, src: image6 },
    { id: 7, src: image7 },
    { id: 8, src: image8 },
    { id: 9, src: image9 }
  ])
  const [selectedImage, setSelectedImage] = useState(null)
  const selectedImageRef = useRef(null)

  const handleClick = (image) => {
    setSelectedImage(image)
    if(selectedImageRef.current)
    selectedImageRef.current.scrollIntoView({ behavior: "smooth", block: "center" })
  }

  return (
    <div className="image-grid-container">
      {selectedImage && <img ref={selectedImageRef} src={selectedImage.src} alt={selectedImage.id} className="selected-image"/>}
      <div className="image-grid">
        {
          images.map((image, index) => (
            <div className="image-grid-col" key={image.id} style={{backgroundImage: "url(" + image.src + ")"}} onClick={() => handleClick(image)}>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default ImageGrid