import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {
  Link
} from "react-router-dom";
import '../asset/css/slick.css';

const photo =[
  {
    name: 'photo 1',
    src: 'https://i.ibb.co/Xj3P9Gw/ICSaigon-Frontpage.jpg'
  },
  {
    name: 'photo 2',
    src: 'https://i.ibb.co/G0NcNB2/Inter-Continental-Saigon-Hotel-Lobby-0.jpg'
  },
  {
    name: 'photo 3',
    src: 'https://i.ibb.co/Mg9m9cc/ICSaigon-Frontpage-03-0.jpg'
  }
]


export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 600,
      slidesToShow: 1,
      slidesToScroll: 1,
      className: "slides"
    };
    return (
      <div >
        <Slider {...settings}>
        
        {photo.map((photo) => {
          return(
            <div className="slide-container" >
              <p><span>-</span> Welcome <span>-</span></p>
              <Typography className="brand">BK Luxury Hotel</Typography>
              <Button className="dis-btn" style={{backgroundColor: "#ECD4BB"}} variant="text" component={Link} to={'/rooms'}>Discover Now</Button>
             
              <img height="100%" src={photo.src} className="img-slider" alt=''></img>
            </div>
          )
        } )}
          
        </Slider>
      </div>
    );
  }
}