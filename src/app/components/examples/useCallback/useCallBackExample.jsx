import React, { useRef, useState, useEffect, useCallback } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";

const UseCallBackExample = () => {
    const [data, setData] = useState({});

    const withOutCallBack = useRef(0);
    const withCallBack = useRef(0);

    const handleChange = ({ target }) => {
        setData((prevState) => ({ ...prevState, [target.name]: target.value }));
    };
    // WithOut callback
    const valudateWithOutCallback = (data) => {
        console.log("Without", data);
    };

    useEffect(() => {
        withOutCallBack.current++;
    }, [valudateWithOutCallback]);

    // With callback

    const validateWithCallback = useCallback((data) => {
        console.log("With", data);
    }, []);

    useEffect(() => {
        withCallBack.current++;
    }, [validateWithCallback]);

    useEffect(() => {
        valudateWithOutCallback(data);
        validateWithCallback(data);
    }, [data]);

    return (
        <CardWrapper>
            <SmallTitle>Example</SmallTitle>
            <p>Render withOut callback: {withOutCallBack.current}</p>
            <p>Render with callback: {withCallBack.current}</p>
            <label htmlFor="email" className="form-label">
                Email
            </label>
            <input
                type="email"
                className="form-control"
                id="email"
                value={data.email || ""}
                name="email"
                onChange={handleChange}
            />
        </CardWrapper>
    );
};

export default UseCallBackExample;
