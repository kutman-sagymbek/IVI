import React from "react";
import "./FavoriteMoviesSlider.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useSelector, useDispatch } from "react-redux";

import FavoriteCard from "./FavoriteCard";

const FavoriteMoviesSlider = ({ title }) => {
    const { favorites = [] } = useSelector((state) => state.user);
    console.log(favorites);

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 7,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 7,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 5,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 3,
        },
    };

    if(favorites.length === 0) return null;

    return (
        <section className="movie-cart">
            <h2>{title} &#10095;</h2>
            <Carousel responsive={responsive} className="carousel5">
                {favorites.map((movieId) => (
                    <FavoriteCard movieId={movieId}/>
                ))}
            </Carousel>
        </section>
    );
};

export default FavoriteMoviesSlider;
