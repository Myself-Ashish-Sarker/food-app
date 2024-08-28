import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './banner.css';

// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

// banner images
import banner1 from "/banner/banner1.png";
import banner2 from "/banner/banner2.png";
import banner3 from "/banner/banner3.png";

const Banner = () => {

    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    };

    return (
        <>
            <Swiper
                pagination={pagination}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={banner1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={banner2} alt="image2" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={banner3} alt="image3" />
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default Banner