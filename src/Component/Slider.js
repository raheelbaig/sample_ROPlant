
import video from '../Assets/RoPlant.mp4'
import './slider.css'
import image from '../Assets/posterImg.jpg'

function Slider() {
    return (
        <div className="slide" >
            
         <video height="600" controls poster={image}>
            <source width="1200px" src={video} type='video/mp4'></source>
         </video>
        </div>
    )
}
export default Slider;