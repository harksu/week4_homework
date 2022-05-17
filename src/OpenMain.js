import React from 'react'
import TypeIt from 'typeit-react';

const OpenMain = ({ children }) => {
    const style = {
        backgroundImage: 'linear-gradient(90deg, red, orange, yellow, green, blue, navy, purple)',
        color: 'rainbow',
        fontSize: "30px",
    };
    return <strong style={style}>{children}</strong>;
};

export default () => {
    return (
        <ul>
            <TypeIt>
                리액트는 너무 어려웡..  <OpenMain>열심히 하겠습니다아</OpenMain>
            </TypeIt>
        </ul>
    );
};