import React, { useState, useEffect } from "react";
import { dataRef } from "../App";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {
  Navigation,
  Pagination,
  Scrollbar,
  Autoplay,
  Keyboard,
  Mousewheel,
} from "swiper/modules";

import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import CarousalCard from "./CarousalCard";

function Carousal() {
  const [loaded, setLoaded] = useState(false);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    if (dataRef?.current?.articles) {
      setArticles(dataRef.current.articles);
      setLoaded(true);
    }
  }, []);

  return (
    
    <div className="w-full h-full flex flex-col justify-center items-center overflow-x-hidden"> 
      <div className=" text-center dark:text-white mt-3 font-bold text-5xl md:text-5xl mb-5 tracking-wider font-serif"><h1><span className="text-red-500" >Head</span>Lines</h1></div>
      {loaded ? (
        
        <Swiper
        className="w-full overflow-hidden overflow-x-hidden flex justify-center items-center"
          modules={[
            Navigation,
            Pagination,
            Scrollbar,
            Autoplay,
            Keyboard,
            Mousewheel,
          ]} 
          spaceBetween={20}
          slidesPerView={1}
          navigation 
          pagination={{ clickable: true }} 
          scrollbar={{ draggable: true }}
          autoplay={{
            delay: 3000, 
            disableOnInteraction: false, 
          }}
          keyboard={{ enabled: true }}
          mousewheel={true}
          breakpoints={{
            0: {slidesPerView:1, spaceBetween: 10},
            640: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 30 },
            1024: { slidesPerView: 3, spaceBetween: 40 },
          }}
          onSlideChange={() => console.log("Slide changed")}
          onSwiper={(swiper) => console.log("Swiper instance:", swiper)}
        >
          <SwiperSlide className="flex justify-center items-center w-full"><CarousalCard data={articles[0]} /></SwiperSlide>
          <SwiperSlide className="flex justify-center items-center w-full"><CarousalCard data={articles[1]} /></SwiperSlide>
          <SwiperSlide className="flex justify-center items-center w-full"><CarousalCard data={articles[2]} /></SwiperSlide>
          <SwiperSlide className="flex justify-center items-center w-full"><CarousalCard data={articles[3]} /></SwiperSlide>
          <SwiperSlide className="flex justify-center items-center w-full"><CarousalCard data={articles[4]} /></SwiperSlide>
          <SwiperSlide className="flex justify-center items-center w-full"><CarousalCard data={articles[5]} /></SwiperSlide>
          <SwiperSlide className="flex justify-center items-center w-full"><CarousalCard data={articles[6]} /></SwiperSlide>
          <SwiperSlide className="flex justify-center items-center w-full"><CarousalCard data={articles[7]} /></SwiperSlide>
          <SwiperSlide className="flex justify-center items-center w-full"><CarousalCard data={articles[8]} /></SwiperSlide>
          <SwiperSlide className="flex justify-center items-center w-full"><CarousalCard data={articles[9]} /></SwiperSlide>

          
        </Swiper>
      ) : (
        <p>Loading carousel...</p>
      )}
    </div>
  );
}

export default Carousal;
