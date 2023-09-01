import { MdOutlineDeleteForever } from "react-icons/md";
import {useGetMovieQuery} from  "../../../../redux/moviesApi"
import {useDispatch} from "react-redux";
import {updateFavorites} from "../../../../redux/userSlice";

const FavoriteCard = ({movieId}) => {
    const {data: favoriteMovie} = useGetMovieQuery(movieId);
    const dispatch = useDispatch();

    const handleRemoveFromFavorites = (itemToRemove) => {
        dispatch(updateFavorites(itemToRemove));
    };

    if(!favoriteMovie) return null;
    return (
        <div className="movie-card">
            <img
                className="card-img"
                src={favoriteMovie.poster.url}
                alt={favoriteMovie.name}
            />
            <div className="favorite-desc">
                <p className="favorite-name">{favoriteMovie.name}</p>
                <p className="favorite-year">
                    {favoriteMovie.year} , {favoriteMovie.type}
                </p>
                <div className="remove-favorite-box">
                    <MdOutlineDeleteForever
                        className="remove-favorite"
                        onClick={() => handleRemoveFromFavorites(movieId)}
                    />
                </div>
                <p className="subscribe">Подписка</p>
            </div>
        </div>
    );
};

export default FavoriteCard;