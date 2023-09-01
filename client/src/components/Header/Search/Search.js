import React from "react";
import "./Search.scss"
import { AiOutlineSearch } from 'react-icons/ai';
import Card from "../../Main/Slider/CardSlider/Card/Card";
import { BiCameraMovie } from 'react-icons/bi';

function Search ({setSearchOpen, setSearchItem, debouncedSearchValue, data = {docs: []}, error, isLoading}) {

 return (
      <div className="search-dropdown" >
          <p className="poisk">Поиск</p>
          <div className="search-block">
              <input className="search" type="text" placeholder="поиск фильмов" onChange={(event) => setSearchItem(event.target.value )}/>
                  <button type="submit" className="btn-search">
                  <AiOutlineSearch className="search-icon"/>
              </button>
          </div>

          {isLoading && <p className="error-loading">Loading...</p>}

          {error && <p className="error-loading">An error occurred: {error.message}</p>}

          {data.docs && data.docs.length > 0 && (
              <div className="movieList">
                  {data.docs.map((movie) => (
                      <p className="movieName" key={movie.id}><BiCameraMovie className="camera"/>{movie.name}</p>
                  ))}
              </div>
          )}
      </div>
 )
}

export default Search;