// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Registration from './pages/Registration';
import Login from './pages/Login';
import Main from './pages/Main';

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Registration />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/main" element={<Main user={user} />} />
      </Routes>
    </Router>
  );
};

export default App;
