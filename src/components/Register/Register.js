import { Link } from 'react-router-dom';
import React from 'react';
import './Register.css';

export default function Register (props) {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    function handleEmailChange(e) {
        setName(e.target.value);
    }

    function handleNameChange(e) {
        setEmail(e.target.value);
    }

    function handlePasswordChange(e) {
        setPassword(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.onSubmit({name, email, password})
    }

    return (
        <div className="register">
            <form className="register__form " name="register-form" onSubmit={handleSubmit}>
                <span className = 'register__span'>Имя</span>
                <input id="name" name="name" type="name" className="register__input register__input_nameprof" onChange={handleNameChange} required />
                <span className = 'register__span'>E-mail</span>
                <input id="email" name="email" type="email" className="register__input" onChange={handleEmailChange} required />
                <span className = 'register__span'>Пароль</span>
                <input  id="password" name="password" type="password" className="register__input register__input_password"  onChange={handlePasswordChange} required error='Что-то пошло не так...'/>
                <span className = 'register__error'>Что-то пошло не так...</span>
                <button className="register__button" type="submit">Зарегистрироваться</button>
                <span className = 'register__login '>Уже зарегистрированы?
                <Link className="register__login_link " to="/singin">Войти</Link>
                </span>
            </form>
        </div>
    )
}
