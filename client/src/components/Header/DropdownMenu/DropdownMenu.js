import React, { useEffect, useState } from "react";
import "./DropdownMenu.scss";
import {cartoons, movies, serials} from "../links";
import { useSelector } from "react-redux";

const DropdownMenu = ({ type, setOpen }) => {
    const [current, setCurrent] = useState(null);

    const handleMenuLeave =() => {
        setOpen(null)
    }

    useEffect(() => {
        switch (type) {
            case 'movies':
                setCurrent(movies);
                break;

            case 'serials':
                setCurrent(serials);
                break;

            case 'cartoons':
                setCurrent(cartoons);
                break;

            default:
                setCurrent(null);
                break;
        }
    }, []);

    return (
        <div className="dropdown-menu" onMouseLeave={handleMenuLeave}>
            <div className="dropdown-item first">
                <h3>Жанры</h3>
                <ul className="dropdown-item-list">
                    {current && current.genres ? (
                        current.genres.map((item) => (
                            <li key={item.title}>
                                <a href={item.link}>{item.title}</a>
                            </li>
                        ))
                    ) : (
                        <li>No genres available</li>
                    )}
                </ul>
            </div>

            <div className="dropdown-item-box">
                <div className="dropdown-item">
                    <h3>Страны</h3>
                    <ul className="dropdown-item-list">
                        {current && current.countries ? (
                            current.countries.map((item) => (
                                <li key={item.title}>
                                    <a href={item.link}>{item.title}</a>
                                </li>
                            ))
                        ) : (
                            <li>No countries available</li>
                        )}
                    </ul>
                </div>

                <div className="dropdown-item">
                    <h3>Годы</h3>
                    <ul className="dropdown-item-list">
                        {current && current.years ? (
                            current.years.map((item) => (
                                <li key={item.title}>
                                    <a href={item.link}>{item.title}</a>
                                </li>
                            ))
                        ) : (
                            <li>No years available</li>
                        )}
                    </ul>
                </div>
            </div>

            <div className="dropdown-item">
                <h3>Новинки</h3>
                <ul className="dropdown-item-list">
                    {current && current.years ? (
                        current.years.map((item) => (
                            <li key={item.title}>
                                <a href={item.link}>{item.title}</a>
                            </li>
                        ))
                    ) : (
                        <li>No years available</li>
                    )}
                </ul>
            </div>
        </div>
    );
}

export default DropdownMenu;
