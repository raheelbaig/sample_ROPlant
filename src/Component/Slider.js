
import video from '../Assets/RoPlant.mp4'
import './slider.css'
import image from '../Assets/posterImg.jpg'

function Slider() {
    return (
        <div className="slide" >
            
         <video  controls poster={image}>
            <source src={video} type='video/mp4'></source>
         </video>
        </div>
    )
}
export default Slider;