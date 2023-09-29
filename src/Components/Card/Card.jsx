import "./Card.scss";

function Card({ src, title }) {
    return (
        <div className="Card">
            <img className="Card__image" src={src} alt={src} />
            <div className="Card__title">{title}</div>
        </div>
    );
}

export default Card;
