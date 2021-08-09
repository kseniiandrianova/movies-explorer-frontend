import './SavedMovies.css';
import film from '../../images/film-pic.svg';



export default function MoviesCardList(props, pathname) {
    const imageUrl = 'https://api.nomoreparties.co';

    function handleDeleteClick() {
        props.onCardDelete(props.card)
    }

    return (
      <article className= "movie"> 
      <div className="movie__note">
        <div>
        <h3 className="movie__title">{props.name} 33 несчастья</h3>
        <span className="movie__time">{props.time}45  минут</span>
        </div>
        <button type="button" className = "movie__delete" onClick = {handleDeleteClick} >
      </button>
      </div>
      <img
        className="movie__image"
        src={film}
        alt={props.name}
      />
          
    </article>
    );
  }