import { Link } from 'react-router-dom';
import React from 'react';
import './ProfileForm.css';


export default function ProfileForm (props){
    const [email, setEmail] = React.useState('');
    const [name, setName] = React.useState('');

    function handleEmailChange(e) {
        setEmail(e.target.value);
    }

    function handleNameChange(e) {
        setName(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.onSubmit({name, email})
    }


    return (
        <section className="profile">
            <form className="profile__form " name="login-form" onSubmit={handleSubmit}>
            <h2 className="profile__title">Привет, Ксения!</h2>
            <span className = "profile__span">Имя
            <input  id="name" name="nema" type="name" className="profile__input" onChange={handleNameChange} required />
            </span>
            
            <span className = "profile__span">E-mail
            <input id="email" name="email" type="email" className="profile__input"  onChange={handleEmailChange} required />
            </span>
            
            <button className="profile__button" type="submit">Редактировать</button>
            <Link className="profile__logout_link " to="/signup">Выйти из аккаунта</Link>
            </form>
            
        </section>
    )
}