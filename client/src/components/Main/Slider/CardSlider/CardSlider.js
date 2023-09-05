import React from "react";
import "./CardSlider.scss";
import cartoonsImg from "../../../../img/bloodyB.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "../CardSlider/Card/Card";
import {useGetMoviesQuery} from "../../../../redux/moviesApi";
import {Link} from 'react-router-dom';

function CardSlider({title, type}) {

    const {isLoading, isSuccess, isError, data = {docs: []}} = useGetMoviesQuery(type);

    if(!data.docs.length && (isSuccess || isError)) return null;


    if(isLoading) {
        return <p>Loading...</p>
    }


    const responsive = {
        superLargeDesktop: {
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

    return (
        <section className="new-cartoons">
            <h2>{title} &#10095;</h2>
            <Carousel responsive={responsive} className="carousel3">
                {data?.docs.map((movie) => (
                        <Card movie={movie} key={movie.id} to={(e) => e.stopPropagation()}/>
                ))}
            </Carousel>;
        </section>
    )
}

export default CardSlider