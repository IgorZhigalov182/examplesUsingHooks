import React from "react";
import SmallTitle from "../../common/typografy/smallTitle";
import CardWrapper from "../../common/Card";

const withFunction = (Component) => (props) => {
    const isAuth = localStorage.getItem("auth");
    const onLogin = () => {
        localStorage.setItem("auth", "Собака");
    };
    const onLogOut = () => {
        localStorage.removeItem("auth");
    };
    return (
        <>
            {props ? (
                <CardWrapper>
                    <Component
                        isAuth={isAuth}
                        onLogin={onLogin}
                        onLogOut={onLogOut}
                    />
                </CardWrapper>
            ) : (
                <SmallTitle>Auth</SmallTitle>
            )}
        </>
    );
};

export default withFunction;
