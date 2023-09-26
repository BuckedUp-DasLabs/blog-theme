import s from "./Banner.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useRef } from "react";
import ArrowLeftIcon from "../ui/ArrowLeftIcon";
import ArrowRightIcon from "../ui/ArrowRightIcon";
import TitleContainer from "./TitleContainer";
import ImageComponent from "../ui/ImageComponent";
const slides = [
  { src: "/blog.jpg", href: "/", category: "Health & Wellness", title: "Lorem ipsum dolor, sit amet consectetur adipisicing" },
  { src: "/blog.jpg", href: "/", category: "Health & Wellness", title: "Lorem ipsum dolor, sit amet consectetur adipisicing" },
  { src: "/blog.jpg", href: "/", category: "Health & Wellness", title: "Lorem ipsum dolor, sit amet consectetur adipisicing" },
  { src: "/blog.jpg", href: "/", category: "Health & Wellness", title: "Lorem ipsum dolor, sit amet consectetur adipisicing" },
  { src: "/blog.jpg", href: "/", category: "Health & Wellness", title: "Lorem ipsum dolor, sit amet consectetur adipisicing" },
  { src: "/blog.jpg", href: "/", category: "Health & Wellness", title: "Lorem ipsum dolor, sit amet consectetur adipisicing" },
  { src: "/blog.jpg", href: "/", category: "Health & Wellness", title: "Lorem ipsum dolor, sit amet consectetur adipisicing" },
  { src: "/blog.jpg", href: "/", category: "Health & Wellness", title: "Lorem ipsum dolor, sit amet consectetur adipisicing" },
  { src: "/blog.jpg", href: "/", category: "Health & Wellness", title: "Lorem ipsum dolor, sit amet consectetur adipisicing" },
  { src: "/blog.jpg", href: "/", category: "Health & Wellness", title: "Lorem ipsum dolor, sit amet consectetur adipisicing" },
  { src: "/blog.jpg", href: "/", category: "Health & Wellness", title: "Lorem ipsum dolor, sit amet consectetur adipisicing" },
  { src: "/blog.jpg", href: "/", category: "Health & Wellness", title: "Lorem ipsum dolor, sit amet consectetur adipisicing" },
  { src: "/blog.jpg", href: "/", category: "Health & Wellness", title: "Lorem ipsum dolor, sit amet consectetur adipisicing" },
  { src: "/blog.jpg", href: "/", category: "Health & Wellness", title: "Lorem ipsum dolor, sit amet consectetur adipisicing" },
  { src: "/blog.jpg", href: "/", category: "Health & Wellness", title: "Lorem ipsum dolor, sit amet consectetur adipisicing" },
  { src: "/blog.jpg", href: "/", category: "Health & Wellness", title: "Lorem ipsum dolor, sit amet consectetur adipisicing" },
];

const Banner = (props) => {
  const mainSwiperRef = useRef();
  const textSwiperRef = useRef();
  const handleNext = () => {
    mainSwiperRef.current?.swiper.slideNext(500)
    textSwiperRef.current?.swiper.slideNext(500)
  }
  const handlePrev = () => {
    mainSwiperRef.current?.swiper.slidePrev(500)
    textSwiperRef.current?.swiper.slidePrev(500)
  }
  return (
    <section className={s.banner}>
      <Swiper
        ref={mainSwiperRef}
        slidesPerView={1}
        centeredSlides={true}
        loop={true}
        spaceBetween={16}
        speed={500}
        allowTouchMove={false}
        className={s.banner__swiper}
        breakpoints={{
          700: {
            slidesPerView: 2.6,
          },
        }}
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <a href={slide.href}>
              <ImageComponent
                src={slide.src}
                alt={slide.title}
                width="728"
                height="599"
              />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={s.banner__textSwiperContainer}>
        <button type="button" className={s.swiperPrev} onClick={handlePrev}>
          <ArrowLeftIcon />
        </button>
        <Swiper
          ref={textSwiperRef}
          slidesPerView={1}
          loop={true}
          speed={500}
          allowTouchMove={false}
          className={s.banner__textSwiper}
        >
          {slides.map((slide, i) => (
            <SwiperSlide key={i}>
              <TitleContainer category={slide.category} title={slide.title} />
            </SwiperSlide>
          ))}
        </Swiper>
        <button type="button" className={s.swiperNext} onClick={handleNext}>
          <ArrowRightIcon />
        </button>
      </div>
    </section>
  );
};

export default Banner;
