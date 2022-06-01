import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getGreetings } from './redux/messages/greetingReducer';
import GreetingPage from './pages/home/GreetingPage';

function App() {
  const dispatch = useDispatch();
  useEffect(() => { dispatch(getGreetings()); }, []);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GreetingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
