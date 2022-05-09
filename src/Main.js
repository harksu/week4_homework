import React from 'react'
import TypeIt from 'typeit-react';

const Main = () => {
    const OpenMain = ({ children }) => {
        const style = {
            backgroundImage: 'linear-gradient(90deg, red, orange, yellow, green, blue, navy, purple)',
            color: 'rainbow',
            fontSize: "30px",
        };
        return <strong style={style}>{children}</strong>;
    };

    return (
        <section>
            <ul>
                <li>
                    점잖은 이미지의 오래된 감자 LV : 25 임학수라고 합니다</li>
                <br></br>
                <li>정보통신 공학과 17학번이고, 컴퓨터 공학은 작년부터 복수 전공 하고있어요!</li>
                <br></br>
                <li>ESFJ였다가, ISFJ였다가 다시 ESFJ가 되었습니다</li>
                <br></br>
                <li>인스타 그램 그렇게 열심히 하진 않지만 우리 모두 친해져요~</li>
                <br></br>
                <li>
                    <TypeIt>
                        리액트는 너무 어려웡..  <OpenMain>열심히 하겠습니다아</OpenMain>
                    </TypeIt></li>
            </ul>
        </section>
    )
}

export default Main