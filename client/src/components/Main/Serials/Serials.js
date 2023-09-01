import React from "react";
import "./Serials.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import cartoonsImg from "../../../img/bloodyB.png";
import serial from "../../../img/serial.png"


function Serials () {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 7
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 7
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 5
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 3
        }
    };

    return(
        <section className="new-cartoons">
            <h2>Зарубежные сериалы &#10095;</h2>
            <Carousel responsive={responsive} className="carousel4">
                <div className="movie-box">
                    <img src={serial} alt=""/>
                    <div className="nameOfserial">Ничто не случается дважды</div>
                    <div className="subscribe">Подписка</div>
                </div>
                <div className="movie-box">
                    <img src={serial} alt=""/>
                    <div className="nameOfserial">Ничто не случается дважды</div>
                    <div className="subscribe">Подписка</div>
                </div>
                <div className="movie-box">
                    <img src={serial} alt=""/>
                    <div className="nameOfserial">Ничто не случается дважды</div>
                    <div className="subscribe">Подписка</div>
                </div>
                <div className="movie-box">
                    <img src={serial} alt=""/>
                    <div className="nameOfserial">Ничто не случается дважды</div>
                    <div className="subscribe">Подписка</div>
                </div>
                <div className="movie-box">
                    <img src={serial} alt=""/>
                    <div className="nameOfserial">Ничто не случается дважды</div>
                    <div className="subscribe">Подписка</div>
                </div>
                <div className="movie-box">
                    <img src={serial} alt=""/>
                    <div className="nameOfserial">Ничто не случается дважды</div>
                    <div className="subscribe">Подписка</div>
                </div>
                <div className="movie-box">
                    <img src={serial} alt=""/>
                    <div className="nameOfserial">Ничто не случается дважды</div>
                    <div className="subscribe">Подписка</div>
                </div>
                <div className="movie-box">
                    <img src={serial} alt=""/>
                    <div className="nameOfserial">Танцы в темноте</div>
                    <div className="subscribe">Подписка</div>
                </div>
                <div className="movie-box">
                    <img src={serial} alt=""/>
                    <div className="nameOfserial">Танцы в темноте</div>
                    <div className="subscribe">Подписка</div>
                </div>
            </Carousel>;
        </section>
    )
}

export default Serials;