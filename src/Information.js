import { useState } from "react";

const imgStyle = {
    marginTop: '30px',
    width: '200px',
    height: '200px',
    display: 'block',
    marginRight: 'auto',
    marginLeft: 'auto',
    borderRadius: '50px',
};

const blockStyle = {
    marginTop: '20px',
    float: 'left',
    width: '20%',

};

const pStyle = {
    marginTop: '15px',
    fontSize: '30px',
    fontFamily: '궁서',
    textAlign: 'center',
}
//css 인라인 관리가 진짜 개극혐 이거 나중에 따로 공부하기 

function Information({ name, link }) {

    const questionImg = "imgs/question.png"; //기본 이미지 
    const appearImg = `imgs/${name}.png` // 프랍스 이미지 
    const [isHoverImg, setIsHoverImg] = useState(questionImg) // 상태관리 
    const change = () => { // 귀찮긴 한데 내가 코드 못짜니까 일단 상태 2개를 함수로 관리 
        setIsHoverImg(appearImg)
    }
    const reset = () => {
        setIsHoverImg(questionImg)
    }
    const isInstar = link === 'true' ? 'https://www.instagram.com/harrrrrrrk_su/' : '#'

    return <div style={blockStyle} className={name} > {/*컴포넌트 반환 */}
        <a href={isInstar}>
            <img style={imgStyle} src={isHoverImg} onMouseOver={change} onMouseOut={reset}></img>
        </a>
        <p style={pStyle}> {name}무엇</p>

    </div>
}

export default Information;

