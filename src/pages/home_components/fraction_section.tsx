import React from 'react';
import './../../css/home/fraction_section.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Box, CardMedia, Divider } from '@mui/material';

function Fraction_section() {

    return (
        <Box className="content">
            <Divider className="divider" />
        <Swiper
            modules={[Pagination, Navigation]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            grabCursor={ true }
        >
            <SwiperSlide>
                <Box className="container">                  
                  <Box className="info">
                    <CardMedia className="media_1"
                        component="img"
                        image={require('./../../assets/Aatrox.png')}
                        alt="Aatrox"
                    />
                    <Box className="wrapper">
                        <h1 className="header_1">TOP LANE</h1>
                        <p className="description_1">Top is a long lane and there is no ally champion to lane with. The 1v1 nature of top also means there are more champion options than any other role.</p>
                     </Box>
                  </Box>
                </Box>
            </SwiperSlide>
            <SwiperSlide>
                    <Box className="container">
                        <Box className="info">
                            <CardMedia className="media_2"
                                component="img"
                                image={require('./../../assets/Zed.png')}
                                alt="Zed"
                            />
                            <Box className="wrapper">
                                <h1 className="header_1">MID LANE</h1>
                                <p className="description_1">Mid lane has been the most popular role since the inception of League of Legends. It is known for its high map impact and heavy damage playstyle.</p>
                            </Box>
                        </Box>
                    </Box>
            </SwiperSlide>
            <SwiperSlide>
                    <Box className="container">
                        <Box className="info">
                            <CardMedia className="media_3"
                                component="img"
                                image={require('./../../assets/Jhin.png')}
                                alt="Jhin"
                            />
                            <Box className="wrapper">
                                <h1 className="header_1">BOT LANE</h1>
                                <p className="description_1">Bot lane is a role so important to success that they have a dedicated support champion to protect them in lane. </p>
                            </Box>
                        </Box>
                    </Box>
            </SwiperSlide>
            </Swiper>
            </Box>
        )
}

export default Fraction_section;