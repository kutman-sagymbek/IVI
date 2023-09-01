import React from "react";
import "./Slider.scss";
import CardSlider from "./CardSlider/CardSlider";
import Description from "../Description/Description";
import Serials from "../Serials/Serials";
import FavoriteMoviesSlider from "./FavoriteMoviesSlider/FavoriteMoviesSlider";


function Slider () {

    return(
        <>
            <FavoriteMoviesSlider title="Смотреть позже"/>
            <CardSlider title="Современные мультфильмы" type="cartoon"/>
            <CardSlider title="Сериалы" type="tv-series"/>
            <CardSlider title="Фильмы"  type="movie"/>
            <Description/>
            {/*<Serials/>*/}
            <CardSlider title="Аниме"  type="anime"/>
        </>

    )
}

export default Slider;