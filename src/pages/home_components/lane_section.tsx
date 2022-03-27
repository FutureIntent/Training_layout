import { Box, Card, CardActionArea, CardContent, CardMedia, Container, Typography } from '@mui/material';
import React from 'react';
import section from './../../css/home/lane_section.module.scss';

function Lane_section() {

    return (
        <Box className={ section.container }>
            <Container maxWidth='xl'>
                <Box className={section.wrapper} sx={{width: 'auto'}}>
                    <Card>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="auto"
                                image={require("./../../assets/top_lane.jpg")}
                                alt="top"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    TOP LANE
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                    <Card>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="auto"
                                image={require("./../../assets/mid_lane.jpg")}
                                alt="top"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    MID LANE
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                    <Card>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="auto"
                                image={require("./../../assets/bot_lane.jpg")}
                                alt="top"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    BOT LANE
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Box>
            </Container>
        </Box>
        );
}

export default Lane_section;