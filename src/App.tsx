import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

import Home from './pages/home';
import Header from './components/header';
import Vote from './pages/vote';

function App() {

  return (
         <BrowserRouter>        
              <Header />
                 <Routes>             
                     <Route path="/" element={<Home />} />
                     <Route path="/vote" element={<Vote />} />
                 </Routes>
         </BrowserRouter>
  );
}

export default App;
