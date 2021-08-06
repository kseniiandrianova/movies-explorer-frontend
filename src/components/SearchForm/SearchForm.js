import { Link } from 'react-router-dom';
import React from 'react';
import find from '../../images/find.svg';
import './SearchForm.css';

export default function Searchform (props){
    return (
        <div className="search"> 
        <form className="search-form">
      <div className="searchform__wrapper">
        <input type="text" className="search-form__input" placeholder="Фильм" />
        <button type="submit" className="searchform__submit"><img src = { find } alt = "find" className = "find__image" /></button>
      </div>
      <div className = "filter">
      <label className="filter__label" htmlFor="checkbox">
        <input type="checkbox" id="checkbox" className="filter__input"/>
        <span className="filter__slider"></span>
      </label>
      <p className="filter__title">Короткометражки</p>
      
    </div>
    </form>
        </div>
    

    )
}