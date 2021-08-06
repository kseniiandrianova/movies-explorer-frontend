import React from 'react';
import './MoviesCard.css';
import film from '../../images/film-pic.svg';



export default function MoviesCardList(props) {
    const imageUrl = 'https://api.nomoreparties.co/beatfilm-movies';
    const isLiked = 'element__like';
    const cardLikeButtonClassName = `element__like ${isLiked ? 'element__like_active' : ''}`;

    return (
      <article >
        <div className= "movie">
        <div className="movie__note">
        <div>
        <h3 className="movie__title">{props.name} 33 несчастья</h3>
        <span className="movie__time">{props.time}45  минут</span>
        </div>
        <button type="button" className={cardLikeButtonClassName} onClick = { props.isLiked } >
        </button>
      </div>
      <img className="movie__image" src={film} alt={props.name}/>
          
        </div>
        <div className= "movie">
        <div className="movie__note">
        <div>
        <h3 className="movie__title">{props.name} 33 несчастья</h3>
        <span className="movie__time">{props.time}45  минут</span>
        </div>
        <button type="button" className={cardLikeButtonClassName} onClick = { props.isLiked } >
        </button>
      </div>
      <img className="movie__image" src={film} alt={props.name}/>
          
        </div>
      
    </article>
    
    );
  }