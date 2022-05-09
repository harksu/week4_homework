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
        <Information name="face" link="false"></Information>
        <Information name="major" link="false"></Information>
        <Information name="habit" link="false"></Information>
        <Information name="mbti" link="false"></Information>
        <Information name="instar" link="true"></Information>
        <Main></Main>
      </BackGround>
    </div>


  );
}

export default App;
