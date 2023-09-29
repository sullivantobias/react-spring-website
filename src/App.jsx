import { useState, useEffect } from "react";

import { useSpring, animated, useInView } from "@react-spring/web";

import classnames from "classnames";

import Header from "./Structure/Header/Header";

import Button from "./Components/Button/Button";
import Card from "./Components/Card/Card";
import Video from "./Components/Video/Video";

import "./App.scss";

const NAV_LINKS = [
    {
        name: "Escalade",
        logo: "https://arkose.com/files/img/page/ee00f21511f6c/93d9869a66-disp.svg",
        image: "https://arkose.com/files/img/page/ee00f21511f6c/b261f43e3a-disp.png",
    },
    {
        name: "Food & Drink",
        logo: "https://arkose.com/file/global_home~logo-cantine.svg",
        image: "https://arkose.com/files/img/page/ee00f21511f6c/2c89569f52-disp.png",
    },
    {
        name: "Studio",
        logo: "https://arkose.com/file/global_home~logo-studio.svg",
        image: "https://arkose.com/files/img/page/ee00f21511f6c/0f17e75308-disp.png",
    },
    {
        name: "Lifestyle",
        logo: "https://arkose.com/file/global_home~shop-arkose.svg",
        image: "https://arkose.com/files/img/page/ee00f21511f6c/944d04b2a7-disp.png",
    },
    {
        name: "Talent",
        logo: "https://arkose.com/file/global_home~logo-heroes.svg",
        image: "https://arkose.com/files/img/page/ee00f21511f6c/31234fb6cd-disp.jpg",
    },
    {
        name: "Escapade",
        logo: "https://arkose.com/file/global_home~logo-escapade.png",
        image: "https://arkose.com/files/img/page/ee00f21511f6c/a5959bd568-disp.jpg",
    },
    {
        name: "Arkose +",
        logo: "https://arkose.com/files/img/page/ee00f21511f6c/93d9869a66-disp.svg",
        image: "https://arkose.com/files/img/page/ee00f21511f6c/59ce4258c6-disp.jpg",
    },
];

const FIND_CARDS = [
    {
        src: "https://arkose.com/file/global_home~arkose-bordeaux.jpg",
        label: "Arkose Bordeaux",
    },
    {
        src: "https://arkose.com/file/global_home~arkose-canal.jpg",
        label: "Arkose Canal",
    },
    {
        src: "https://arkose.com/file/global_home~arkose-didot.jpg",
        label: "Arkose Didot",
    },
];

