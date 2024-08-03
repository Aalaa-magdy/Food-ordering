import {Swiper,SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import '../index.css'
import {FreeMode,Pagination} from 'swiper/modules';


import swiper1 from '../assets/swiper1.avif';
import swiper2 from '../assets/swiper2.avif';
import swiper3 from '../assets/swiper3.avif';
import swiper4 from '../assets/swiper4.avif';
import swiper5 from '../assets/swiper5.avif';
import swiper6 from '../assets/swiper6.jpg';
const Slides=[
  { 
        id:1,
        image:swiper1
  },
  {
    id:2,
    image:swiper2     
  },
  {
    id:3,
    image: swiper3
  },
  {
    id:4,
    image: swiper4
  },
  {
    id:5,
    image: swiper5
  },
  {
    id:6,
    image: swiper6
  }
]
const ActiveSlider = () => {
  return (

    <div className="flex items-center justify-center flex-col h-screen bg-black">
      
        <h1 className='text-4xl font-bold text-amber-100 text-center mb-14 mt-14'>Our Trending Food</h1>
            <Swiper
               breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 10
                },
                // when window width is >= 480px
                480: {
                  slidesPerView: 2,
                  spaceBetween: 20
                },
                // when window width is >= 640px
                640: {
                  slidesPerView: 3,
                  spaceBetween: 30
                },
                // when window width is >= 1024px
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 50
                }
               }}
               autoplay={{
                delay: 3000, // Delay between transitions in milliseconds
                disableOnInteraction: false, // Do not disable autoplay on user interactions
              }}
               freeMode={true}
               loop={true}
               pagination={{
                clickable: true,
                // dynamicBullets: true,
              }}
              modules={
                 [FreeMode,Pagination]
              }
              className='max-w-[90%] ls:max-w-[80%] '
            >

              {
            
                Slides.map((item)=>(
                  <SwiperSlide key={item.id}>
                       <div className='flex flex-col gap-4  group relative text-white rounded-xl px-6 py-8 h-[250px] w-[215px] lg:h-[400px] lg:w-[350px] overflow-hidden cursor-pointer'>
                            <div className='absolute inset-0 bg-cover bg-center' 
                            style={{backgroundImage:`url(${item.image})`}}></div>
                              <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />
                              {/* <RxArrowTopRight className="absolute bottom-5 left-5 w-[35px] h-[35px] text-white group-hover:text-amber-500 group-hover:rotate-45 duration-100" /> */}
                       </div>
                  </SwiperSlide>
                ))
              }

            </Swiper>

    </div>
  )
}

export default ActiveSlider