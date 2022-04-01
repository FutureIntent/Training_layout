import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import section from './../../css/home/lane_section.module.scss';

function Lane_section() {

    return (
        <Box className={ section.container }>        
                <Box className={section.grid}>
                <Card className={ section.item }>
                    <CardActionArea className={ section.actionArea }>
                            <CardMedia
                                component="img"
                                height="auto"
                                image={require("./../../assets/top_lane.jpg")}
                                alt="top"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="div" className={ section.header }>
                                    TOP LANE
                                </Typography>
                            <Typography variant="body2" color="text.secondary" className={ section.text }>
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                </Card>
                <hr className={ section.cardSplitter }/>
                <Card className={section.item}>
                    <CardActionArea className={section.actionArea}>
                            <CardMedia
                                component="img"
                                height="auto"
                                image={require("./../../assets/mid_lane.jpg")}
                                alt="top"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="div" className={section.header}>
                                    MID LANE
                                </Typography>
                            <Typography variant="body2" color="text.secondary" className={section.text}>
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                </Card>
                <hr className={ section.cardSplitter }/>
                <Card className={section.item}>
                    <CardActionArea className={section.actionArea}>
                            <CardMedia
                                component="img"
                                height="auto"
                                image={require("./../../assets/bot_lane.jpg")}
                                alt="top"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="div" className={section.header}>
                                    BOT LANE
                                </Typography>
                            <Typography variant="body2" color="text.secondary" className={section.text}>
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Box>         
        </Box>
        );
}

export default Lane_section;