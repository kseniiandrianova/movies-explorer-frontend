import './Promo.css';
import promoLogo from '../../images/promo-logo.svg';
import { Link } from 'react-router-dom';

export default function Promo () {
    return (
        <section className="promo">
            <div className="promo__container">
                <div className="promo__note">
                <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
                <p className="promo__subtitle">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
            </div>
            <img className="promo__image" src={ promoLogo } alt = "Логотип" />
            </div>
            <Link className="promo__link " to="#more">Узнать больше</Link>
        </section>
    )
}