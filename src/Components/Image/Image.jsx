import "./Image.scss";

function Image({ src, alt }) {
    return <img className="Image" src={src} alt={alt} />;
}

export default Image;
