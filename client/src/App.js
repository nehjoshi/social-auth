import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Post from './pages/Post';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';


function App() {
  const user = false;
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/login' element={user ? <Navigate to='/' /> : <Login />} />
          <Route path="/post/:id" element={user ? <Post /> : <Navigate to='/login' />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
