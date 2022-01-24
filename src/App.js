import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { 
  HomePage
} from './pages';

const App = () => {  
  return (
    <Router>
      <Routes>
        {/* <Route exact path="/pick/:userId/:weekNumber">
          <SetOthersPicksPage />
        </Route> */}
        <Route exact path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
