import React, {useEffect, useState} from "react";
import "./login.scss";

import {useForm} from "react-hook-form";
import {useLoginUserMutation} from "../../redux/userApi";
import {useNavigate} from "react-router-dom";
import {Link} from 'react-router-dom';




function Login() {

    const [show, setShow] = useState(false);

    const [loginUser, {data, isSuccess, isError}] = useLoginUserMutation();

    const navigate = useNavigate();

    useEffect(() => {
        if(data && data.accessToken) {
            localStorage.setItem("login", JSON.stringify({token: data.accessToken}));
            localStorage.setItem("refresh", JSON.stringify({token: data.refresh}));
            navigate('/');
        }

    }, [isSuccess, data]);

    const {
        register,
        reset,
        handleSubmit,
        formState: {
            errors
        }
    } = useForm({mode: "onBlur"});



    const onSubmit = async (loginData) => {
        await loginUser(loginData);
        // console.log(loginData)
    }




    return(
        <section className="login">

            <form onSubmit={handleSubmit(onSubmit)} noValidate className="login__form">
                <h2>Войти</h2>
                <div className="login__form-block">
                    <input {...register('email', {
                            required:{
                                message: 'Email обязательно к зопалнению',
                                value: true
                            },
                            minLength: {
                                message: 'Минимум 10 символов',
                                value: 10
                            },
                            pattern: {
                                message: 'Напишите свой эмейл правильно',
                                value: '/^[^ ]+@[^ ]+\.[a-z]{2,5}$/'
                            }
                        }

                    )} type="text" className="login__form-input" placeholder="Ведите Email"/>
                    <p className="login__form-error">
                        {errors.email && errors.email?.message}
                    </p>
                </div>

                <div className="login__form-block">
                    <input {...register('password', {
                            required:{
                                message: 'Пароль обязательно к зопалнению',
                                value: true
                            },
                            pattern: {
                                message: 'Пароль должен содержать не менее 8 символов, заглавную букву, число',
                                value: '/(?=.*[0-9](?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8})/g',
                            }
                        }

                    )} type={show? "text" : "password"} className="login__form-input" placeholder="Ведите пароль"/>
                    <p className="login__form-error">
                        {errors.password && errors.password?.message}
                    </p>
                </div>

                <label className="login__form-label">
                    <input checked={show} onChange={()=> setShow(!show)} type="checkbox" className="login__form-checkbox"/>
                    <span className="login__form-show">Показать пароль</span>
                </label>

                <div className="login__form-block">
                    <button className="login__form-btn" type={"submit"}>Войти</button>
                </div>

                <div className="login__form-block">
                    <p className="login__form-profil">Нет профиля?</p>

                    <Link to="/registration">
                        <p className="login__form-voiti">Пройдите регистрацию</p>
                    </Link>

                </div>
            </form>
        </section>
    )
}


export default Login;

