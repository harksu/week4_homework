function BackGround(props) {

    const backImgStyle = {
        backgroundImage: "url('imgs/images.png')",
        backgroundRepeat: 'no - repeat',
        backgroundSize: 'cover',
        width: '100%',
        height: '100vh',
        overflow: 'scroll',

    };


    return (
        <body style={backImgStyle}>
            {props.children}
        </body>
    );
}

export default BackGround;