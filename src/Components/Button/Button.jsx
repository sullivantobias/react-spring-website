import { useState } from "react";
import { useSpring, animated } from "@react-spring/web";

import useMeasure from "react-use-measure";

import "./Button.scss";

function Button({ label, isReady }) {
    const [open, toggle] = useState(false);
    const [ref, { width }] = useMeasure();
    const props = useSpring({
        width: open ? width : 0,
        config: {
            duration: 4000,
        },
    });

    function onClick() {
        toggle(true);

        setTimeout(() => {
            isReady(true);
        }, 4000);
    }

    return (
        <div className="Button">
            <animated.div>
                {props.width.to((x) => {
                    const percentage = Number((x / 4).toFixed(0));

                    return percentage + "%";
                })}
            </animated.div>
            <div ref={ref} className="Button__wrapper" onClick={onClick}>
                <animated.div className="Button__fill" style={props} />
                <animated.div className="Button__content">{label}</animated.div>
            </div>
        </div>
    );
}

export default Button;
