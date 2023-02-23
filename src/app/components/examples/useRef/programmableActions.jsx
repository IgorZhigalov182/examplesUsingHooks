import React, { useRef } from "react";
import CardWrapper from "../../common/Card";
import Divider from "../../common/divider";
import SmallTitle from "../../common/typografy/smallTitle";
const ProgrammableActionsExample = () => {
    const inputRef = useRef();

    const handleClick = () => {
        inputRef.current.focus();
    };

    const handleChangeWidth = () => {
        inputRef.current.style.width = "50%";
    };

    return (
        <CardWrapper>
            <SmallTitle className="card-title">
                Программируемые действия и свойства
            </SmallTitle>
            <Divider />
            <label htmlFor="email" className="form-label">
                Email
            </label>
            <input
                ref={inputRef}
                type="email"
                className="form-control"
                id="email"
            />
            <button className="btn btn-primary mt-2" onClick={handleClick}>
                Focus input
            </button>
            <br />
            <button
                className="btn btn-secondary mt-2"
                onClick={handleChangeWidth}
            >
                Изменить ширину
            </button>
        </CardWrapper>
    );
};

export default ProgrammableActionsExample;
