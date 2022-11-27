import './App.css';
import TopBar from './topbar/TopBar';
import Home from './pages/home/Home';
import Single from './pages/single/Single';
import Write from './write/Write';
import Settings from './pages/settings/Settings';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

const App = ()=> {
  const currentUser = true;
  return (
             <Router>
              <TopBar></TopBar>
              <Routes>
                <Route exact path='/' element={<Home/>}/>
                <Route  path="/register" element={<Register/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/write' element={<Write/>}/>
              </Routes>
             </Router>
      );
}

export default App;
