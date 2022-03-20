import React from 'react';
import CardMedia from '@mui/material/CardMedia';
import { Box } from '@mui/material';
import section from './../../css/home/logo_section.module.css';

function Logo_section() {

    return (
        <Box className={ section.container }>
            <CardMedia
                className={ section.media }
                component="img"
                image={require('./../../assets/logo.png')}
                alt="Udyr"
            />
        </Box>
        );
}

export default Logo_section;