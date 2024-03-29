import React from "react";
import { NewProductsData } from "./../../LocalStorage/AllProductDetails";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import Card from "./Card";
import "./NewProducts.css";

function NewProducts() {
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
    1000: {
      slidesPerView: 4,
    },
  };

  return (
    <div>
      <div className="wrapper">
      <h2 className="new-arrival-heading">New Arrivals</h2>
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          spaceBetween={0}
          breakpoints={BreakPoint}
          className="mySwiper"
        >
          {NewProductsData.map((product) => (
            <SwiperSlide>
              <div className="container">
                <Card key={product.id} {...product} product={product} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default NewProducts;
