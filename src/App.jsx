import React from "react";
import { 
  BrowserRouter as Router, 
  Route,
  Routes,
  Navigate
} from 'react-router-dom';
import Header from "./layout/Header";
import HomePage from './pages/HomePage';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={ <HomePage /> }/>
        <Route path="*" element={ <Navigate to="/" replace /> } />
      </Routes>
    </Router>
  );
}

export default App;
