import {React, Suspense }  from 'react';
import { Link } from 'react-router-dom';
import './Movies.css';
import Searchform from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import profile from '../../images/profile.svg';
import close from '../../images/delete.svg';



export default function Movies ({ isOpen, onClose}){

    return (
        <div className="movies">
            <div className="movies">
            <div className = {`popup ${isOpen}`}>
              <div className = "popup__container">
                <button type = "button" onClick = {onClose} className = "popup__close-btn"><img src = { close } alt = "close-btn" className = "popup__close" /></button>
              <div className = "popup__container-links">
            <div className = "popup__links">
              <Link to = "/" className = "popup__link">Главная</Link>
              <Link to = "/movies" className = "popup__link">Фильмы</Link>
              <Link to = "/saved-movies" className = "popup__link">Сохраненные фильмы</Link>
            </div>
              <Link to="/profile" className = "popup__profile-btn"><img src = { profile } alt = "Профиль" className = "popup__profile" /></Link>
              </div>
              </div>
            </div>
        </div>
            <Searchform />
            <Suspense fallback={<Preloader />}>
           <MoviesCardList/>
            </Suspense>
        </div>
    )
}