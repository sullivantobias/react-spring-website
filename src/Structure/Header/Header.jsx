import { useSpring, animated, useScroll } from "@react-spring/web";

import Image from "../../Components/Image/Image";
import Menu from "./Menu/Menu";

import "./Header.scss";

const MENU_LIST = [
    "L'univers Arkose",
    "1ère fois ?",
    "Où grimper ?",
    "Tarifs",
    "Actus",
];

function Header({ isReady }) {
    const clockProps = useSpring({
        from: { opacity: isReady && 0 },
        to: [{ display: isReady && "flex" }, { opacity: isReady && 1 }],
    });

    const { scrollYProgress } = useScroll();

    const date = new Date();
    const displayedDate = `${date.getHours()}:${
        date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()
    }`;

    return (
        <animated.div
            className="Header"
            style={{
                background: scrollYProgress.to(
                    (value) =>
                        `linear-gradient(180deg, #2D2A26 ${
                            value * 100
                        }%, rgba(45,42,38,0) 100%)`
                ),
            }}
        >
            <div className="Header__logo">
                <Image
                    src="https://arkose.com/files/img/page/ee00f21511f6c/93d9869a66-disp.svg"
                    alt="logo"
                />
            </div>

            <animated.div style={clockProps} className="Header__menu">
                <Menu menuList={MENU_LIST} />
            </animated.div>

            <animated.div style={clockProps} className="Header__clock">
                {displayedDate}
            </animated.div>
        </animated.div>
    );
}

export default Header;
