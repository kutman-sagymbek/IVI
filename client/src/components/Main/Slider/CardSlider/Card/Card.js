import React, {useState} from "react";
import "./Card.scss";
import { BsBookmark, BsFillBookmarkCheckFill, BsMagic, BsStar, BsStarFill } from 'react-icons/bs';
import {RiDislikeLine} from 'react-icons/ri';
import {IoMdHeartDislike} from 'react-icons/io';
import { useDispatch, useSelector } from "react-redux";
// import { addToFavorites, removeFromFavorites } from "../../../../../redux/favoriteMoviesSlice";
import { loginAccount, updateFavorites } from "../../../../../redux/userSlice";

function Card({ movie }) {
    const dispatch = useDispatch();
    const favorite = useSelector((state) => state.user.favorites);
    const user = useSelector((state) => state.user.user);
    console.log(user)

    const isAddedToFavorites = user.favorites.includes(movie.id);

    const handleAddToFavorites = (event) => {
        event.stopPropagation();
        dispatch(updateFavorites(movie.id));
    };

    const handleRemoveFromFavorites = (event) => {
        event.stopPropagation();
        if (user) {
            const updatedFavorites = user.favorites.filter(id => id !== movie.id);
            dispatch(loginAccount({ ...user, favorites: updatedFavorites }));
            dispatch(updateFavorites(movie.id));
        }
    };

    const [dislike, setDislike] = useState(true);
    const handleToggleLike = () => {
        setDislike(!dislike)
    }

    return (
        <div className="movie-card">
            <img className="card-img" alt={movie.title} src={movie.poster.url} />
            <div className="shadow">
                <div className="icons">
                    {
                        isAddedToFavorites ?
                            <BsFillBookmarkCheckFill className="card-icon" onClick={handleRemoveFromFavorites} />
                            :
                            <BsBookmark className="card-icon" onClick={handleAddToFavorites} />
                    }
                    <BsMagic className='card-icon' />
                    <BsStarFill className='card-icon' />
                    {/*<BsStar className='card-icon' />*/}

                    {
                        dislike?(
                            <RiDislikeLine className='card-icon like' onClick={handleToggleLike} />
                        ) : (
                            <IoMdHeartDislike className='card-icon dislike' onClick={handleToggleLike} />
                        )
                    }

                </div>

                <div className="info">
                    <p className="rating">24</p>
                    <p className="year">{movie.name}</p>
                    <p className="country"></p>
                    <p className="genre">{movie.type}</p>
                    <p className="length">{movie.year}</p>
                </div>
            </div>

            <div className="nameOfMovie"></div>
            <div className="subscribe">Подписка</div>
        </div>
    )
}

export default Card;
