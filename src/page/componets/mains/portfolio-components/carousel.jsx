import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './carousel.css';

const slides = [
    {
        title: 'Project One',
        image: 'https://picsum.photos/500/300?random=1',
        demo: '#',
        source: '#',
    },
    {
        title: 'Project Two',
        image: 'https://picsum.photos/500/300?random=2',
        demo: '#',
        source: '#',
    },
    {
        title: 'Project Three',
        image: 'https://picsum.photos/500/300?random=3',
        demo: '#',
        source: '#',
    },
    {
        title: 'Project Four',
        image: 'https://picsum.photos/500/300?random=4',
        demo: '#',
        source: '#',
    },
    {
        title: 'Project Five',
        image: 'https://picsum.photos/500/300?random=5',
        demo: '#',
        source: '#',
    },
];

const Carousel = () => {
    return (
        <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            loop={false}
            coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 3,
                slideShadows: true,
            }}
            pagination={{ clickable: true }}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"
        >
            {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                    <div className="slide-content">
                        <img src={slide.image} alt={slide.title} />
                        <div className="overlay">
                            <h3>{slide.title}</h3>
                            <div className="buttons">
                                <a href={slide.demo} target="_blank" rel="noopener noreferrer">Demo</a>
                                <a href={slide.source} target="_blank" rel="noopener noreferrer">Source Code</a>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Carousel;
