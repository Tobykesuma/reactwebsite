import React, { Component } from 'react';
import 'swiper/css';
import Achievement1 from '../../assets/Tournament/esl.png';
import Achievement2 from '../../assets/Tournament/Intellogo.png';
import Achievement3 from '../../assets/Tournament/Lupon.png';
import Achievement4 from '../../assets/Tournament/Oxtradelogo.png';
import Achievement5 from '../../assets/Tournament/prasmul.png';
import {
    AchievementSection,
    AchievementsTitle,
    AcheivementHeading,
    AchievementsImage1,
    AchievementsImage2,
    AchievementsImage3,
    AchievementsImage4,
    AchievementCard,


    } 
    from './AchievementsElements';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";




export default class AutoPlay extends Component {
    render() {
        var settings = {
            dots: false,
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 5000,
            initialSlides: 0,
            responsive : [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        initialSlides: 2,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return(
            <AchievementSection>
                <AchievementsTitle>
                    <AcheivementHeading>
                        ACHIEVEMENTS
                    </AcheivementHeading>
                </AchievementsTitle>
                <Slider {...settings}>
                    <AchievementCard>

                    </AchievementCard>
                </Slider>
            </AchievementSection>
        );
    }    
}
