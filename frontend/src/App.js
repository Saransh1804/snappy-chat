import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Import Navigate for navigation in v6
} from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Chat from './pages/Chat';
import SetAvatar from './components/SetAvatar';

function App() {
  return (
  <Router>
    <Routes>
      <Route exact path="/register" element={<Register/>} />
      <Route exact path="/login" element={<Login/>} />
      <Route exact path="/setAvatar" element={<SetAvatar/>} />
      <Route exact path="/" element={<Chat/>} />
    </Routes>
  </Router>
    )
}

export default App