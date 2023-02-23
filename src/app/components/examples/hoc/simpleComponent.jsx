import React from "react";
import PropTypes from "prop-types";

const SimpleComponent = ({ onLogin, onLogOut, isAuth }) => {
    console.log(onLogin);
    return (
        <>
            {!isAuth && (
                <button className="btn btn-primary" onClick={onLogin}>
                    Войти
                </button>
            )}
            {isAuth && (
                <button className="btn btn-secondary" onClick={onLogOut}>
                    Выйти из системы
                </button>
            )}
        </>
    );
};
SimpleComponent.propTypes = {
    onLogin: PropTypes.func,
    onLogOut: PropTypes.func,
    isAuth: PropTypes.string
};

export default SimpleComponent;
