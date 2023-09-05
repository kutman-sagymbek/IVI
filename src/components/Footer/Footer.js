import React from "react";
import "./Footer.scss";
import footerWidget from "../../img/footer-widget2-icon.png";
import {AiOutlinePhone} from 'react-icons/ai';
import {FiMail} from 'react-icons/fi';

function Footer () {

    return(
        <div className="container">
            <footer className="footer">
                <div className="footer-1">
                    <div className="about-us">
                        <ul className="about-us-list">
                            <li className="footer-title">О нас</li>
                            <li>О компании</li>
                            <li>Вакансии</li>
                            <li>Программа бета-тестирования</li>
                            <li>Размещение рекламы</li>
                            <li>Пользовательское соглашение</li>
                            <li>Политика конфиденциальности</li>
                            <li>Комплаенс</li>
                        </ul>
                    </div>
                    <div className="parts">
                        <ul className="parts-list">
                            <li className="footer-title">Разделы</li>
                            <li>Мой Иви</li>
                            <li>Что нового</li>
                            <li>Фильмы</li>
                            <li>Сериалы</li>
                            <li>Мультфильмы</li>
                            <li>Что посмотреть</li>
                            <li className="activation">Активация сертификата</li>
                        </ul>
                    </div>
                    <div className="support">
                        <div className="footer-title">Служба поддержки</div>
                        <div>Мы всегда готовы вам помочь.</div>
                        <div>Наши операторы онлайн 24/7</div>
                        <button className="btn-chat">Написать в чате</button>
                        <div className="contact-us">
                            <button className="btn-mail"><FiMail/></button>
                            <button className="btn-phone"><AiOutlinePhone/></button>
                        </div>
                        <div className="ask-ivi">ask.ivi.ru</div>
                    </div>
                    <div className="watch-without-ads">
                        <div className="footer-widget"><img src={footerWidget}/></div>
                        <div className="footer-widget-text">Смотрите фильмы, сериалы и <br/>
                            мультфильмы без рекламы</div>
                    </div>
                </div>
                <div className="footer-2"></div>
            </footer>
        </div>
    )
}

export default Footer;