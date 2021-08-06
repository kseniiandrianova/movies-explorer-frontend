import './AboutMe.css';
import myPhoto from '../../images/my-photo.png';
import { Link } from 'react-router-dom';

export default function AboutMe () {
    return (
        <section className="about-me">
            <h2 className="about-me__title">Студент</h2>
            <div className="about-me__container">
                <div className="about-me__note">
                <h2 className="about-me__name">Ксения Андрианова</h2>
                <h3 className="about-me__description">Фронтенд-разработчик, 25 лет</h3>
                <p className="about-me__story">
                    Я родилась на Северном Кавказу, живу в Праге. 
                    Я люблю читать книги, а ещё увлекаюсь просмотром фмльмов. Недавно начала кодить.
                    С 2016 года работала в сфере услуг. 
                    Сейчас учусь на веб-разработчика на курсах от Яндекс, надеюсь в дальнейшем найти работу мечты.
                 </p>
                 <div className="about-me__links">
                <Link className="about-me__link" href = "#">Facebook</Link>
                <Link className="about-me__link" href="https://github.com/kseniiandrianova" >Github</Link>
                </div>
                </div>
                
                <img className="about-me__image" src={ myPhoto } alt = "Моя фотография" />
            </div>
            
        </section>
    )
}