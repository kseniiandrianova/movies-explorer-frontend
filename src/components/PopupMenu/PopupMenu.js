import {React}  from 'react';
import { Link } from 'react-router-dom';
import './PopupMenu.css';
import profile from '../../images/profile.svg';
import close from '../../images/close-icon.svg';

export default function PopupMenu ({ isOpen, onClose}){
    return (
        <div className="movies">
            <div className = {`popup ${isOpen}`}>
              <div className = "popup__container">
                <button type = "button" onClick = {onClose} className = "popup__close-btn"><img src = { close } alt = 'close-btn' className = 'popup__close' /></button>
              <div className = 'popup__container-links'>
            <div className = 'popup__links'>
              <Link to = '/' className = 'popup__link'>Главная</Link>
              <Link to = '/movies' className = 'popup__link'>Фильмы</Link>
              <Link to = '/saved-movies' className = 'popup__link'>Сохраненные фильмы</Link>
            </div>
              <button type = 'button' className = 'popup__profile-btn'><img src = { profile } alt = 'profile' className = 'popup__profile' /></button>
              </div>
              </div>
            </div>
        </div>
    )
}