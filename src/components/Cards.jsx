import React from "react";
import Card from "./Card";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";


import 'swiper/swiper-bundle.css'


const Cards = ({ data, editHandle, changeHandle, deleteHandle }) => {
  return (
    <div className="h-fit w-full bg-transparent ">
      <Swiper className="h-[350px] "
        // install Swiper modules
        modules={[Navigation, Pagination]}
        loop={true}
        spaceBetween={1}
        slidesPerView={6}
        navigation
        pagination={{ clickable: true }}
      >
        {data.map((item) => {
          return (
            <SwiperSlide>
              <Card
                key={data.id}
                values={item}
                editHandle={editHandle}
                changeHandle={changeHandle}
                deleteHandle={deleteHandle}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Cards;
