import React, {useEffect, useState} from "react";
import "./registration.scss";
import {useForm} from "react-hook-form";
import InputMask from "react-input-mask";
import {useRegisterUserMutation} from "../../redux/userApi";
import {Link} from 'react-router-dom';

const Registration =() =>{

    const [show, setShow] = useState(false);
    const [registerUser, { isLoading, isError, error }] = useRegisterUserMutation();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm({ mode: "onBlur" });

    const onSubmit = async (registerData) => {
        try {
            await registerUser({ ...registerData, favorites: [] });
            reset();
        } catch (error) {
            console.error("Registration error:", error);
        }
    };

    return(
        <section className="login">

                <form onSubmit={handleSubmit(onSubmit)} noValidate className="login__form">
                    <h2>Регистрация</h2>
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
                        <input {...register('login', {
                                required:{
                                    message: 'Логин обязательно к заполнению',
                                    value: true
                                },
                                minLength: {
                                    value: 3,
                                    message: 'Минимум 3 символа'
                                }
                            }

                        )} type="text" className="login__form-input" placeholder="Введите логин"/>

                        <p className="login__form-error">
                            {errors.login && errors.login?.message}
                        </p>
                    </div>
                    <div className="login__form-block">
                        <InputMask mask={`+\\9\\96(999)99-99-99`} type='tel' {...register('phone', {
                            required: {
                                value: true,
                                message: 'Это поле обязательное'
                            },
                            pattern: {
                                value: '/^\+996\(\d{3}\)\d{2}-\d{2}-\d{2}$/',
                                message: 'Заполните номер телефона'
                            }
                        })} className={`login__form-input`} placeholder='Номер телефона'/>
                        <p className="login__form-error">
                            {errors.phone && errors.phone?.message}
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
                        <button className="login__form-btn" type={"submit"}>Зарегистрироваться</button>
                    </div>

                    <div className="login__form-block">
                        <p className="login__form-profil">Уже есть профиля?</p>

                        <Link to="/login">
                            <p className="login__form-voiti">Войти</p>
                        </Link>
                    </div>
                </form>
        </section>
    )


}

export default Registration;