function App() {
    const [isReady, setIsReady] = useState(false);
    const [displayedSection, setDisplayedSection] = useState(0);
    const [isHovering, setIsHovering] = useState(false);
    const [isHoveringFind, setIsHoveringFind] = useState(false);

    const [footerRef, footerSprings] = useInView(
        () => ({
            from: {
                opacity: 0,
                x: -1000,
            },
            to: {
                opacity: 1,
                x: 0,
            },
        }),
        { rootMargin: "-50% 0px", once: true }
    );

    const buttonProps = useSpring({
        to: [{ opacity: isReady ? 0 : 1 }, { display: isReady && "none" }],
    });

    const videoProps = useSpring({
        from: { opacity: isReady && 0 },
        to: [{ display: isReady && "flex" }, { opacity: isReady && 1 }],
    });

    const titleProps = useSpring({
        from: isReady && { opacity: 0, marginTop: 200 },
        to: isReady && { opacity: 1, marginTop: 0 },
        delay: 300,
    });

    const scrollProps = useSpring({
        from: { marginBottom: 0 },
        to: [{ marginBottom: -20 }, { marginBottom: 0 }],
        loop: true,
        config: { duration: 500 },
    });

    const rightPanelProps = useSpring({
        translateX: isHovering ? -30 : 0,
        transform: isHovering ? "scale(1.05)" : "scale(1)",
    });

    const imagesProps = useSpring({
        transform: isHoveringFind ? "scale(1.05)" : "scale(1)",
    });

    function handleHovering() {
        setIsHovering((prev) => !prev);
    }

    function handleHoveringFind() {
        setIsHoveringFind((prev) => !prev);
    }

    // temporary for dev
    useEffect(() => setIsReady(false), []);

    return (
        <div className="App">
            <Header isReady={isReady} />
            <div className="App__content">
                <animated.div style={videoProps} className="App__videoWrapper">
                    <animated.a
                        style={scrollProps}
                        className="App__videoWrapper--scroll"
                        href="#univers"
                    >
                        <svg
                            width="28"
                            height="31"
                            viewBox="0 0 28 31"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M0 16.9659L2.87671 14.2264L12.274 23.6946L11.9384 20.8589V0H16.0616V20.8589L15.774 23.6946L25.1712 14.2264L28 16.9659L14 31L0 16.9659Z"
                                fill="#EBEBEB"
                            ></path>
                        </svg>
                    </animated.a>
                    <animated.div
                        style={titleProps}
                        className="App__videoWrapper--title"
                        data-text="#LiveElevated"
                    >
                        <h1>#LiveElevated</h1>
                    </animated.div>
                    <button className="App__videoWrapper--button">
                        <span />
                        Trouvez votre loft d'escalade
                    </button>
                    <Video src="https://arkose.com/files/video/page/ee00f21511f6c/d9cce045f4.mp4" />
                </animated.div>
                {isReady && (
                    <>
                        <section id="univers" className="App__univers">
                            <h2 className="App__univers--title">
                                Tout l’univers de la culture grimpe
                            </h2>
                            <div className="App__univers--content">
                                <nav className="kl-about-control">
                                    <ul
                                        className="kl-text-control"
                                        role="tablist"
                                    >
                                        {NAV_LINKS.map((link, index) => (
                                            <li key={index} role="presentation">
                                                <span
                                                    onClick={() =>
                                                        setDisplayedSection(
                                                            index
                                                        )
                                                    }
                                                    className={classnames(
                                                        "kl-text-control-link",
                                                        {
                                                            "is-active":
                                                                index ===
                                                                displayedSection,
                                                        }
                                                    )}
                                                >
                                                    {link.name}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </nav>
                                {NAV_LINKS.map(
                                    (element, index) =>
                                        index === displayedSection && (
                                            <animated.div
                                                key={index}
                                                style={rightPanelProps}
                                                onMouseEnter={handleHovering}
                                                onMouseLeave={handleHovering}
                                                className="App__univers--rightPanel"
                                            >
                                                {element.logo && (
                                                    <img
                                                        className="Logo"
                                                        src={element.logo}
                                                        alt={element.logo}
                                                    />
                                                )}
                                                <img
                                                    className="Image"
                                                    src={element.image}
                                                    alt={element.image}
                                                />
                                            </animated.div>
                                        )
                                )}
                            </div>
                        </section>
                        <animated.section
                            ref={footerRef}
                            style={footerSprings}
                            className="App__find"
                        >
                            <h2>Trouvez votre loft Arkose</h2>
                            <animated.div className="App__find__images">
                                {FIND_CARDS.map(({ src, label }) => (
                                    <animated.div
                                        onMouseEnter={handleHoveringFind}
                                        onMouseLeave={handleHoveringFind}
                                        style={imagesProps}
                                    >
                                        <Card src={src} title={label} />
                                    </animated.div>
                                ))}
                            </animated.div>
                        </animated.section>
                        <div class="kl-footer-bottom">
                            {" "}
                            <img
                                src="https://arkose.com/files/img/page/ee00f21511f6c/93d9869a66-disp.svg"
                                alt="arkose logo"
                                class="img-fluid kl-logo-footer"
                            />
                            <div class="kl-copyright">
                                {" "}
                                2022, Arkose. Tous droits réservés.{" "}
                                <span>
                                    <a
                                        href="https://arkose.com/legal/mentions-legales"
                                        target="_blank"
                                    >
                                        Mentions légales
                                    </a>{" "}
                                    |{" "}
                                    <a
                                        href="https://arkose.com/legal/cgv"
                                        target="_blank"
                                    >
                                        CGV
                                    </a>{" "}
                                    |{" "}
                                    <a
                                        href="https://arkose.com/legal/politique-de-confidentialite"
                                        target="_blank"
                                    >
                                        Politique de Confidentialité
                                    </a>{" "}
                                    |{" "}
                                    <a
                                        href="https://arkose.com/legal/politique-de-confidentialite"
                                        target="_blank"
                                    >
                                        Cookies
                                    </a>
                                </span>{" "}
                            </div>{" "}
                        </div>
                    </>
                )}

                {!isReady && (
                    <animated.div
                        className="App__enterButton"
                        style={buttonProps}
                    >
                        <Button
                            isReady={(isReady) => setIsReady(isReady)}
                            label="Live Elevated"
                        />
                    </animated.div>
                )}
            </div>
        </div>
    );
}

export default App;
