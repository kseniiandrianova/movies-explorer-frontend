import './Techs.css';

export default function Techs() {
    return (
        <section className="techs">
            <h2 className="techs__title">Технологии</h2>
            <div className="techs__container">
                <h3 className="techs__description-title">7 технологий</h3>
                <p className="techs__description-subtitle">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
            </div>
            <ul className="tech__box">
                <li className="tech__list">HTML</li>
                <li className="tech__list">CSS</li>
                <li className="tech__list">JS</li>
                <li className="tech__list">React</li>
                <li className="tech__list">Git</li>
                <li className="tech__list">Express.js</li>
                <li className="tech__list">mongoDB</li>
      </ul>
        </section>
    )
}