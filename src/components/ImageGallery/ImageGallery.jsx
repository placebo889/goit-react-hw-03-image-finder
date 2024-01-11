import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem"
import css from './ImageGallery.module.css'

export const ImageGallery = ({images, onClick}) => {

   const uniqueKeys = new Set();
     
      return (
            <ul className={css.ImageGallery}>
            {images.map((image) => {
               const key = image.id;
               
               if (!uniqueKeys.has(key)) {
                  uniqueKeys.add(key);
                  return <ImageGalleryItem key={key}  image={image} onClick={onClick}/>
                  }
               return null;
            })}

         </ul>
      )

}

