import logo from './logo.svg';
import './App.css';
import Information from './Information';
import BackGround from './BackGround'
import OpenMain from './OpenMain';
import Main from './Main';
function App() {
  return (
    <div>
      <BackGround>
        <Information name="face"></Information>
        <Information name="major"></Information>
        <Information name="habit"></Information>
        <Information name="mbti"></Information>
        <Information name="instar"></Information>
        <Main></Main>
        <OpenMain></OpenMain>
      </BackGround>
    </div>


  );
}

export default App;
