// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Slide from './Slide';
export default function Carosol() {
  return (
    <div className="container w-full py-5 mx-auto">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Slide
            image="https://i.ibb.co.com/dtZdw8d/girl-2771936-1280.jpg"
            text="Get Your Web Development Projects Done in minutes"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image="https://i.ibb.co.com/1MBB9X8/istockphoto-1305349522-1024x1024.jpg"
            text="Get Your Graphics Design Projects Done in minutes"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image="https://i.ibb.co.com/WkCbPxC/istockphoto-2061200156-1024x1024.jpg"
            text="Start Your Digital Marketing Campaigns up n running"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
