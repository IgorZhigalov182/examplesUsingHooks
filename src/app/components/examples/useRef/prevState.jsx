import React, { useRef, useState, useEffect } from "react";
import CardWrapper from "../../common/Card";
import Divider from "../../common/divider";
import SmallTitle from "../../common/typografy/smallTitle";
const PrevStateExample = () => {
    const prevState = useRef("");
    const [otherState, setOtherState] = useState("false");

    const toggleOtherState = () => {
        setOtherState((prevState) =>
            otherState === "false" ? "true" : "false"
        );
    };

    useEffect(() => {
        prevState.current = otherState;
    }, [otherState]);

    return (
        <CardWrapper>
            <SmallTitle>Предыдущее состояние</SmallTitle>
            <Divider />
            <p>prevState: {prevState.current}</p>
            <p>currentState: {otherState}</p>
            <button className="btn btn-primary" onClick={toggleOtherState}>
                toggle state
            </button>
        </CardWrapper>
    );
};

export default PrevStateExample;
