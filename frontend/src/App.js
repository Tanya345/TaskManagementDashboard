import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import './css/mui.css'
import Homepage from './components/Homepage';
import HomePageBody from './components/HomePageBody';
import Login from './components/Login';
import Register from './components/Register';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Dashboard from './components/Dashboard';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
