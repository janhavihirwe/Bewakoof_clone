
import './App.css'
import Men from './components/Men'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home'
import Women from './components/Women'
import Bag from './components/Bag'
import Login from './components/Login'
import Register from './components/Register'


function App() {
  return (
    <>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  )
}

export default App
