import { useState, useEffect } from "react";
import marvel1 from '../assets/marvel1.png'
import marvel2 from '../assets/marvel2.png'
import marvel3 from '../assets/marvel3.png'
import marvel4 from '../assets/marvel4.png'
import marvel5 from '../assets/marvel5.png'
import marvel6 from '../assets/marvel6.png'
import marvel7 from '../assets/marvel7.png'
import marvel8 from '../assets/marvel7.png'
import './SlideShow.css'


const SlideShow = () => {
    const images = [marvel1, marvel2, marvel3, marvel4, marvel5, marvel6, marvel7, marvel8]
    const [currentImage, setCurrentImage] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prevImage) =>
            prevImage === images.length - 1 ? 0 : prevImage + 1
            )
        }, 5000)

        return () => clearInterval(interval)
    }, [images])

        return <img className="slideshow-picture" src={images[currentImage]} alt="slideshow" />



}
 
export default SlideShow;