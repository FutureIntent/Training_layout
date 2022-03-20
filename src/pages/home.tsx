import React from 'react';
import Box from '@mui/material/Box';
import Logo_section from './home_components/logo_section';
import Explore_section from './home_components/explore_section';
import Fraction_section from './home_components/fraction_section';

function Home() {



    return (
        <Box sx={{ width: '100%' }}>           
            <Explore_section />
            <Fraction_section />
        </Box>
   )
}

export default Home;