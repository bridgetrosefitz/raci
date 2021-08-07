import '../photo-slideshow.css'
import { useState } from 'react'
import Arrow from './Arrow'

const PhotoSlideshow = ({ dataAos, dataAosDuration, photos, arrowColor }) => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0)

  const altText = photos[currentPhotoIndex]
    .split(`-${currentPhotoIndex + 1}-`)[1]
    .split('.')[0]

  const changePhoto = direction => {
    const photosLastIndex = photos.length -1
    if(direction === 'left') {
      if (currentPhotoIndex === 0) {
        setCurrentPhotoIndex(photosLastIndex)
      } else {
        setCurrentPhotoIndex(currentPhotoIndex - 1)
      }
    } else if (direction === 'right') {
      if (currentPhotoIndex === photosLastIndex) {
        setCurrentPhotoIndex(0)
      } else {
        setCurrentPhotoIndex(currentPhotoIndex + 1)
      }
    }
  }

  return (
    <div data-aos={dataAos} data-aos-duration={dataAosDuration} className="photo-slideshow-container">
      <div className='slideshow-panel-left'/>
      <div className='slideshow-panel-right' />
      <Arrow slideshowArrow direction='left' color={arrowColor} onClick={() => changePhoto('left')} />
      <Arrow slideshowArrow direction='right' color={arrowColor} onClick={() => changePhoto('right')} />
      <img className='project-image' alt={altText} src={photos[currentPhotoIndex]}/>
    </div>
  )
}

export default PhotoSlideshow