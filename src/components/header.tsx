import React from 'react';
import { Box, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import style from './../css/header/header.module.scss';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';

function Header() {

    function menu_open() {
        const menu = document.getElementById("menu");
        const close = document.getElementById("close");
        const content = document.getElementById("content");
        if (menu && close && content) {
            menu.style.width = "100%";
            setTimeout(() => { close.style.display = "block" }, 1000)
            setTimeout(() => { content.style.display = "flex" }, 1000)
        }
    }

    function menu_close() {
        const menu = document.getElementById("menu");
        const close = document.getElementById("close");
        const content = document.getElementById("content");
        if (menu && close && content) {
            menu.style.width = "0%";
            close.style.display = "none";
            content.style.display = "none";
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
                <Box className={ style.content_wrapper } id="content">
                    <p className={style.menu_option}>
                        <Link to="/" className={style.link} onClick={menu_close}>
                            HOME
                        </Link>
                    </p>
                    <p className={style.menu_option}>
                        <Link to="/about" className={style.link} onClick={menu_close}>
                            ABOUT
                        </Link>
                    </p>
                    <p className={style.menu_option}>
                        <Link to="/vote" className={style.link} onClick={menu_close}>
                            VOTE
                        </Link>
                    </p>
                </Box>
            </Box>
        </Box>
        );
}

export default Header;