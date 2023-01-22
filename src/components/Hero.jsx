import React from "react";
import "../style/style.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFade } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import 'swiper/css/pagination';
import image1 from "../assets/image/bg.jpg";
import image2 from "../assets/image/about-bg.jpg";

const Hero = () => {
  return (
    <div className="home">
      <Swiper
        modules={[Navigation, Pagination, EffectFade]}
        navigation
        effect
        speed={800}
        pagination={{ clickable: true }}
        slidesPerView={1}
        loop
        className="myswiper"
      >
        <SwiperSlide style={{ backgroundImage : `url(${image1})` }} className="slide">
            <h3>THIS IS A PLACE WHERE TECHNOLOGY & CREATIVITY FUSED INTO DIGITAL CHEMISTRY</h3>
        </SwiperSlide>
        <SwiperSlide style={{ backgroundImage : `url(${image2})` }} className="slide">
            <h3>WE DON'T HAVE THE BEST BUT WE HAVE THE GREATEST TEAM</h3>
        </SwiperSlide>

      </Swiper>
    </div>
  );
};
export default Hero;
