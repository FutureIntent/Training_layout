import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

import Home from './pages/home';
import Header from './components/header'
import { Box } from '@mui/material';

function App() {

  return (
      <BrowserRouter>
          <Box>
             <Box>
              <Header />
               <Routes>             
                  <Route path="/" element={<Home />} />
               </Routes>
             </Box>
          </Box>
      </BrowserRouter>

  );
}

export default App;
