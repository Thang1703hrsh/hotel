import React, { Component } from 'react'
import Typewriter from 'typewriter-effect';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../asset/css/slick.scss';
import {
  Link
} from "react-router-dom";
import Button from '@mui/material/Button';


const data = [
  {title:"5 Star Ratings",url:"https://i.ibb.co/7Vd7LZQ/favpng-hotel-malta-palace-5-star.png"},
]

export default class SimpleSlider extends Component {
    render() {
      return (
    <header class="header">

    <div class="header__text-box">
      <h1 >
      The Perfect Base For You
      </h1>
      <p> 
        <Typewriter
      options={{
    strings: ['Unique Place To Relax And Enjoy', ' Connecting People'],
    autoStart: true,
    loop: true,
    }}
    onInit={(typewriter) => {
    typewriter.typeString()
      .callFunction(() => {
        console.log('String typed out!');
      })
      .pauseFor(1000)
      .deleteAll()
      .callFunction(() => {
        console.log('All strings were deleted');
      })
      .start();
    }}
    />
    </p>
    
    <Button className="header__text-box-inputContainer" sx={{ color: 'white', borderColor: 'white' }} variant="outlined" component={Link} to={'/rooms'}>
      Discover Now
    </Button>
    
    <div>

    <div className="header__text-box-card_container">
            <div className="header__text-box-card_container--inner">
            {data.map((item,index) =>{return(
                    <div key={index} className="header__text-box-card_container--inner-card">
                        <img src={item.url} alt="item"/>
                        <h1>The Ultimate Luxury Hotel</h1>
                    </div>
                )})}
                </div>
              
            </div>
        </div>
      </div>
    </header>
        )
    }
}
