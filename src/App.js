import { Route, Routes } from 'react-router-dom';
import NewAccount from './Account/newAccount';
import SecondPage from './SecondPage/secondPage';
import Login from './Login/login';
import LandingPage from './LandingPage/landingPage';
import NavBar from './Components/NavBar/NavBar';
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar></NavBar>
      </header>

      <div className="back">
      <Routes>
      <Route path="/" element={<LandingPage></LandingPage>}></Route>
      <Route path="/Login" element={<Login></Login>}></Route>
      <Route path="/SecondPage" element={<SecondPage></SecondPage>}></Route>
      <Route path ="/NewAccount" element={<NewAccount></NewAccount>}></Route>

      </Routes>
      </div>

      <link rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
        crossOrigin="anonymous"
      />
      
      
    </div>


  );
}

export default App;
