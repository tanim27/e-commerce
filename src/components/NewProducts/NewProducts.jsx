import React from 'react'
import { NewProductsData } from './../../LocalStorage/AllProductDetails'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/pagination'

import Card from './Card'
import './NewProducts.css'

function NewProducts () {

    const BreakPoint = {
        500: {
          slidesPerView: 1,
        },
        600: {
          slidesPerView: 2,
        },
        900: {
          slidesPerView: 3,
        },
      }

  return (
    <>
    <h2 className="new-arrival-heading">New Arrivals</h2>
    
    <div className="wrapper">
    <div className="manual-swiper">
      <button className="manual-buttons" ><ion-icon name="arrow-back-outline"></ion-icon></button>
      <button className="manual-buttons" ><ion-icon name="arrow-forward-outline"></ion-icon></button> 
    </div>
    <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        spaceBetween={20}
        breakpoints={BreakPoint}
        className="mySwiper"
      > 
      
      {NewProductsData.map(product => (
        <SwiperSlide>
          <div className="container">
            <Card key={product.id} {...product} product={product}/>
          </div>
        </SwiperSlide>
      ))}
      
    </Swiper>
    </div>
    </>
  )
}


export default NewProducts