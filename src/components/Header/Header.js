import React, {useState} from "react";
import "./Header.scss";
import useSearchMovies from "./useSearchMovies";
import DropdownMenu from "./DropdownMenu/DropdownMenu";
import {Link, NavLink} from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { HiOutlineUserCircle } from 'react-icons/hi';
import {BiBell} from 'react-icons/bi';
import Search from "./Search/Search";
import {useSelector, useDispatch} from "react-redux";
import {logoutAccount} from "../../redux/userSlice";
import {useNavigate} from "react-router-dom";

const iviLogo = 'https://solea-parent.dfs.ivi.ru/picture/ea003d,ffffff/reposition_iviLogoPlateRounded.svg';


function Header() {
    const {user} = useSelector((store) => store.user)
    const { setSearchItem, debouncedSearchValue, data, error, isLoading } = useSearchMovies();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [open, setOpen] = useState(null);
    const handleMenuClick = (menuId) => {
        setOpen(menuId);
    };


    const [searchOpen, setSearchOpen] = useState(null);
    const handleSearchClick = (menuId) => {
        setSearchOpen(menuId);
    };

    const handleSearch = () => {
        setSearchItem('');
    };

    const handleSearchDropdownLeave = () => {
        setSearchOpen(null)
    }

    return (

        <div className="container">
            <header className="header">
                <nav className="nav-header">
                    <NavLink to="/" className="iviLogoBlock">
                        <img className="iviLogo" src={iviLogo} alt=''/>
                    </NavLink>
                    <ul className="list-header">
                        <li className="header-li">
                            Мой Иви
                        </li>
                        <li className="header-li">
                            Что Нового
                        </li>

                        <li className="film-list header-li" onMouseEnter={() => handleMenuClick(1)}>
                            Фильмы
                            <div className="container">
                                <div className={`dropdown-block ${open === 1 ? 'active' : 'inactive'}`}>
                                    <DropdownMenu type={'movies'} setOpen={setOpen}/>
                                </div>
                            </div>
                        </li>

                        <li className="header-li" onMouseEnter={() => handleMenuClick(2)}>
                            Сериалы

                            <div className="container">
                                <div className={`dropdown-block ${open === 2 ? 'active' : 'inactive'}`}>
                                    <DropdownMenu type={'serials'} setOpen={setOpen}/>
                                </div>
                            </div>
                        </li>

                        <li className="header-li" onMouseEnter={() => handleMenuClick(3)}>
                            Мультфильмы

                            <div className="container">
                                <div className={`dropdown-block ${open === 3? 'active' : 'inactive'}`}>
                                    <DropdownMenu type={'cartoons'} setOpen={setOpen}/>
                                </div>
                            </div>
                        </li>

                        <li className="header-li">
                            ТВ-каналы
                        </li>
                    </ul>
                </nav>


                <div className="header-right-side">
                    <button className="btn-header">Смотреть 30 дней <br/> бесплатно </button>

                    <div className="search-header" onMouseEnter={() => handleSearchClick(4)}>
                        <AiOutlineSearch className="search-icon"/>
                        <div className="poisk">Поиск</div>

                        {searchOpen && (
                            <form onSubmit={handleSearch} className="search-dropdown-block" onMouseLeave={handleSearchDropdownLeave}>
                                <Search setSearchOpen={setSearchOpen} debouncedSearchValue={debouncedSearchValue} data={data} error={error} loading={isLoading} setSearchItem={setSearchItem}/>
                            </form>
                        )}
                    </div>



                    <BiBell style={{color: 'rgba(255, 255, 255, 0.48)', width: "14.22px", height: "16px"}}/>

                    {
                        user.email.length ?
                            <p onClick={() => {
                                dispatch(logoutAccount())
                                localStorage.removeItem('user');
                                navigate('/login');
                            }}>Выйти</p>:
                            <Link to="/registration">
                                <HiOutlineUserCircle style={{color: 'rgba(255, 255, 255, 0.48)', width: "48px", height: "48px"}}/>
                            </Link>
                    }

                </div>
            </header>
        </div>
    )
}

export default Header;