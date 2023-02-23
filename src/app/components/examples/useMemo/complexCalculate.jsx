import React, { useEffect, useState, useMemo } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";

function factorial(n) {
    return n ? n * factorial(n - 1) : 1;
}

function runFactorial(n) {
    console.log("run factorial");
    return factorial(n);
}

const ComplexCalculateExample = () => {
    const [value, setValue] = useState(100);
    const [otherState, setOtherState] = useState(false);

    const fact = useMemo(() => runFactorial(value), [value]);

    const buttonColor = otherState ? "primary" : "secondary";

    useEffect(() => {
        console.log("render buttonColor");
    }, [buttonColor]);
    return (
        <>
            <CardWrapper>
                <SmallTitle>Кэширование сложных вычислений</SmallTitle>
                <p>Значение: {value}</p>
                <p>Результат факториала: {fact}</p>
                <button
                    className="btn btn-primary mx-2"
                    onClick={() => {
                        setValue((prevState) => prevState + 10);
                    }}
                >
                    Инкремент
                </button>
                <button
                    className="btn btn-primary mx-2 ml-4"
                    onClick={() => {
                        setValue((prevState) => prevState - 10);
                    }}
                >
                    Декремент
                </button>
            </CardWrapper>
            <CardWrapper>
                <SmallTitle>Зависимость от сторонних setState</SmallTitle>
                <button
                    className={`btn ms-md-2 btn-` + buttonColor}
                    onClick={() => setOtherState((prevState) => !prevState)}
                >
                    Изменить цвет {otherState}
                </button>
            </CardWrapper>
        </>
    );
};

export default ComplexCalculateExample;
