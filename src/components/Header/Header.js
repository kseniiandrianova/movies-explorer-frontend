import logo from '../../images/logo.svg';
import profile from '../../images/profile.svg';
import { Link, Route, Switch } from 'react-router-dom';
import './Header.css';
import menu from '../../images/menu.svg';


export default function Header({ onMenu, isMenuIcon, isOpen, onClose}) {
    return (
            <Switch> 
                <Route exact path = "/">
                    <header className = "header">
                        <div className = "header__container">
                            <Link to = "/"><img src={ logo } alt = "Логотип" className="header__logo" /></Link>
                            <div className="header__main">
                                <Link to = "/signup" className = "header__register">Регистрация</Link>
                                <Link to = "/signin" className = "header__login header__login_btn" >Войти</Link>
                            </div>
                        </div>
            </header>
                </Route>
                <Route exact path = "/signin">
                    <div className = "header__form">
                        <div className = "header__container-login">
                            <Link to = "/"><img src={ logo } alt = "Логотип" className = "header__logo_login"/></Link>
                            <Link to = "/signup" className = "header__link">Регистрация</Link>
                            <h2 className = "header__title_login">Рады видеть!</h2>
                        </div>
                    </div>
                </Route>
                <Route exact path="/signup">
                    <div className="header__form">
                        <div className="header__container-register">
                            <Link to = "/"><img src={ logo } alt = "Логотип" className="header__logo_register"/></Link>
                            <Link to="/signin" className="header__link">Войти</Link>
                            <h2 className = "header__title_register">Добро пожаловать!</h2>
                        </div>
                    </div>
                </Route>
                <Route exact path = "/profile">
                    <div className = "header__form">
                        <div className = "header__container-profile">
                        <Link to = '/'><img src={ logo } alt = "Логотип" className = "header__logo-profile" /></Link>
                        <div className="header__profile">
                        <Link to = "/movies" className = "header__link-profile">Фильмы</Link>
                        <Link to = "/saved-movies" className = "header__link-profile">Сохраненные фильмы</Link>
                        </div>
                        <div>
                        <Link to = "/profile"><img src={ profile } alt = "Профиль" className="header__profile-btn" /></Link>
                        </div>
                        <button type="button" onClick={onMenu} className={`header__button-menu ${isMenuIcon}`}><img src={menu} alt='Меню' className = 'header__popup-menu'/></button>
                        </div>
                    </div>
                </Route>
                <Route exact path = "/movies">
                    <div className = "header__form">
                        <div className = "header__container-profile">
                        <Link to = '/'><img src={ logo } alt = "Логотип" className = "header__logo-profile" /></Link>
                        <div className = "header__profile">
                        <Link to = "/movies" className = "header__link-profile">Фильмы</Link>
                        <Link to = "/saved-movies" className = "header__link-profile">Сохраненные фильмы</Link>
                        </div>
                        <div>
                        <Link to="/profile"><img src = { profile } alt = "Профиль" className = "header__profile-btn" /></Link>
                        </div>
                        <button type="button" onClick={onMenu} className={`header__button-menu ${isMenuIcon}`}><img src={menu} alt='Меню' className = 'header__popup-menu'/></button>
                        </div>
                    </div>
                </Route>
                <Route exact path = "/saved-movies">
                    <div className = "header__form">
                        <div className = "header__container-profile">
                        <Link to = "/"><img src = { logo } alt = "Логотип" className = "header__logo-profile" /></Link>
                        <div className = "header__profile">
                        <Link to = "/movies" className = "header__link-profile">Фильмы</Link>
                        <Link to = "/saved-movies" className = "header__link-profile">Сохраненные фильмы</Link>
                        </div>
                        <div>
                        <Link to = "/profile"><img src = { profile } alt = "Профиль" className = "header__profile-btn" /></Link>
                        </div>
                        <button type='button' onClick={onMenu} className={`header__button-menu ${isMenuIcon}`}><img src={menu} alt='Меню' className = 'header__popup-menu' /></button>
                        </div>
                    </div>
                </Route>
            </Switch>
                
                
        
    )
}