import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Scrollbar } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/scrollbar'

import './Tips.css'

function Tips() {
  const BreakPoint = {
    475: {
      slidesPerView: 1,
    },
    700: {
      slidesPerView: 2,
    },
  };

  return (
    <div>
      <div className="tips-section">
      <h2 className="tips-section-title">Tips and Tricks</h2>
<Swiper
        scrollbar={{
          hide: false,
        }}
        modules={[Scrollbar]}
        spaceBetween={0}
        breakpoints={BreakPoint}
        className={"mySwiper"}
      >
        <SwiperSlide>
            <div className="tips">
                <img src="./assets/blog_01.jpg" alt=""/>
                <button className="tips-button">Watch<span><ion-icon name="eye-outline"></ion-icon></span></button>
                <h4>What is easier knitting or crocheting?</h4>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="tips">
                <img src="./assets/blog_02.jpg" alt=""/>
                <button className="tips-button">Watch<span><ion-icon name="eye-outline"></ion-icon></span></button>
                <h4>Properly wear a hoodie</h4>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="tips">
                <img src="./assets/blog_03.jpg" alt=""/>
                <button className="tips-button">Watch<span><ion-icon name="eye-outline"></ion-icon></span></button>
                <h4>What should i wear under a sweater?</h4>
            </div>
        </SwiperSlide>
</Swiper>
      </div>
</div>
  )
}

export default Tips