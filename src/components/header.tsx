import React from 'react';
import { Box, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import style from './../css/header/header.module.scss';

function Header() {

    function menu() {
        const menu = document.getElementById("menu");
        if (menu) {
            menu.style.width = "100%";
        }
    }

    return (
        <Box className={ style.container }>
            <IconButton onClick={ menu }>
                <MenuIcon className={style.menuIcon} />
            </IconButton>
            <Box className={ style.menu } id="menu">
                fsf
            </Box>
        </Box>
        );
}

export default Header;