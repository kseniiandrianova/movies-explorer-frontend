import './Portfolio.css';
import webWay from '../../images/web-way.svg';
import { Link } from 'react-router-dom';

export default function Portfolio () {
    return (
        <section className="portfolio">
            <h2 className="portfolio__title">Портфолио</h2>
            <div className="portfolio__box">
                <Link href = "#" className="portfolio__link" >
                  <p> Статичный сайт</p>
                  <img src = { webWay } alt = "way" className = "portfolio__way" />
                </Link>
                
                <Link className="portfolio__link" href = "#">
                <p>Адаптивный сайт</p>
                <img src = { webWay } alt = "way" className = "portfolio__way" />
                </Link>
                <Link className="portfolio__link" href = "#">
                <p>Одностраничное приложение</p>
                <img src = { webWay } alt = "way" className = "portfolio__way" />
                </Link>
      </div>
        </section>
    )
}