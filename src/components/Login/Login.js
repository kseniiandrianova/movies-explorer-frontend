import { Link } from 'react-router-dom';
import React from 'react';
import './Login.css';

export default function Login (props){
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    function handleEmailChange(e) {
        setEmail(e.target.value);
    }

    function handlePasswordChange(e) {
        setPassword(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.onSubmit({email, password})
    }


    return (
        <div className="login">
            <form className="login__form " name="login-form" onSubmit={handleSubmit}>
                <span className = "login__span">E-mail</span>
                <input id="email" name="email" type="email" className="login__input"  onChange={handleEmailChange} required />
                <span className = "login__span">Пароль</span>
                <input  id="password" name="password" type="password" className="login__input login__input_password" onChange={handlePasswordChange} required />
                <button className="login__button" type="submit">Войти</button>
                <span className = "register__login ">Ещё не зарегистрированы?
                <Link className="register__login_link " to="/signup">Регистрация</Link>
                </span>
            </form>
        </div>
    )
}