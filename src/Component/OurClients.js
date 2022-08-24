import React from 'react'

import './ourclients.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import {FreeMode} from 'swiper';
import 'swiper/css';
import 'swiper/css/free-mode';
import image from '../Assets/nestleLogo.png'

function OurClients() {
  return (
    <div >
        <h1 className='heading'>Our Valuable Clients</h1>
        {/* <hr width="100%" /> */}
        <div className='container py-4 px-4 justify-content-center ' style={{boxShadow: "-1px 11px 13px -3px rgba(92,102,96,0.77)",marginTop:20}}>
            <Swiper 
            FreeMode={true}
            grabCursor={true}
            modules={[FreeMode]}
            className="mySwiper"
            slidesPerView={5}
            spaceBetween={30}
            
            >
            <SwiperSlide>
                <img src={image}/>
            </SwiperSlide>
            <SwiperSlide>
            <img src={image}/>

            </SwiperSlide>
            <SwiperSlide>
            <img src={image}/>

            </SwiperSlide>
            <SwiperSlide>
            <img src={image}/>

            </SwiperSlide>
            <SwiperSlide>
            <img src={image}/>

            </SwiperSlide>
            <SwiperSlide>
            <img src={image}/>

            </SwiperSlide>
            <SwiperSlide>
            <img src={image}/>

            </SwiperSlide>
            <SwiperSlide>
            <img src={image}/>

            </SwiperSlide>
            </Swiper>
        </div>

    </div>
  )
}

export default OurClients