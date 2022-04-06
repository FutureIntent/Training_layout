import React from 'react';
import { Box, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import style from './../css/header/header.module.scss';

function Header() {

    return (
        <Box className={ style.container }>
            <IconButton>
                <MenuIcon className={ style.menuIcon }/>
            </IconButton>
        </Box>
        );
}

export default Header;