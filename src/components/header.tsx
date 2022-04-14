import React from 'react';
import { Box, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import style from './../css/header/header.module.scss';
import CloseIcon from '@mui/icons-material/Close';

function Header() {

    function menu_open() {
        const menu = document.getElementById("menu");
        const close = document.getElementById("close");
        if (menu && close) {
            menu.style.width = "100%";
            setTimeout(() => { close.style.display = "block" },1000)
        }
    }

    function menu_close() {
        const menu = document.getElementById("menu");
        const close = document.getElementById("close");
        if (menu && close) {
            menu.style.width = "0%";
            close.style.display = "none";
        }
    }

    return (
        <Box className={ style.container }>
            <IconButton onClick={ menu_open }>
                <MenuIcon className={style.menuIcon} />
            </IconButton>
            <Box className={ style.menu } id="menu">
                <Box className={ style.close_wrapper }>
                    <button className={style.close_button} onClick={ menu_close } id="close">
                        <CloseIcon className={ style.close_icon }/>
                    </button>
                </Box>
            </Box>
        </Box>
        );
}

export default Header;