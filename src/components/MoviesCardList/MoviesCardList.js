import React from 'react';
// import { useEffect, useState } from 'react';
import { Switch, Route} from 'react-router-dom';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import MoreButton from '../MoreButton/MoreButton';
import SavedMovies from '../SavedMovies/SavedMovies';

// export default function MoviesCardList({ pathname }) {
//   const [movies, setMovies] = useState([]);

//   useEffect(() => {
//     setMovies(JSON.parse(localStorage.getItem('movies')));
//   }, []);
  
//   return (
//     <section className='movie-list'>
//       <div className='movie-list__wrapper'>
//         {movies.map((movie) => (
//           <MoviesCard key={movie.id} pathname={pathname} movie={movie} />
//         ))}
//       </div>
//       {pathname === '/movies' && <MoreButton />}
//     </section>
//   );
// }


export default function MoviesCardList(props, card) {

  return (
    <section className= "movies-list">
        <Switch>
    <Route exact path = "/movies">
      <MoviesCard  />
    </Route>
    <Route exact path = "/saved-movies">
      <SavedMovies  />
    </Route>
    </Switch>
    <MoreButton />
    {/* <div className = "movies__more">
       <button className = "movies__btn ">Ещё</button>
    </div> */}
  </section>
  );
}