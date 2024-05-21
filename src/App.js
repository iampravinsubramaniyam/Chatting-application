import './App.css';
import Register from './pages/Register.jsx';
import './styles/Register.css';
import './styles/Home.css';
import Login from './pages/Login.jsx';
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home.jsx';


function App() {
  return (
    <div className="App">
        <Home/>
        {/* <Login/>
          <Routes>
              <Route path = '/' element = {<Login/>}/>
              <Route path = '/register' element = {<Register/>}/>
          </Routes> */
        }
    </div>
  );
}

export default App;
