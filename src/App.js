import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CarList from './components/CarList';
import CarDetail from './components/CarDetail';

import './style/App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CarList />} />
        <Route path="/detail/:id" element={<CarDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
