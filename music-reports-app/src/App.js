import React from 'react';
import Dashboard from './Pages/Dashboard';
import { BrowserRouter as Router, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Route path='/' component={Dashboard} />
      </Router>
    </div>
  );
}

export default App;
