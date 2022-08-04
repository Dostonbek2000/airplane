import React from 'react';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom';


//components
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Default';
import Comparison from './components/Comparison/Comparison';



const App = () => {

  return (
    <Router>
       <Navbar />
       <Routes>
          <Route path='/'  element={<Home />} />
          <Route path='/comparison'  element={<Comparison />} />
       </Routes>
    </Router>
  )
}

export default App
