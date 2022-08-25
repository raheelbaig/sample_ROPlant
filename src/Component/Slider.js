import video from '../Assets/RoPlant.mp4'
import styles from './slider.module.css'
import image from '../Assets/posterImg.jpg'

function Slider() {
    return (
        <div className={styles.slider} >    
         <video className='styles.video' controls autoPlay muted>
            <source src={video} type='video/mp4'></source>
         </video>
        </div>
    )
}
export default Slider;