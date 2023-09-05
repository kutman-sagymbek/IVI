import React from "react";
import "./promoSlider.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import img from  "../../../img/sslider.png";
import {useGetPremierQuery} from "../../../redux/moviesApi";

function PromoSlider() {
    const {isLoading, data} = useGetPremierQuery();


    if(isLoading) {
        return <p>Loading...</p>
    }

    if(data){
        // console.log(data)
    }


    return (
        <section className="promoSlider">
            <div className="promoSlider__carousel">
                <Swiper
                    slidesPerView={1.2}
                    spaceBetween={24}
                    centeredSlides={true}
                    loop={true}
                    autoplay={{delay: 1000}}
                    navigation={true} modules={[Navigation]}
                    className="mySwiper">


                            {/*{data?.docs.map((item) => (*/}
                            {/*    <SwiperSlide key={item.id}>*/}
                            {/*        <img src={item.poster?.url} alt={item.name}/>*/}
                            {/*        <button className="btnSwiperSlide">Смотреть бесплатно</button>*/}
                            {/*    </SwiperSlide>*/}
                            {/*))}*/}



                        <SwiperSlide>
                            <img src={img} alt=""/>
                            <button className="btnSwiperSlide">Смотреть бесплатно</button>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={img} alt=""/>
                            <button className="btnSwiperSlide">Смотреть бесплатно</button>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={img} alt=""/>
                            <button className="btnSwiperSlide">Смотреть бесплатно</button>
                        </SwiperSlide>
                    <SwiperSlide>
                        <img src={img} alt=""/>
                        <button className="btnSwiperSlide">Смотреть бесплатно</button>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img} alt=""/>
                        <button className="btnSwiperSlide">Смотреть бесплатно</button>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img} alt=""/>
                        <button className="btnSwiperSlide">Смотреть бесплатно</button>
                    </SwiperSlide>


                </Swiper>

                <div className="btn-block">
                    <button className="btn-30days-free">
                        &#9889;
                        30 дней подписки бесплатно
                    </button>
                </div>
            </div>
        </section>
    )
}

export default PromoSlider;