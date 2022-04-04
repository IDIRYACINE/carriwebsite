import './App.css';
import { Route, Routes } from 'react-router-dom';
import NewAccount from './Account/newAccount';
import SecondPage from './SecondPage/secondPage';
import SignUp from './SignUp/signUp';
import LandingPage from './LandingPage/landingPage';
import NavBar from './Components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar></NavBar>
      </header>

      
      <Routes>
      <Route path="/" element={<LandingPage></LandingPage>}></Route>
      <Route path="/SignUp" element={<SignUp></SignUp>}></Route>
      <Route path="/SecondPage" element={<SecondPage></SecondPage>}></Route>
      <Route path ="/NewAccount" element={<NewAccount></NewAccount>}></Route>

      </Routes>

      <link rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
        crossOrigin="anonymous"
      />
      
      
    </div>


  );
}

export default App;
