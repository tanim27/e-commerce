import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/scrollbar';
import "./Tips.css";

export default function Tips() {
  const BreakPoint = {
    475: {
      slidesPerView: 1,
    },
    700: {
      slidesPerView: 2,
    },
  };

  return (
    <>
<h2>Tips and Tricks</h2>
<Swiper
        scrollbar={{
          hide: false,
        }}
        modules={[Scrollbar]}
        spaceBetween={0}
        breakpoints={BreakPoint}
        className={"mySwiper"}
      >
    <div className="tips">
        <SwiperSlide>
            <div className="single-tip">
                <img src="./assets/blog_01.jpg" alt=""/>
                <a href="">Watch<span><ion-icon name="eye-outline"></ion-icon></span></a>
                <h4>What is easier knitting or crocheting?</h4>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="single-tip">
                <img src="./assets/blog_02.jpg" alt=""/>
                <a href="">Watch<span><ion-icon name="eye-outline"></ion-icon></span></a>
                <h4>Properly wear a hoodie</h4>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="single-tip">
                <img src="./assets/blog_03.jpg" alt=""/>
                <a href="">Watch<span><ion-icon name="eye-outline"></ion-icon></span></a>
                <h4>What should i wear under a sweater?</h4>
            </div>
        </SwiperSlide>
    </div>
</Swiper>
</>
  );
}

