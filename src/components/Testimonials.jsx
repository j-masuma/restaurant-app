import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import '../styles/Testimonials.css';
import { Pagination } from 'swiper/modules';

const test_info = [
  {
    image: '/images/testimonial-1.jpg',
    quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    name: 'Redds Clone',
    profession: 'Engineer'
  },
  {
    image: '/images/testimonial-2.jpg',
    quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    name: 'Redds Clone',
    profession: 'Engineer'
  },
  {
    image: '/images/testimonial-3.jpg',
    quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    name: 'Redds Clone',
    profession: 'Engineer'
  },
  {
    image: '/images/testimonial-4.jpg',
    quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    name: 'Redds Clone',
    profession: 'Engineer'
  }
];

function Testimonials() {
  return (
    <div className="tests">
      <h5 className='minitxt'>___ Testimonials ___</h5>
      <h1>Our Client Says!!!</h1>
      <Swiper
        slidesPerView={3} 
        spaceBetween={20} 
        slidesPerGroup={1}
        pagination={{ clickable: true }}
        modules={[Pagination]} 
        className="tcards-sec"
        breakpoints={{
          // Define breakpoints for screen sizes
          768: {
            slidesPerView: 3, 
          },
          0: {
            slidesPerView: 1,
          },
        }}
      >
        {test_info.map((test, index) => (
          <SwiperSlide key={index} className="test-cards">
            <img src="/icons/quote.png" width={32} height={32} alt="quote" />
            <p>{test.quote}</p>
            <div className="client">
              <img src={test.image} width={50} height={50} alt="test1" />
              <div>
                <h5>{test.name}</h5>
                <small>{test.profession}</small>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Testimonials;
