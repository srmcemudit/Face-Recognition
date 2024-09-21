import React from 'react';

import './App.css';
import Header from './components/Header';
import About from './pages/About';
import Attendance from './pages/Attendance';
import Register from './pages/Register';
import { Route, Link } from 'react-router-dom';

function App() {
  return (
    <>
      <Route path="./" component={Header} />
      <Route path='/pages/About' component={About} />
    </>
  );
}

export default App;
