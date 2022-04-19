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
                <Box className={style.content_wrapper} id="content">
                    <Box className={style.option_wrapper}>                   
                        <Link to="/" className={style.menu_option} onClick={menu_close}>
                            HOME
                            <hr className={style.option_underLine} />
                        </Link>                                              
                    </Box>
                    <Box className={style.option_wrapper}>
                        <Link to="/about" className={style.menu_option} onClick={menu_close}>
                            ABOUT
                            <hr className={style.option_underLine} />
                        </Link>
                    </Box>
                    <Box className={style.option_wrapper}>
                      <p className={style.menu_option}>VOTE</p>
                        <Box className={style.option_dropDown}>
                            <Box className={style.dropDown_wrapper}>
                                <Link to="/vote" className={style.dropDown_option} onClick={menu_close}>
                                TOP
                                </Link>
                                <Link to="/vote" className={style.dropDown_option} onClick={menu_close}>
                                    MID
                                </Link>
                                <Link to="/vote" className={style.dropDown_option} onClick={menu_close}>
                                    BOT
                                </Link>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
        );
}

export default Header;