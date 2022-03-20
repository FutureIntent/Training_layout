import { Box, CardMedia } from '@mui/material';
import React from 'react';
import section from './../../css/home/explore_section.module.css';

function Explore_section() {

    return (
        <Box className={section.explore_section}>
            <CardMedia
                className={section.media}
                 component="video"
                 src={require('./../../assets/Aatrox.mp4')}
                 autoPlay
                 muted
                 loop
            />
            <Box className={ section.container }>
                <h1 className={section.header}>
                    Lane Award 2022
                </h1>
                <button className={ section.btn }>
                    <span className={section.btn__content}>Vote Now_</span>
                    <span className={section.btn__glitch}></span>
                </button>
            </Box>           
        </Box>
        );
}
export default Explore_section;