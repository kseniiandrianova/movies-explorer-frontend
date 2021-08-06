import { Link, Route, Switch } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
    return (
        <Switch>
          <Route exact path = "/">
            <div className = "footer">
              <h2 className = "footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
              <div className = "footer__container">
                <p className = "footer__date">&copy; 2021</p>
                <div className = "footer__links">
                <Link href = "#" className = "footer__link">Яндекс.Практикум</Link>
                <Link href = "#" className = "footer__link">Github</Link>
                <Link href = "#" className = "footer__link">Facebook</Link>
                </div>
              </div>
            </div>
          </Route>
          <Route path = "/movies">
            <div className = "footer">
              <h2 className = "footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
              <div className = "footer__container">
                <p className = "footer__date">&copy; 2021</p>
                <div className = "footer__links">
                <Link href = "#" className = "footer__link">Яндекс.Практикум</Link>
                <Link href = "#" className = "footer__link">Github</Link>
                <Link href = "#" className = "footer__link">Facebook</Link>
                </div>
              </div>
            </div>
          </Route>
          <Route path = "/saved-movies">
            <div className = "footer">
              <h2 className = "footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
              <div className = "footer__container">
                <p className = "footer__date">&copy; 2021</p>
                <div className = "footer__links">
                <Link href = "#" className = "footer__link">Яндекс.Практикум</Link>
                <Link href = "#" className = "footer__link">Github</Link>
                <Link href = "#" className = "footer__link">Facebook</Link>
                </div>
              </div>
            </div>
          </Route>
          <Route path = "/signup">
          </Route>
          <Route path = "/signin">
          </Route>
        </Switch>
        
      );
}