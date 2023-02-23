import React from "react";
import SmallTitle from "../../common/typografy/smallTitle";

// const withLogin = function (Component) {
//     return function (props) {
//         ...
//     };
// };

// То же самое, но через стрелочную фу-ю

const withLogin = (Component) => (props) => {
    const isLogin = localStorage.getItem("auth");
    return (
        <>
            {isLogin ? <Component {...props} /> : <SmallTitle>Auth</SmallTitle>}
        </>
    );
};

export default withLogin;
