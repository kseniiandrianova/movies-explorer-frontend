import "./AboutProject.css";

export default function AboutProject() {
    return (
        <section className="about-project">
            <h2 className="about-project__title">О проекте</h2>
            <div className="about-project__container">
                <div className="about-project__note">
                <h3 className="about-project__title_note">Дипломный проект включал 5 этапов</h3>
                <p className="about-project__subtitle_note">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                </div>
                <div className="about-project__note">
                <h3 className="about-project__title_note">На выполнение диплома ушло 5 недель</h3>
                <p className="about-project__subtitle_note">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </div>
            </div>
                
            <div className="about-project__time">
                <span className="about-project__backend">1 неделя</span>
                <span className="about-project__frontend">4 недели</span>
                <p className = "about-project__time-text">Back-end</p>
                <p className = "about-project__time-text">Front-end</p>
            </div>
        </section>
    )
}