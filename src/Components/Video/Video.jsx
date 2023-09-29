import "./Video.scss";

function Video({ src }) {
    return <video className="Video" autoPlay loop muted src={src} />;
}

export default Video;
