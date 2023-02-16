import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import SliderWhiteArrows from "../SliderWhiteArrows";

import module from './style.module.scss'

import svg1 from './assets/1.svg'
import svg2 from './assets/2.svg'
import svg3 from './assets/3.svg'
import svg4 from './assets/4.svg'
import svg5 from './assets/5.svg'
import svg6 from './assets/6.svg'
import svg7 from './assets/7.svg'
import svg8 from './assets/8.svg'
import svg9 from './assets/9.svg'
import svg10 from './assets/10.svg'
import svg11 from './assets/11.svg'
import svg12 from './assets/12.svg'
import svg13 from './assets/13.svg'

function CollectionsSlider() {
    const collections = [
        {
            title: "brilliance",
            img: svg1
        },
        {
            title: "tropics",
            img: svg2
        },
        {
            title: "woman",
            img: svg3
        },
        {
            title: "balance",
            img: svg4
        },
        {
            title: "nimbus",
            img: svg5
        },
        {
            title: "museum",
            img: svg6
        },
        {
            title: "base",
            img: svg7
        },
        {
            title: "petra",
            img: svg8
        },
        {
            title: "zodiak",
            img: svg9
        },
        {
            title: "chains",
            img: svg10
        },
        {
            title: "кольца-столбы",
            img: svg11
        },
        {
            title: "hypnosis",
            img: svg12
        },
        {
            title: "энигма",
            img: svg13
        },
    ]

    return ( 
        <SliderWhiteArrows>
            {collections.map((i, index) => (
                <SwiperSlide key={index} className={module.collection}>
                    <img src={i.img} alt="" />
                    <h3>{i.title}</h3>
                </SwiperSlide>
            ))}
        </SliderWhiteArrows>
     );
}

export default CollectionsSlider;