import { useRef } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";

import Comment from "./Comment";

function SliderComments() {
  const swiperRef = useRef(null);

  const comments = [
    {
      text: "Анна Коваленко, основательница и главный дизайнер Bohoann, однажды рискнула и начала свой ювелирный эксперимент в стиле бохо.",
    },
    {
      text: "Оказалось, что жизненный опыт может иметь бесконечное количество воплощений в драгоценных металлах. Вот уже 12 лет мы в поиске и до сих пор обнаруживаем новые необычные интерпретации.",
    },
    {
      text: "Первые украшения мы создали в небольшой мастерской в Петербурге, а сегодня у Bohoann есть два фирменных бутика и собственное производство. ",
    },
    {
      text: "Основа изделий - это благородные металлы, натуральные камни и необычные сложные текстуры. Мы рассказываем об индивидуальности, независимой самобытности и смелости выбора.",
    },
    {
      text: "Все коллекции стилистически самостоятельные и не дадут вам заскучать - примеряйте множество эмоций одновременно!",
    },
  ];

  const breakpoints = {
    1440: {
      slidesPerView: 2.3,
      spaceBetween: 40,
      centeredSlides: false,
    },

    200: {
      slidesPerView: 1,
      centeredSlides: true,
    },
  };

  return (
    <Swiper {...{ breakpoints }} ref={swiperRef}>
      {comments.map((i) => (
        <SwiperSlide>
          <Comment text={i.text} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default SliderComments;
